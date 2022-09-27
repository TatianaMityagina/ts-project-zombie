import {useToast} from "vue-toastification";

export const baseToastConfig = {
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
}

export const useNotification = () => {
    const toast = useToast();
    const showError = (message: string) => {
        toast.error(message)
    }

    return { showError }
}