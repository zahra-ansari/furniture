//import { convertToPersian } from "../../utils/helpers";
import PropTypes from "prop-types";
// import { useArticleDetail } from "./useArticleDetail";
// import { useFetchComment } from "../CommentBox/useFetchComment";
// import Spinner from "../../Ui/Spinner";
// import { useFetchReplyComment } from "../CommentBox/useFetchReplyComment";

function ArticleDetail({ articleDetail }) {
  const { id, title, content, created_at, updated_at, image_url } =
    articleDetail;

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
          {/* <img src={image_url} className="w-full h-full" /> */}
          <img src="/images/article/1.png" className="w-full h-full" />
        </div>
        <span className="font-Vazir xl:w-[550px] mt-4 text-justify">
          {/* {content} */}
          {
            "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند."
          }
        </span>
      </div>
      <div className="flex flex-col gap-y-5 mt-4 xl:mt-0">
        <span className="font-VazirBlack text-2xl">{title}</span>
        <div>
          <span className="font-VazirMedium">تاریخ: </span>
          {/* <span className="font-Vazir">{convertToPersian(created_at)}</span> */}
          <span className="font-Vazir">{"11 / 12 / 1400"}</span>
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
