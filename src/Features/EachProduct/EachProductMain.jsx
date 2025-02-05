import CommentBox from "../../Ui/CommentBox";
import Icons from "../../Ui/Icons";
//import Spinner from "../../Ui/Spinner";
//import { useFetchComment } from "../CommentBox/useFetchComment";
//import { useFetchReplyComment } from "../CommentBox/useFetchReplyComment";
//import { useProductDetail } from "./useProductDetail";

function EachProductMain() {
  //const { id: productId } = useProductDetail();
  //const { fetchComment, isPendingFetchComment } = useFetchComment();
  // const { fetchReplyComment, isPendingFetchReplyComment } =
  //   useFetchReplyComment();

  // if (isPendingFetchComment) return <Spinner />;
  // if (isPendingFetchReplyComment) return <Spinner />;

  //const productIdNumber = parseInt(productId, 10);
  const productIdNumber = parseInt(1, 10);

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
    return comment.product_id === productIdNumber;
  });

  const filteredReplyComments = fetchReplyComment.filter((replyComment) => {
    return replyComment.product_id === productIdNumber;
  });

  return (
    <>
      <Icons />
      <CommentBox
        //productId={productId}
        productId={1}
        filteredComments={filteredComments}
        filteredReplyComments={filteredReplyComments}
      />
      ;
    </>
  );
}

export default EachProductMain;
