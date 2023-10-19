import Layout from "@/components/Layout";
import useInput from "@/components/panle-admin/input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "@/services/axios";
import useToast from "./../hooks/useToast";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "@/Redux/store/user";

type IFormInput = {
  email: string;
  password: string;
  confirmPwd: string;
};
const register = () => {
  const { push } = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  // value inputs
  const email = useInput("");
  const password = useInput("");
  const confirmPwd = useInput("");

  // delte input values
  const deleteInputValue = () => {
    email.deleteValue();
    password.deleteValue();
    confirmPwd.deleteValue();
  };

  // function register
  const submitHandler = async () => {
    try {
      const responseRegister = await axios.post("/auth/register", {
        email: email.value,
        pwd: password.value,
      });

      if (responseRegister.status === 201) {
        useToast("ٍثبت نام با موفقیت انجام شد. لطفا وارد حساب خود شوید.", "success");
        deleteInputValue();
      }

      setTimeout(() => {
        push("/login");
      }, 1000);
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 409) {
          useToast(" کاربری از قبل وجود دارد.", "error");
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
              {...register("email", {
                required: "ایمل خود را وارد کنید!",
                validate: {
                  matchPattern: (v) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    "آدرس ایمیل اشتباه است!",
                },
              })}
              value={email.value}
              onChange={(e) => email.onChange(e.target.value)}
              type="email"
              className="w-full text-left text-[14px] border outline-none border-gray-4 py-1 px-2 rounded-4"
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
              value={password.value}
              onChange={(e) => password.onChange(e.target.value)}
              type="password"
              className="w-full text-[14px] border outline-none border-gray-4 py-1 px-2 rounded-4"
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

          <div className="relative my-5">
            <p className="bg-white px-2 absolute py-0 right-2 -top-3 text-[12px]">
              تکرار رمز ورود
            </p>
            <input
              {...register("confirmPwd", {
                required: "رمز خود را وارد کنید!",
                validate: (val: string) => {
                  if (watch("password") != val) {
                    return "رمز عبور یکسان نیست!";
                  }
                },
              })}
              value={confirmPwd.value}
              onChange={(e) => confirmPwd.onChange(e.target.value)}
              type="password"
              className="w-full text-[14px] border outline-none border-gray-4 py-1 px-2 rounded-4"
            />
            {errors.confirmPwd?.type && (
              <p className="text-red-500 text-[14px]">
                {errors.confirmPwd?.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              // disabled={!errors ? false : true}
              className={`text-white bg-primary w-full py-1 rounded-4 sm:w-fit sm:px-8`}
            >
              ثبت نام
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
export default register;
