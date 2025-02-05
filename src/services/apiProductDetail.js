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
