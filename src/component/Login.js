import Header from "./Header";
import { useState, useRef } from "react";
import { ValidateData } from "../util/ValidateData";

const Login = function () {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = function () {
    setIsSignIn(!isSignIn);
  };

  const email = useRef();
  const password = useRef();
  const Name = useRef();

  const handelButtonclick = function () {
    const isValidData = ValidateData(
      email.current.value,
      password.current.value,
      Name.current.value
    );

    if (isValidData === null) {
      setErrorMessage("");
    } else {
      setErrorMessage(isValidData);
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
          alt="Background Image"
        ></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute rounded w-4/12  p-11 bg-black bg-opacity-80  my-40 mx-auto right-0 left-0"
      >
        <h1 className="text-3xl font-semibold text-white mx-2 my-3">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={Name}
            className="w-11/12 text-white mx-2 my-3 p-3 rounded bg-transparent border border-white "
            placeholder="Name"
            type="text"
          ></input>
        )}
        <input
          ref={email}
          className="w-11/12 mx-2 text-white my-3 p-3 rounded bg-transparent border border-white"
          type="email"
          placeholder="Email"
        ></input>
        <input
          ref={password}
          className="w-11/12 text-white mx-2 my-3 p-3 rounded bg-transparent border border-white"
          type="password"
          placeholder="Password"
        ></input>
        <h4 className="text-red-700 text-lg mx-2 my-2 font-semibold">
          {errorMessage}
        </h4>
        <button
          className="w-11/12  mx-2 mt-6 p-3 bg-red-500 text-white rounded"
          onClick={handelButtonclick}
        >
          Sign In
        </button>
        <p className="text-gray-300 my-3 p-3 text-lg ">
          New to Netflix?{" "}
          <span className="text-white cursor-pointer" onClick={handleSignIn}>
            Sign up now.
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
