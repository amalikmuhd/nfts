import { toast } from "react-toastify";

export const toastFunc = () => (next) => (action) => {
  if (navigator.onLine) {
    return next(action);
  } else {
    // window.location.href = "/404";
    // // alert("There is no internet connection");
    toast("No internet connection", {
      toastId: "network error",
      //theme: "colored",
    });
  }
};
