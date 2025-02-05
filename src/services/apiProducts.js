// import supabase from "./supabase";

// export async function getProducts(category) {
//   let query = supabase.from("products").select("*");

//   if (category === "حراج") {
//     query = query.neq("discount", 0);
//   } else if (category !== "all") {
//     query = query.eq("type", category);
//   }

//   const { data, error } = await query;

//   if (error) {
//     console.error(error);
//     throw new Error(
//       "امکان نمایش محصولات در حال حاضر امکان پذیر نمی باشد. لطفا بعدا مراجعه نمائید"
//     );
//   }

//   return data;
// }

// export async function getSearchedProducts(searchTerm, category) {
//   let query = supabase.from("products").select("*");

//   if (category !== "all") {
//     query = query.eq("type", category);
//   }

//   if (searchTerm) {
//     query = query.ilike("name", `%${searchTerm}%`);
//   }

//   const { data, error } = await query;

//   if (error) {
//     console.error(error);
//     throw new Error(
//       "امکان جستجوی محصولات در حال حاضر امکان پذیر نمی باشد. لطفا بعدا مراجعه نمائید"
//     );
//   }

//   return data;
// }

// export async function buyProductsApi({
//   user_id,
//   id,
//   image_url,
//   name,
//   finalPrice,
// }) {
//   const { data, error } = await supabase
//     .from("orders")
//     .insert([
//       {
//         user_id,
//         product_id: id,
//         price: finalPrice,
//         name_product: name,
//         image_url: image_url,
//       },
//     ])
//     .select();

//   if (error) throw new Error(error.message);

//   return data;
// }

// export async function getBoughtProducts() {
//   const { data, error } = await supabase.from("orders").select("*");

//   if (error) {
//     console.error(error);
//     throw new Error(
//       "امکان نمایش محصولات خریداری شده در حال حاضر امکان پذیر نمی باشد. لطفا بعدا مراجعه نمائید"
//     );
//   }
//   return data;
// }

// export async function deleteShoppingCart(id) {
//   const { data, error } = await supabase.from("orders").delete().eq("id", id);

//   if (error) throw new Error(error.message);

//   return data;
// }
