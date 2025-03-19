// import supabase from "./supabase";

// export async function getArticles() {
//   const { data, error } = await supabase.from("articles").select("*");

//   if (error) {
//     console.error(error);
//     throw new Error(
//       "امکان نمایش مقالات در حال حاضر امکان پذیر نمی باشد. لطفا بعدا مراجعه نمائید"
//     );
//   }
//   return data;
// }

export async function getArticles() {
  const response = await fetch(
    "https://furnitureshopp.pythonanywhere.com/blog/"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();

  return data.results;
}

// کدهای زیر مثل کد فوق هست فقط شفاف تر
// export async function getArticles() {
//   try {
//     const response = await fetch(
//       "https://furnitureshopp.pythonanywhere.com/blog/"
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching articles:", error);
//     return null;
//   }
// }
