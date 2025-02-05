import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
//import { convertToPersian } from "../../utils/helpers";

function ArticleInLanding({ article }) {
  const { id, title, content, created_at, updated_at, image_url } = article;

  const location = useLocation();

  const currentPath = location.pathname.split("/")[1];

  return (
    <div className="rounded-lg overflow-hidden">
      <NavLink
        to={`/${currentPath}/eacharticle/${id}`}
        className="block relative"
      >
        <img src={image_url} alt="" className="w-full h-full" />
        <span className="absolute bottom-10 xl:bottom-20 right-1 text-white font-VazirThin font-bold text-sm xs:text-xl sm:text-2xl md:text-3xl xl:text-4xl">
          {title}
        </span>
        <span className="absolute bottom-5 md:bottom-2 xl:bottom-14 right-1 text-white font-VazirThin font-normal text-xs xl:text-sm md:text-base">
          {/* {convertToPersian(created_at)} */}
        </span>
      </NavLink>
    </div>
  );
}

ArticleInLanding.propTypes = {
  article: PropTypes.any,
};

export default ArticleInLanding;
