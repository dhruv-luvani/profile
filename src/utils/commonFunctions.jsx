import { toast } from "sonner";
import { localStorageKey } from "../constants/common";

export const errorToast = (text) => toast.error(text || "Something went wrong")

export const successToast = (text) => toast.success(text || "Success")

export const infoToast = (text) => toast.info(text || "Information")

export const Logout = () => {
    localStorage.removeItem("persist:persistRoot");
    localStorage.removeItem(localStorageKey);
    window.location.reload();
};