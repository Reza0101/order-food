import { toast } from "react-toastify";

const useToast = (message, type) => {
  const toastData = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  if (type === "success") {
    toast.success(message, toastData);
  } else {
    toast.error(message, toastData);
  }
};

export default useToast;
