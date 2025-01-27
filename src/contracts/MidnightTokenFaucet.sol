// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract TokenFaucet is Ownable {
    IERC20 public token;
    uint256 public constant LOCK_TIME = 12 hours;
    uint256 public constant FAUCET_AMOUNT = 500 * 10**18;

    mapping(address => uint256) public lastClaimed;

    event TokensClaimed(address indexed user, uint256 amount, uint256 timestamp);

    constructor(address _tokenAddress, address initialOwner) Ownable(initialOwner) {
        require(_tokenAddress != address(0), "Invalid token address");
        token = IERC20(_tokenAddress);
    }

    function claimTokens() external {
        require(block.timestamp >= lastClaimed[msg.sender] + LOCK_TIME, "Claim too soon. Please wait 12 hours.");
        require(token.balanceOf(address(this)) >= FAUCET_AMOUNT, "Faucet is out of tokens");

        lastClaimed[msg.sender] = block.timestamp;

        require(token.transfer(msg.sender, FAUCET_AMOUNT), "Token transfer failed");

        emit TokensClaimed(msg.sender, FAUCET_AMOUNT, block.timestamp);
    }

    function faucetBalance() external view returns (uint256) {
        return token.balanceOf(address(this));
    }

    function timeUntilNextClaim(address user) external view returns (uint256) {
        if (block.timestamp >= lastClaimed[user] + LOCK_TIME) {
            return 0;
        } else {
            return (lastClaimed[user] + LOCK_TIME) - block.timestamp;
        }
    }

    function withdrawRemainingTokens() external onlyOwner {
        uint256 remainingBalance = token.balanceOf(address(this));
        require(token.transfer(super.owner(), remainingBalance), "Withdrawal failed");
    }
}
