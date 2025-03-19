// import { useQuery } from "@tanstack/react-query";
// import { getProducts } from "../../services/apiProducts";
// import { useParams } from "react-router-dom";
// import toast from "react-hot-toast";

// export function useProducts() {
//   // Extracting dynamic parameters that are specified with (:) in the path
//   const { category } = useParams();

//   console.log(category);

//   const {
//     isLoading,
//     data: products,
//     error,
//   } = useQuery({
//     // کلید شناسایی هر درخواست داده.که آیا در کش موجود است یا خیر
//     queryKey: ["products", category],
//     // کال بک فانکشن تضمین میکند که به اخرین مقایر و وضعیت ها دسترسی دارید و عملیات غیرهمزمان به درستی مدیدریت میشوند
//     queryFn: () => getProducts(category),
//     onError: (err) => toast.error(err.message),
//   });

//   return { isLoading, products, error };
// }

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

export function useProducts() {
  // Extracting dynamic parameters that are specified with (:) in the path
  const { category } = useParams();

  //console.log(category);

  const { isLoading, data: products } = useQuery({
    // کلید شناسایی هر درخواست داده.که آیا در کش موجود است یا خیر
    queryKey: ["products", category],
    // کال بک فانکشن تضمین میکند که به اخرین مقایر و وضعیت ها دسترسی دارید و عملیات غیرهمزمان به درستی مدیریت میشوند
    queryFn: () => getProducts(category),
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, products };
}
