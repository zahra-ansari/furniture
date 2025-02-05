import { useMutation, useQueryClient } from "@tanstack/react-query";
//import { loginUser } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending: isPendingLogin, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginUser({ email, password }),

    // ورودی onSuccess و onError همان data و یا error یی هستند که توی api تنظیم کردیم
    onSuccess: () => {
      navigate("/landing");
      toast.success("با موفقیت وارد شدید ");
      queryClient.invalidateQueries({ queryKey: ["userSession"] });
    },

    onError: () => {
      toast.error("نام کاربری یا رمز عبور صحیح نمی باشد");
    },
  });

  return { isPendingLogin, login };
}
