// import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
// import { getProductDetail } from "../../services/apiProductDetail";
// import toast from "react-hot-toast";

// export function useProductDetail() {
//   const { id } = useParams();

//   const {
//     isLoading,
//     data: productDeatil,
//     error,
//   } = useQuery({
//     queryKey: ["product", id],
//     queryFn: () => getProductDetail(id),
//     onError: (err) => toast.error(err.message),
//   });

//   return { isLoading, productDeatil, error, id };
// }
