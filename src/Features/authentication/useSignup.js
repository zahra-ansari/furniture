import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
//import { signupUser } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending: isPendingSignup, mutate: signup } = useMutation({
    mutationFn: signupUser,

    onSuccess: () => {
      navigate("/landing");
      toast.success("حساب کاربری با موفقیت ایجاد شد ");
      queryClient.invalidateQueries({ queryKey: ["userSession"] });
    },

    onError: () => {
      toast.error("این ایمیل قبلا ثبت شده است");
    },
  });

  return { isPendingSignup, signup };
}
