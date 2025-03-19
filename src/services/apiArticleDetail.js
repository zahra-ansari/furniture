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

export async function getArticleDetail(slug) {
  const response = await fetch(
    `https://furnitureshopp.pythonanywhere.com/blog/${slug}/`
  );
  if (!response.ok) {
    throw new Error("NetWork response was not ok");
  }
  const data = await response.json();

  return data;
}
