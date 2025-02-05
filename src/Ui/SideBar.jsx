import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const SideBar = ({ containerClass, widthClass }) => {
  // The entire path
  const location = useLocation();

  // pathname returns currentPath and we can get to a array that is splited with / .index(0) => "" and index(1) => "articles"
  const currentPath = location.pathname.split("/")[1] || "landing";

  return (
    <div
      className={`${containerClass} ${widthClass} hidden flex-col h-[454px] child:mt-2.5 child:h-8 child:border-b child:font-VazirMedium`}
    >
      <NavLink to={`/${currentPath}/all`} className="hover:text-green">
        همه
      </NavLink>

      <NavLink to="" className="hover:text-green">
        جدیدترین
      </NavLink>

      <NavLink to={`/${currentPath}/حراج`} className="hover:text-green">
        حراج فوق العاده
      </NavLink>

      <NavLink to={`/${currentPath}/مبلمان`} className="hover:text-green">
        مبلمان
      </NavLink>

      <NavLink to={`/${currentPath}/لوستر`} className="hover:text-green">
        لوستر
      </NavLink>

      <NavLink to={`/${currentPath}/میز`} className="hover:text-green">
        میز
      </NavLink>

      <NavLink to={`/${currentPath}/صندلی`} className="hover:text-green">
        صندلی
      </NavLink>

      <NavLink to={`/${currentPath}/ناهارخوری`} className="hover:text-green">
        ناهار خوری
      </NavLink>

      <NavLink to={`/${currentPath}/آینه`} className="hover:text-green">
        آینه
      </NavLink>

      <NavLink to={`/${currentPath}/عسلی`} className="hover:text-green">
        عسلی
      </NavLink>

      <NavLink to={`/${currentPath}/تخت`} className="hover:text-green">
        تخت
      </NavLink>
    </div>
  );
};

SideBar.propTypes = {
  containerClass: PropTypes.any,
  widthClass: PropTypes.any,
};

export default SideBar;
