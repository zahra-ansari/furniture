// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { deleteShoppingCart } from "../../services/apiProducts";
// import toast from "react-hot-toast";
// import { useUserSession } from "../authentication/useUserSession";

// export function useDeleteShoppingCart() {
//   const { session } = useUserSession();
//   const queryClient = useQueryClient();

//   const { mutate: deleteItem } = useMutation({
//     mutationFn: async (id) => {
//       if (!session) {
//         throw new Error("برای حذف کالا باید ابتدا وارد سیستم شوید");
//       }
//       await deleteShoppingCart(id);
//     },

//     onSuccess: () => {
//       toast.success("خرید مورد نظر حذف شد");
//       queryClient.invalidateQueries({ queryKey: ["shoppingCart"] });
//     },

//     onError: (error) => {
//       toast.error(`خطا: ${error.message}`);
//     },
//   });

//   return { deleteItem };
// }
