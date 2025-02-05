import { useState } from "react";
//import { convertToPersian } from "../utils/helpers";
// import { useSubmitComment } from "../Features/CommentBox/useSubmitComment";
import StarRating from "./../Ui/StarRating";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import ResponseModal from "../Features/ResponseModal/ResponseModal";

const CommentBox = ({
  productId,
  articleId,
  filteredComments,
  filteredReplyComments,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedFullName, setSelectedFullName] = useState("");
  const [selectedCommentId, setSelectedCommentId] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  // const { submitComment } = useSubmitComment();

  const handleOpenResponseModal = (fullname, id) => {
    setModalVisible(true);
    setSelectedFullName(fullname);
    setSelectedCommentId(id);
  };

  const handleCloseResponseModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !comment) {
      toast.error("لطفا امتیاز و نظر خود را وارد کنید");
      return;
    }
    submitComment({ rating, comment, productId, articleId });
    setRating(0);
    setComment("");
  };

  return (
    <>
      {isModalVisible && (
        <ResponseModal
          handleClose={handleCloseResponseModal}
          fullname={selectedFullName}
          commentId={selectedCommentId}
          productId={productId}
          articleId={articleId}
        />
      )}

      <section className="border mt-10 mx-2.5 lg:mx-33.75">
        <span className="inline-block font-VazirBlack mt-4 mr-4">
          متن پرسش یا نظر
        </span>
        <form onSubmit={handleSubmit} className="w-[90%] mx-auto mt-5">
          <textarea
            className="font-Vazir border w-full resize-none"
            rows="5"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="متن نظر یا پرسش خود را در این قسمت وارد کنید..."
          ></textarea>
          <br />
          <div className="flex flex-wrap justify-between">
            <button
              type="submit"
              className="font-Vazir mb-4 mt-3 bg-green text-white hover:bg-white hover:text-green hover:border-2 hover:border-green rounded-ss-lg rounded-se-sm rounded-ee-lg rounded-es-sm w-28 h-10"
            >
              ثبت
            </button>
            <StarRating rating={rating} setRating={setRating} />
          </div>
        </form>
      </section>

      <section className="border mt-10 mx-2.5 lg:mx-33.75">
        <div className="flex justify-between mx-7 mt-6">
          <span className="inline-block font-VazirBlack text-2xl">پرسش ها</span>
        </div>

        <div className="border p-4 w-[90%] mx-auto my-7">
          <div className="flex justify-between">
            <div className="flex gap-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                <img src="/public/images/users/3.jpg" alt="" />
              </div>
              <div className="flex flex-col">
                <span className="font-VazirBold">{"مریم"}</span>
                <span className="font-VazirMedium text-xs">{"1401/12/11"}</span>
                <span className="font-Vazir mt-4">
                  {"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"}
                </span>
              </div>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => handleOpenResponseModal("مریم", 1)}
            >
              <svg className="w-5 h-5">
                <use href="#arrow-uturn-left"></use>
              </svg>
            </div>
          </div>

          <div>
            <div className="border p-4 w-[90%] mx-auto my-7">
              <div className="flex gap-x-3">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <img src="/public/images/users/2.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="font-VazirBold">{"علی"}</span>
                  <span className="font-VazirMedium text-xs">
                    {"1401/12/11"}
                  </span>
                  <span className="font-Vazir mt-4">
                    {
                      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {filteredComments.length !== 0 ? (
          filteredComments.map((commentObj) => (
            <div
              className="border p-4 w-[90%] mx-auto my-7"
              key={commentObj.user_id}
            >
              <div className="flex justify-between">
                <div className="flex gap-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <img src="/public/images/users/3.jpg" alt="" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-VazirBold">
                      {commentObj.fullname}
                    </span>
                    <span className="font-VazirMedium text-xs">
                      {convertToPersian(commentObj.created_at)}
                    </span>
                    <span className="font-Vazir mt-4">
                      {commentObj.comment}
                    </span>
                  </div>
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    handleOpenResponseModal(commentObj.fullname, commentObj.id)
                  }
                >
                  <svg className="w-5 h-5">
                    <use href="#arrow-uturn-left"></use>
                  </svg>
                </div>
              </div>

              {filteredReplyComments
                .filter(
                  (replyComments) => replyComments.comment_id === commentObj.id
                )
                .map((replyCommentObj) => (
                  <div key={replyCommentObj.user_id}>
                    <div className="border p-4 w-[90%] mx-auto my-7">
                      <div className="flex gap-x-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                          <img src="/public/images/users/2.png" alt="" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-VazirBold">
                            {replyCommentObj.fullname}
                          </span>
                          <span className="font-VazirMedium text-xs">
                            {convertToPersian(replyCommentObj.created_at)}
                          </span>
                          <span className="font-Vazir mt-4">
                            {replyCommentObj.reply_text}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))
        ) : (
          <section className="border p-4 w-[90%] mx-auto my-7 font-VazirMedium">
            تاکنون هیچ پرسشی ثبت نشده
          </section>
        )} */}
      </section>
    </>
  );
};

CommentBox.propTypes = {
  productId: PropTypes.any,
  articleId: PropTypes.any,
  filteredComments: PropTypes.any,
  filteredReplyComments: PropTypes.any,
};

export default CommentBox;
