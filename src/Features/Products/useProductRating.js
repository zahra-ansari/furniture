// import { calculateAndUpdateProductRating } from "../../services/apiUpdateProductRating";
// import { useQuery } from "@tanstack/react-query";

// export function useProductRating(productId) {
//   const { data: averageRating, isLoading } = useQuery({
//     queryKey: ["productRating", productId],
//     queryFn: () => calculateAndUpdateProductRating(productId),
//     enabled: !!productId, // فقط در صورتی که productId وجود دارد اجرا شود
//   });
//   return { averageRating, isLoading };
// }
