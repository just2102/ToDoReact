import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { loginRequest } from "../../Redux/auth-reducer";
import { useAppDispatch } from "../../Redux/hooks";
type FormDataType = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: boolean;
};

const Login = () => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm<FormDataType>();
  const onSubmit: SubmitHandler<FormDataType> = data => {
    dispatch(loginRequest(data.email,data.password,data.rememberMe=false,data.captcha))
  }
  return (
    <div className="login_container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} type="email" placeholder="free@samuraijs.com" />
        <input {...register('password')} type="password" placeholder="free" />
        <input {...register('rememberMe')} type="checkbox" placeholder="free@samuraijs.com" />
        <input type="submit" value='Login'/>
      </form>
    </div>
  );
};

export default Login;
