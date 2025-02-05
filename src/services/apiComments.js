// import supabase from "./supabase";

// export async function submitCommentApi({
//   user_id,
//   comment,
//   rating,
//   productId,
//   articleId,
// }) {
//   const { data, error } = await supabase
//     .from("comments")
//     .insert([
//       {
//         user_id,
//         comment,
//         rating,
//         product_id: productId || null,
//         article_id: articleId || null,
//       },
//     ])
//     .select();

//   if (error) throw new Error(error.message);

//   return data;
// }

// export async function fetchCommentApi() {
//   const { data, error } = await supabase
//     .from("comments_with_users")
//     .select("*");

//   if (error) {
//     console.error("Error fetching data:", error);
//   } else {
//     return data;
//   }
// }
