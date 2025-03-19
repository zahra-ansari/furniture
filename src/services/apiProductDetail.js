// import supabase from "./supabase";

// export async function getProductDetail(id) {
//   const { data, error } = await supabase
//     .from("products")
//     .select("*")
//     .eq("id", id)
//     .single();

//   if (error) {
//     console.error(error);
//     throw new Error(
//       "امکان نمایش محصول موردنظر امکان پذیر نمی باشد. لطفا بعدا مراجعه کنید"
//     );
//   }
//   return data;
// }

export async function getProductDetail(slug) {
  const response = await fetch(
    `https://furnitureshopp.pythonanywhere.com/products/${slug}/`
  );
  if (!response.ok) {
    throw new Error("NetWork response was not ok");
  }
  const data = await response.json();

  return data;
}
