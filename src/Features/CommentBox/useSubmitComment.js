// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { useUserSession } from "../authentication/useUserSession";
// import { submitCommentApi } from "../../services/apiComments";
// import toast from "react-hot-toast";

// export function useSubmitComment() {
//   const { session } = useUserSession();
//   const queryClient = useQueryClient();

//   const { mutate: submitComment } = useMutation({
//     mutationFn: async ({ rating, comment, productId, articleId }) => {
//       if (!session) {
//         throw new Error("ابتدا باید وارد سیستم شوید");
//       }

//       if (!productId && !articleId) {
//         throw new Error("شناسه محصول یا شناسه مقاله نامعتبر است");
//       }

//       await submitCommentApi({
//         user_id: session?.user?.id,
//         comment,
//         rating,
//         productId,
//         articleId,
//       });
//     },

//     onSuccess: () => {
//       toast.success("نظر شما با موفقیت ثبت شد");
//       queryClient.invalidateQueries({ queryKey: ["comment"] });
//     },

//     onError: (error) => {
//       toast.error(`خطا: ${error.message}`);
//     },
//   });

//   return { submitComment };
// }
