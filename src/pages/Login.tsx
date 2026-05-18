import LoginForm from "../features/authentication/LoginForm";

const Login = () => {
  return (
    <main
      className="grid min-h-screen grid-cols-[30rem] content-center justify-center
  gap-8 bg-gray-50"
    >
      <h4 className="text-center text-2xl font-semibold">
        Log in to your account
      </h4>
      <LoginForm />
    </main>
  );
};

export default Login;
