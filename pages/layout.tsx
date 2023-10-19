import { loginUser } from "@/Redux/store/user";
import { decodeJWT } from "@/hooks/decode_jwt";
import { useDispatch, useSelector } from "react-redux";
import axios from "@/services/axios";
import { useEffect } from "react";

const Layout = ({ children }: any) => {
  // user store
  const userState = useSelector((state: any) => state.user);
  const dispathc = useDispatch();

  const requestRefreshToken = async () => {
    // get localstorage flagg
    const flaggRememberUser = localStorage.getItem("rememberFood");

    if (flaggRememberUser === "true" && !userState.authState) {
      // request refresh token api

      const responseRefreshToken = await axios.get("/auth/refresh");

      // get accessToken
      const accessToken = responseRefreshToken.data.accessToken;

      const { email, role } = decodeJWT(accessToken);

      // set data user in store
      dispathc(loginUser({ email, authState: true, role, accessToken }));
    }
  };

  useEffect(() => {
    requestRefreshToken();
  }, []);

  return <>{children}</>;
};

export default Layout;
