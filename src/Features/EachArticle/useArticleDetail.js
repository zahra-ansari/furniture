// import { useQuery } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import { useParams } from "react-router-dom";
// import { getArticleDetail } from "../../services/apiArticleDetail";

// export function useArticleDetail() {
//   const { id } = useParams();

//   const {
//     isLoading,
//     data: articleDetail,
//     error,
//   } = useQuery({
//     queryKey: ["article", id],
//     queryFn: () => getArticleDetail(id),
//     onError: (err) => toast.error(err.message),
//   });

//   return { isLoading, articleDetail, error, id };
// }
