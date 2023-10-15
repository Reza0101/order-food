import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./../Redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </>
  );
}
