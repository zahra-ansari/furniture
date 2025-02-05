import CommentBox from "../../Ui/CommentBox";
import Icons from "../../Ui/Icons";
//import Spinner from "../../Ui/Spinner";
// import { useFetchComment } from "../CommentBox/useFetchComment";
//import { useFetchReplyComment } from "../CommentBox/useFetchReplyComment";
// import { useArticleDetail } from "./useArticleDetail";

function EachArticleMain() {
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

  const filteredComments = fetchComment.filter((comment) => {
    return comment.article_id === articleIdNumber;
  });

  const filteredReplyComments = fetchReplyComment.filter((replyComment) => {
    return replyComment.article_id === articleIdNumber;
  });

  return (
    <>
      <Icons />
      <CommentBox
        // articleId={articleId}
        articleId={1}
        filteredComments={filteredComments}
        filteredReplyComments={filteredReplyComments}
      />
    </>
  );
}

export default EachArticleMain;
