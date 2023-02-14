import React, { useState } from "react";

const Register = () => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="max-w-lg mx-auto">
      <div className="intro-x mb-4 t  text-center font-medium text-2xl leading-tight">
        Register
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <input
          type="text"
          value={userInput.firstName}
          name="firstName"
          className="block px-4 py-2 rounded-md form-control"
          placeholder="First name"
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="text"
          value={userInput.lastName}
          name="lastName"
          className="block px-4 py-2 rounded-md form-control"
          placeholder="Last name"
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="email"
          value={userInput.email}
          name="email"
          className="block col-span-2 px-4 py-2 rounded-md form-control"
          placeholder="Email"
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="number"
          value={userInput.phone}
          name="phone"
          className="block col-span-2 px-4 py-2 rounded-md form-control"
          placeholder="Phone"
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="password"
          value={userInput.password}
          name="password"
          className="block col-span-2 px-4 py-2 rounded-md form-control"
          placeholder="Password"
          onChange={(e) => onChangeHandler(e)}
        />
        <input
          type="password"
          value={userInput.password2}
          name="password2"
          className="block col-span-2 px-4 py-2 rounded-md form-control"
          placeholder="Comfirme Password"
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
      <div className="mt-5 text-center intro-x xl:mt-8 xl:text-left">
        <button className="bg-blue-500 rounded-md text-white py-3 px-4 w-full tracking-widest">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
