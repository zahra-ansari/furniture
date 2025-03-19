import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Footer = ({ marginClass }) => {
  return (
    <footer
      className={`${marginClass} flex flex-wrap gap-10 justify-center lg:justify-between xl:gap-x-28 xl:mr-[157px] xl:ml-[139px]`}
    >
      <div className="w-48">
        <div className="flex items-center gap-x-1">
          <svg className="w-8 h-10">
            <use href="#furniking"></use>
          </svg>
          <span className="font-VazirBold">مبلمان</span>
        </div>
        <p className="font-Vazir mt-5">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>
      </div>
      <div className="flex flex-col">
        <span className="font-VazirBlack">لینک های مفید:</span>
        <div className="flex flex-col gap-y-3 mt-5">
          <NavLink to="#" className="font-Vazir hover:text-green">
            سوالات متداول
          </NavLink>
          <NavLink
            to={`/contactusandcriticism`}
            className="font-Vazir hover:text-green"
          >
            انتقادات و پیشنهادات
          </NavLink>
          <NavLink to={`/aboutus`} className="font-Vazir hover:text-green">
            درباره ما
          </NavLink>
          <NavLink to={`/articles`} className="font-Vazir hover:text-green">
            مقالات
          </NavLink>
        </div>
      </div>
      <div>
        <span className="font-VazirBlack">ارتباط با ما:</span>
        <div className="flex flex-col gap-y-3 mt-5">
          <div className="flex">
            <a href="#">
              <svg className="w-8 h-8">
                <use href="#facebook"></use>
              </svg>
            </a>
            <a href="#">
              <svg className="w-8 h-8">
                <use href="#twitter"></use>
              </svg>
            </a>
            <a href="#">
              <svg className="w-8 h-8">
                <use href="#instagram"></use>
              </svg>
            </a>
            <a href="#">
              <svg className="w-8 h-8">
                <use href="#pinterest"></use>
              </svg>
            </a>
          </div>
          <div>
            <span className="font-VazirBlack">تلفن:</span>
            <div>
              <span className="font-Vazir mr-3">031-33333333</span>
              <span className="font-Vazir">09130000000</span>
            </div>
          </div>
          <div>
            <span className="font-VazirBlack">آدرس:</span>
            <p className="font-Vazir">اصفهان، خیابان مهر، روبروی پارک حافظ</p>
          </div>
        </div>
      </div>
      <div>
        <span className="font-VazirBlack">مجوزات:</span>
        <div className="flex flex-col lg:flex-row mt-5">
          <img
            src="dist/images/permits/rezi.png"
            alt=""
            className="w-20 h-20"
          />
          <img
            src="dist/images/permits/enamad.png"
            alt=""
            className="w-20 h-20"
          />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  marginClass: PropTypes.any,
};

export default Footer;
