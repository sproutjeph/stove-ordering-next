import useLogin from "@/queryHooks/useLogin";
import { IUserLogin } from "@/utils/types";
import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userInputData: IUserLogin = {
    userName,
    password,
  };

  const res = useLogin(userInputData);

  // console.log(res);

  return (
    <div className="max-w-lg mx-auto">
      <div className="mt-8 intro-x ">
        <div className="mb-4 text-2xl font-medium leading-tight text-center intro-x t">
          Login
        </div>
        <input
          type="email"
          className="block px-4 py-3 intro-x form-control"
          placeholder="email"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          required
        />
        <input
          type="password"
          className="block px-4 py-3 mt-4 intro-x form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </div>
      <div className="flex mt-4 text-xs intro-x text-slate-600 dark:text-slate-500 sm:text-sm">
        <div className="flex items-center mr-auto">
          <input
            id="remember-me"
            type="checkbox"
            className="mr-2 border form-check-input"
          />
          <label className="cursor-pointer select-none" htmlFor="remember-me">
            Remember me
          </label>
        </div>
        <button>Forgot Password?</button>
      </div>
      <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
        <button
          type="submit"
          className="w-full px-4 py-3 tracking-widest text-white bg-blue-500 rounded-md"
          onClick={() => {}}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
