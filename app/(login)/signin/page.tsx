import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const SignIn = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-900 gap-3">
      <LoginLink className="bg-orange-500 rounded-lg size-20 w-32 h-12 text-center flex items-center justify-center">
        Sign in
      </LoginLink>
      <RegisterLink className="bg-orange-500 rounded-lg size-20 w-32 h-12 text-center flex items-center justify-center">
        Sign up
      </RegisterLink>
    </div>
  );
};

export default SignIn;
