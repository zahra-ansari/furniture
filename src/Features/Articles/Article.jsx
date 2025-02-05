import { NavLink, useLocation } from "react-router-dom";
//import { convertToPersian } from "../../utils/helpers";
import PropTypes from "prop-types";

function Article({ article }) {
  const { id, title, content, created_at, updated_at, image_url } = article;

  const location = useLocation();

  const currentPath = location.pathname.split("/")[1];

  return (
    <NavLink to={`/${currentPath}/eacharticle/${id}`}>
      <div className="flex gap-x-5 items-center">
        <div className="w-[100px] h-[100px]">
          <img src={image_url} className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-y-2 w-[80%]">
          <span className="font-VazirBlack">{title}</span>
          <span className="font-VazirMedium">
            {/* {convertToPersian(created_at)} */}
            1401/12/11
          </span>
          <span className="font-Vazir line-clamp-2">{content}</span>
        </div>
      </div>
    </NavLink>
  );
}

Article.propTypes = {
  article: PropTypes.any,
};

export default Article;
