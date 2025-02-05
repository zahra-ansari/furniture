// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { submitReplyCommentApi } from "../../services/apiReplyComments";
// import toast from "react-hot-toast";
// import { useUserSession } from "../authentication/useUserSession";

// export function useSubmitReplyComment() {
//   const { session } = useUserSession();
//   const queryClient = useQueryClient();

//   const { mutate: submitReplyComment } = useMutation({
//     mutationFn: async ({
//       replyCommentText,
//       commentId,
//       productId,
//       articleId,
//     }) => {
//       if (!session) {
//         throw new Error("ابتدا باید وارد سیستم شوید");
//       }

//       if (!productId && !articleId) {
//         throw new Error("شناسه محصول یا شناسه مقاله نامعتبر است");
//       }

//       await submitReplyCommentApi({
//         user_id: session?.user?.id,
//         replyCommentText,
//         commentId,
//         productId,
//         articleId,
//       });
//     },

//     onSuccess: () => {
//       toast.success("پاسخ شما با موفقیت ثبت شد");
//       queryClient.invalidateQueries({ queryKey: ["replycomment"] });
//     },
//     onError: (error) => {
//       toast.error(`خطا: ${error.message}`);
//     },
//   });

//   return { submitReplyComment };
// }
