import { convertToPersian } from "../../utils/helpers";
import PropTypes from "prop-types";
// import { useArticleDetail } from "./useArticleDetail";
// import { useFetchComment } from "../CommentBox/useFetchComment";
// import Spinner from "../../Ui/Spinner";
// import { useFetchReplyComment } from "../CommentBox/useFetchReplyComment";

function ArticleDetail({ articleDetail }) {
  const { content, create_at, image, slug, title, update_at } = articleDetail;
  const imageUrl = `https://furnitureshopp.pythonanywhere.com/${image}`;

  // const { id: articleId } = useArticleDetail();

  // const { fetchComment, isPendingFetchComment } = useFetchComment();
  // const { fetchReplyComment, isPendingFetchReplyComment } =
  //   useFetchReplyComment();

  // if (isPendingFetchComment) return <Spinner />;
  // if (isPendingFetchReplyComment) return <Spinner />;

  //const articleIdNumber = parseInt(articleId, 10);
  const articleIdNumber = parseInt(1, 10);

  const fetchComment = [
    {
      user_id: 1,
      comment: "سلام",
      rating: 2,
      product_id: 2,
      article_id: 2,
    },
  ];

  const fetchReplyComment = [
    {
      user_id: 2,
      reply_text: "علیک",
      comment_id: 3,
      product_id: 2,
      article_id: 2,
    },
  ];

  let countOfComments = 0;
  fetchComment.forEach((comment) => {
    if (comment.article_id === articleIdNumber) {
      countOfComments += 1;
    }
  });

  let countOfReplyComments = 0;
  fetchReplyComment.forEach((replyComment) => {
    if (replyComment.article_id === articleIdNumber) {
      countOfReplyComments += 1;
    }
  });

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="xl:w-[550px] xl:h-[275px]">
          <img src={imageUrl} className="w-full h-full" />
        </div>
        <span className="font-Vazir xl:w-[550px] mt-4 text-justify">
          {content}
        </span>
      </div>
      <div className="flex flex-col gap-y-5 mt-4 xl:mt-0">
        <span className="font-VazirBlack text-2xl">{title}</span>
        <div>
          <span className="font-VazirMedium">تاریخ: </span>
          <span className="font-Vazir">{convertToPersian(create_at)}</span>
        </div>
        <div>
          <span className="font-VazirMedium">تعداد نظرات: </span>
          <span className="font-Vazir">
            {/* {countOfComments + countOfReplyComments} */}
            {2}
          </span>
        </div>
        <div className="flex flex-wrap items-center">
          <span className="inline-block font-VazirMedium">اشتراک گذاری:</span>
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
        </div>
      </div>
    </>
  );
}

ArticleDetail.propTypes = {
  articleDetail: PropTypes.any,
};

export default ArticleDetail;
