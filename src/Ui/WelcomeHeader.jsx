import { NavLink } from "react-router-dom";
// import { useUserSession } from "../Features/authentication/useUserSession";
// import Spinner from "./../Ui/Spinner";

function WelcomeHeader() {
  // const { isPendingUsersession, session, errorUsersession } = useUserSession();

  //if (isPendingUsersession) return <Spinner />;

  // Optional Chaining is just for accessing nested objects
  // const userName =
  //   session?.user?.user_metadata?.fullName || session?.user?.email;

  return (
    <div className="w-full h-12.5 bg-green">
      <div className="flex justify-center sm:justify-between items-center h-full mx-2.5 md:mx-33.75">
        <span className="hidden sm:inline-block text-white font-VazirBold">
          به آنلاین شاپ ما خوش آمدید
        </span>
        <div className="flex gap-x-5">
          {/* {errorUsersession || !session ? (
            <NavLink to="/authentication" className="text-white font-Vazir">
              ثبت نام | ورود
            </NavLink>
          ) : (
            <NavLink to="" className="text-white font-Vazir">
              {userName}
            </NavLink>
          )} */}

          <NavLink to="/authentication" className="text-white font-Vazir">
            ثبت نام | ورود
          </NavLink>

          <span className="block w-[2.2px] h-[19px] bg-white"></span>
          <form>
            <select
              name="languages"
              className="bg-green text-white outline-none font-Vazir"
            >
              <option value="persian">فارسی</option>
              <option value="english">انگلیسی</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WelcomeHeader;
