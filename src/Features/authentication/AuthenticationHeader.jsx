import { useEffect, useState } from "react";
import Icons from "../../Ui/Icons";
import MenuBar from "../../Ui/MenuBar";
import NavBar from "../../Ui/NavBar";
import SideBar from "../../Ui/SideBar";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import { useLogin } from "./useLogin";

function AuthenticationHeadr() {
  const [activeForm, setActiveForm] = useState("signup");

  const [email, setEmail] = useState("aa@example.com");
  const [password, setPassword] = useState("987654321");
  const [rememberMe, setRememberMe] = useState(false);
  const [storedUsers, setStoredUsers] = useState([]);

  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;

  const { signup, isPendingSignup } = useSignup();
  const { login, isPendingLogin } = useLogin();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setStoredUsers(users);
  }, []);

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  function handleSubmitLogin(e) {
    e.preventDefault();

    if (rememberMe) {
      const updatedUsers = [...storedUsers];
      const existingUserIndex = updatedUsers.findIndex(
        (user) => user.email === email
      );

      if (existingUserIndex === -1) {
        updatedUsers.push({ email, password });
      } else {
        updatedUsers[existingUserIndex].password = password;
      }

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    login({ email, password });
  }

  const handleEmailChange = (e) => {
    const selectedEmail = e.target.value;
    setEmail(selectedEmail);

    const user = storedUsers.find((user) => user.email === selectedEmail);
    if (user) {
      setPassword(user.password);
    }
  };

  const onSubmit = (data) => {
    const { fullName, password, passwordConfirm, email, tel } = data;
    signup({ fullName, password, passwordConfirm, email, tel });
  };

  return (
    <>
      <Icons />
      <header>
        <NavBar containerClass="sm:flex" hiddenClass="sm:hidden" />
        <MenuBar containerClass="flex" widthClass="lg:w-64" />
        <div className="flex gap-x-2.5 mx-2.5 lg:mx-33.75">
          <SideBar containerClass="sm:flex" widthClass="w-64" />
          <div className="border border-green mt-6 sm:mt-0 w-full md:w-[50%] lg:w-[60%] xl:w-[50%] mx-auto rounded-ss-lg rounded-se-sm rounded-ee-lg rounded-es-sm">
            <div className="flex gap-x-4 m-6">
              <span
                className={`font-VazirBlack cursor-pointer ${
                  activeForm === "signup" ? "text-black" : "text-gray-400"
                }`}
                onClick={() => setActiveForm("signup")}
              >
                ثبت نام
              </span>

              <span
                className={`font-VazirBlack cursor-pointer ${
                  activeForm === "login" ? "text-black" : "text-gray-400"
                }`}
                onClick={() => setActiveForm("login")}
              >
                ورود
              </span>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`m-6 child:block child:outline-0 child:w-[90%] child:xl:w-[70%] child:mx-auto child:h-10 child:font-Vazir ${
                activeForm === "signup" ? "" : "hidden"
              }`}
            >
              <input
                type="text"
                id="fullName"
                placeholder="نام "
                className={`border-0 border-b mb-8 ${
                  isPendingSignup
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : ""
                }`}
                disabled={isPendingSignup}
                {...register("fullName", {
                  required: "پر کردن فیلد نام کاربری ضروری است",
                })}
              />
              {/* errors.fullName === {...register("fullName", */}
              {errors.fullName && (
                <span className="text-red-400">{errors.fullName.message}</span>
              )}

              <input
                type="password"
                id="password"
                placeholder="رمز ورود"
                className={`border-0 border-b mb-8 ${
                  isPendingSignup
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : ""
                }`}
                disabled={isPendingSignup}
                {...register("password", {
                  required: "پر کردن فیلد رمز ورود ضروری است",
                  minLength: {
                    value: 8,
                    message: "رمز عبور حداقل 8 کاراکتر نیاز است",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-400">{errors.password.message}</span>
              )}

              <input
                type="password"
                id="passwordConfirm"
                placeholder="تکرار رمز ورود"
                className={`border-0 border-b mb-8 ${
                  isPendingSignup
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : ""
                }`}
                disabled={isPendingSignup}
                {...register("passwordConfirm", {
                  required: "پر کردن فیلد تکرار رمز ورود ضروری است",
                  validate: (value) =>
                    value === getValues().password ||
                    "رمزعبورها باید باهم برابر باشند",
                })}
              />
              {errors.passwordConfirm && (
                <span className="text-red-400">
                  {errors.passwordConfirm.message}
                </span>
              )}

              <input
                type="email"
                id="email"
                placeholder="ایمیل"
                className={`border-0 border-b mb-8 ${
                  isPendingSignup
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : ""
                }`}
                disabled={isPendingSignup}
                {...register("email", {
                  required: "پر کردن فیلد ایمیل ضروری است",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "ایمیل معتبر وارد کنید",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-400">{errors.email.message}</span>
              )}

              <input
                type="tel"
                id="tel"
                placeholder="09130000000"
                className={`border-0 border-b mb-8 ${
                  isPendingSignup
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : ""
                }`}
                disabled={isPendingSignup}
                {...register("tel", {
                  required: "پر کردن فیلد شماره همراه ضروری است",
                  pattern: {
                    value: /^09\d{9}$/,
                    message: "شماره موبایل باید با 09 شروع شود و 11 رقم باشد",
                  },
                })}
              />
              {errors.tel && (
                <span className="text-red-500">{errors.tel.message}</span>
              )}

              <button
                type="sumbit"
                disabled={isPendingSignup}
                className="bg-green text-white rounded-ss-lg rounded-se-sm rounded-ee-lg rounded-es-sm"
              >
                {isPendingSignup ? "در حال ثبت نام شدن ..." : "ثبت نام"}
              </button>
            </form>

            <form
              onSubmit={handleSubmitLogin}
              className={`m-6 sm:mt-12 child:outline-0 child:xl:w-[70%] child:mx-auto child:font-Vazir ${
                activeForm === "login" ? "" : "hidden"
              }`}
            >
              <input
                list="email-list"
                type="email"
                value={email}
                onChange={handleEmailChange}
                disabled={isPendingLogin}
                placeholder="ایمیل"
                className={`block border-0 border-b w-[90%] h-10 mb-8 ${
                  isPendingLogin
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : ""
                }`}
              />

              <datalist id="email-list">
                {storedUsers.map((user) => (
                  <option key={user.email} value={user.email} />
                ))}
              </datalist>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isPendingLogin}
                placeholder="رمز عبور"
                className={`block border-0 border-b w-[90%] h-10 mb-8 ${
                  isPendingLogin
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : ""
                }`}
              />

              <div className="flex flex-wrap sm:flex-nowrap justify-between w-full sm:mt-12">
                <label className="flex items-start gap-1 w-[60%] lg:w-[50%] sm:mx-auto mb-4 sm:mb-0">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleCheckboxChange}
                    className="self-center"
                  />
                  <span className="inline-block font-VazirMedium text-sm text-gray-500">
                    مرا به خاطر بسپار
                  </span>
                </label>
                <a
                  href="#"
                  className="inline-block font-VazirMedium text-sm text-gray-500 text-right sm:text-left mb-4 sm:mb-0 w-[70%] lg:w-[60%] sm:mx-auto"
                >
                  رمز خود را فراموش کرده ام
                </a>
              </div>
              <button
                type="submit"
                disabled={isPendingLogin}
                className="block bg-green text-white h-10 w-[90%] sm:mt-8 rounded-ss-lg rounded-se-sm rounded-ee-lg rounded-es-sm"
              >
                {isPendingLogin ? "در حال وارد شدن..." : "ورود"}
              </button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
}

export default AuthenticationHeadr;
