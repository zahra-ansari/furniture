import { useMutation } from "@tanstack/react-query";
//import { buyProductsApi } from "../../services/apiProducts";
//import { useUserSession } from "../authentication/useUserSession";
import toast from "react-hot-toast";

export function useBuyProducts() {
  //const { session } = useUserSession();

  const { mutate: buyProducts } = useMutation({
    mutationFn: async ({ id, image_url, name, finalPrice }) => {
      if (!session) {
        throw new Error("لطفا ابتدا باید وارد سیستم شوید");
      }

      await buyProductsApi({
        user_id: session?.user?.id,
        id,
        image_url,
        name,
        finalPrice,
      });
    },

    onError: (error) => {
      toast.error(`خطا: ${error.message}`);
    },
  });

  return { buyProducts };
}
