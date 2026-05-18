import { useState } from "react";
import { useLogin } from "./useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("password");
  const { login, isLoading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-md border
  border-gray-100 bg-gray-0 p-8"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="rounded-md border border-gray-300 bg-gray-0 px-4 py-2 shadow-sm"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          className="rounded-md border border-gray-300 bg-gray-0 px-4 py-2 shadow-sm"
        />
      </div>
      <div>
        <button
          className="w-full rounded-md bg-indigo-600 px-6 py-3 text-indigo-50
  hover:bg-indigo-700"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Log in"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
