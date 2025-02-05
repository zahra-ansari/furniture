// import supabase from "./supabase";

// export async function loginUser({ email, password }) {
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) {
//     console.error(error);
//     throw new Error(
//       "در حال حاضر امکان ورود به سیستم فراهم نمی باشد، لطفا بعدا مراجعه کنید"
//     );
//   }

//   // data includes two objects session and user
//   return data;
// }

// export async function getUserSession() {
//   const {
//     // when we use {} for the command below, it is just session not user&session with together
//     data: { session },
//     error,
//   } = await supabase.auth.getSession();

//   if (error) {
//     console.error(error);
//     throw new Error("در حال حاضر امکان گرفتن اطلاعات کاربر وارد شده نمی باشد");
//   }

//   return session;
// }

// export async function logoutUser() {
//   const { error } = await supabase.auth.signOut();

//   if (error) {
//     console.error(error);
//     throw new Error(
//       "در حال حاضر امکان خروج کابر فراهم نیست، لطفا بعدا تلاش کنید"
//     );
//   }
// }

// export async function signupUser({ fullName, password, email, tel }) {
//   const { data, error } = await supabase.auth.signUp({
//     email,
//     password,
//     options: {
//       data: { fullName, tel },
//     },
//   });

//   if (error) {
//     console.error(error);
//     throw new Error(
//       "در حال حاضر امکان ثبت نام فراهم نیست، لطفا بعدا تلاش کنید"
//     );
//   }

//   return data;
// }

// export async function saveProfilePicture({ file }) {
//   const filePath = `${file.name}`; // فقط نام فایل بدون پوشه

//   // ابتدا بررسی کنید آیا فایل با همین نام وجود دارد یا نه
//   const { data: existingFiles, error: listError } = await supabase.storage
//     .from("avatars")
//     .list(); // لیست کل فایل‌ها بدون مشخص کردن پوشه

//   if (listError) {
//     throw listError;
//   }

//   // پیدا کردن فایل مشابه بر اساس نام فایل
//   const existingFile = existingFiles.find((f) => f.name === file.name);

//   // اگر فایل وجود داشت، آن را حذف کنید
//   if (existingFile) {
//     const { error: deleteError } = await supabase.storage
//       .from("avatars")
//       .remove([filePath]); // فایل را مستقیماً از باکت حذف کنید
//     if (deleteError) {
//       throw deleteError;
//     }
//   }

//   // حالا فایل جدید را آپلود کنید
//   const { error } = await supabase.storage
//     .from("avatars")
//     .upload(filePath, file, {
//       upsert: true, // فایل قبلی را جایگزین می‌کنیم
//     });

//   if (error) {
//     throw error;
//   }

//   const publicUrl = supabase.storage.from("avatars").getPublicUrl(filePath)
//     .data.publicUrl;

//   const { error: updateError } = await supabase.auth.updateUser({
//     data: {
//       avatar_url: publicUrl,
//     },
//   });

//   if (updateError) {
//     throw updateError;
//   }

//   return publicUrl;
// }
