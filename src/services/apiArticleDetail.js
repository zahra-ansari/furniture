// import supabase from "./supabase";

// export async function getArticleDetail(id) {
//   const { data, error } = await supabase
//     .from("articles")
//     .select("*")
//     .eq("id", id)
//     .single();

//   if (error) {
//     console.error(error);
//     throw new Error(
//       "امکان نمایش محصول موردنظر امکان پذیر نمی باشد.لطفا بعدا مراجعه نمائید"
//     );
//   }
//   return data;
// }
