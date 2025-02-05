// import { useQuery } from "@tanstack/react-query";
// import { getUserSession } from "../../services/apiAuth";
// import toast from "react-hot-toast";

// export function useUserSession() {
//   const {
//     isPending: isPendingUsersession,
//     data: session,
//     error: errorUsersession,
//   } = useQuery({
//     queryKey: ["userSession"],
//     queryFn: getUserSession,

//     onError: (err) => {
//       console.log("ERROR", err);
//       toast.error("گرفتن اطلاعات کاربر با مشکل مواجه شده است");
//     },
//   });
//   return { isPendingUsersession, session, errorUsersession };
// }
