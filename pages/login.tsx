import Layout from "@/components/Layout";
import useInput from "@/components/panle-admin/input";
import axios from "@/services/axios";
import Link from "next/link";
import { useForm } from "react-hook-form";
import useToast from "./../hooks/useToast";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { loginUser } from "@/Redux/store/user";
import { useState } from "react";
import { decodeJWT } from "@/hooks/decode_jwt";

// Type for inputs form
type IFormInput = {
  email: string;
  password: string;
  confirmPwd: string;
};

const login = () => {
  const dispatch = useDispatch();
  const [rememberUser, setRememberUser] = useState(false);

  const deleteInputValue = () => {
    email.deleteValue();
    pwd.deleteValue();
  };
  const { push } = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  // useInput values
  const email = useInput("");
  const pwd = useInput("");

  // login function
  const submitHandler = async () => {
    try {
      const responseLogin = await axios.post("/auth/login", {
        email: email.value,
        pwd: pwd.value,
      });

      const accessToken = JSON.parse(
        responseLogin.request.response
      ).accessToken;

      if (responseLogin.status === 200) {
        localStorage.setItem("rememberFood", JSON.stringify(rememberUser));
        useToast("لاگین با موفقیت انجام شد.", "success");
        const {email, role } = decodeJWT(accessToken)
        dispatch(
          loginUser({ email, role, accessToken, authState: true })
        );
        deleteInputValue();
      }

      setTimeout(() => {
        push("/");
      }, 1000);
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          useToast("لطفا ابتدا ثبت نام کنید.", "error");
          deleteInputValue();
        }
      }
    }
  };

  return (
    <Layout>
      <div className="mx-auto my-8 shadow-drop-shadow-6 w-[350px] md:w-[400px] rounded-4 md:rounded-8 p-3">
        <img
          src="/Images/logos/logo.png"
          className="mx-auto w-48 md:w-60"
          alt=""
        />
        <div className="my-5 flex items-center justify-center gap-2 font-bold">
          <Link href="/login">ورود</Link>
          <p>/</p>
          <Link href="/register">ثبت نام</Link>
        </div>
        <form
          onSubmit={handleSubmit(submitHandler)}
          action=""
          className="mt-10"
        >
          <div className="relative my-5">
            <p className="bg-white px-2 absolute py-0 right-2 -top-3 text-[12px]">
              ایمیل
            </p>
            <input
              value={email.value}
              {...register("email", {
                required: "ایمل خود را وارد کنید!",
                validate: {
                  matchPattern: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    "آدرس ایمیل اشتباه است!",
                },
              })}
              onChange={(e) => email.onChange(e.target.value)}
              type="email"
              className={`w-full text-left text-[14px] border outline-none border-gray-4 py-1 px-2 rounded-4 ${
                errors.email && "border-red-400"
              }`}
            />
            {errors.email?.type && (
              <p className="text-red-500 text-[14px]">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="relative my-5">
            <p className="bg-white px-2 absolute py-0 right-2 -top-3 text-[12px]">
              رمز ورود
            </p>
            <input
              {...register("password", {
                required: "رمز خود را وارد کنید!",
                minLength: 6,
                maxLength: 20,
              })}
              value={pwd.value}
              onChange={(e) => pwd.onChange(e.target.value)}
              type="password"
              className={`w-full text-[14px] border outline-none border-gray-4 py-1 px-2 rounded-4 ${
                errors.password && "border-red-400"
              }`}
            />
            {errors.password?.type && (
              <p className="text-red-500 text-[14px]">
                {errors.password?.message}
              </p>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <span className="text-red-500 text-[12px]">
                رمز عبور نباید بیشتر از 20 کاراکتر باشد!
              </span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className="text-red-500 text-[12px]">
                رمز عبور باید بیشتر از 6 کاراکتر باشد!
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-[14px]">
            <input
              onChange={() => setRememberUser((prev) => !prev)}
              className="cursor-pointer"
              type="checkbox"
            />
            <p>مرا به خاطر بسپار</p>
          </div>

          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className={`text-white mx-auto block bg-primary w-full py-1 rounded-4 sm:w-fit sm:px-10`}
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
export default login;
