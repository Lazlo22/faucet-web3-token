import { ToastContainer } from 'react-toastify';

import MainLayout from "./layouts/index";
import Title from "./components/Title/index";
import ReownProvider from "./components/ReownProvider/index";
import Faucet from "./components/Faucet/index";

import './App.css';

function App() {
    return (
        <>
            <ReownProvider>
                <MainLayout>
                    <Title/>
                    <Faucet />
                </MainLayout>
            </ReownProvider>
            <ToastContainer position='top-center' />
        </>
    );
}

export default App;
