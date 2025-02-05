// import supabase from "./supabase";

// export async function submitReplyCommentApi({
//   replyCommentText,
//   commentId,
//   user_id,
//   productId,
//   articleId,
// }) {
//   const { data, error } = await supabase
//     .from("replies")
//     .insert([
//       {
//         user_id,
//         reply_text: replyCommentText,
//         comment_id: commentId,
//         product_id: productId || null,
//         article_id: articleId || null,
//       },
//     ])
//     .select();

//   if (error) {
//     throw new Error(error.message);
//   }

//   return data;
// }

// export async function fetchReplyCommentApi() {
//   const { data, error } = await supabase
//     .from("reply_comments_with_users")
//     .select("*");
//   if (error) {
//     console.error("Error fetching reply comment:", error);
//   } else {
//     return data;
//   }
// }
