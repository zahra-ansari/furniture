import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const MenuBar = ({ containerClass, hiddenClass, widthClass }) => {
  // The entire path
  const location = useLocation();

  // pathname returns currentPath and we can get to a array that is splited with / .index(0) => "" and index(1) => "articles"
  const currentPath = location.pathname.split("/")[1] || "landing";

  return (
    <div className="hidden sm:block w-full">
      <div className="flex mx-2.5 lg:mx-33.75">
        <div
          className={`${containerClass} ${hiddenClass} ${widthClass} items-center justify-center lg:gap-x-5 h-16 bg-green mt-6 lg:pl-2.5`}
        >
          <svg className="hidden lg:block w-6 h-6 text-white">
            <use href="#queue-list"></use>
          </svg>
          <span className="text-white font-VazirBlack sm:w-32 lg:w-auto text-center">
            دسته بندی ها
          </span>
        </div>
        <ul className="flex items-center xl:gap-x-16 sm:gap-x-10 mr-20 sm:mr-5 mt-6 font-VazirMedium">
          <li>
            <NavLink to={`/landing`} className="hover:text-green">
              صفحه اصلی
            </NavLink>
          </li>
          <li>
            <NavLink to={`/${currentPath}/all`} className="hover:text-green">
              فروشگاه
            </NavLink>
          </li>
          <li>
            <NavLink to={`/articles`} className="hover:text-green">
              مقالات
            </NavLink>
          </li>
          <li>
            <NavLink to={`/aboutus`} className="hover:text-green">
              درباره ما
            </NavLink>
          </li>
          <li>
            <NavLink to={`/contactusandcriticism`} className="hover:text-green">
              ارتباط با ما
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  containerClass: PropTypes.any,
  hiddenClass: PropTypes.any,
  widthClass: PropTypes.any,
};

export default MenuBar;
