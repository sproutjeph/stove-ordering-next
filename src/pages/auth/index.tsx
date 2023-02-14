import { Login, Register } from "@/components";
import React, { useState } from "react";

const AuthPage = () => {
  const [hasAccount, setHasAccount] = useState(true);
  return (
    <main className="px-4 mx-auto mt-40 mb-40  max-w-7xl">
      {hasAccount ? <Login /> : <Register />}
      <div className="mt-4 text-center text-slate-600">
        <a
          className="cursor-pointer"
          onClick={() => setHasAccount(!hasAccount)}
        >
          {hasAccount
            ? "Don't have an account? click to Register"
            : " Have an account click to Login"}
        </a>
      </div>
    </main>
  );
};

export default AuthPage;
