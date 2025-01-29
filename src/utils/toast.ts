import {toast} from "react-toastify";

export function showSuccessToast(message: string) {
    return toast.success(message);
}

export function showErrorToast(message: string) {
    return toast.error(message);
}
