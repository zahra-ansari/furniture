// import supabase from "./supabase";

// export async function calculateAndUpdateProductRating(productId) {
//   // دریافت میانگین امتیاز از جدول comments
//   const { data, error } = await supabase
//     .from("comments")
//     .select("rating")
//     .eq("product_id", productId);

//   if (error) {
//     console.error("Error fetching ratings:", error);
//     throw error;
//   }

//   const ratings = data.map((comment) => comment.rating); // data=[{rating:4}]   ratings=[4]

//   const averageRating = ratings.length
//     ? ratings.reduce((a, b) => a + b, 0) / ratings.length
//     : 0;

//   // به‌روزرسانی میانگین امتیاز در جدول products
//   const { error: updateError } = await supabase
//     .from("products")
//     .update({ rating: averageRating })
//     .eq("id", productId);

//   if (updateError) {
//     console.error("Error updating product rating:", updateError);
//   }

//   return averageRating; // میانگین امتیاز را برگردان
// }
