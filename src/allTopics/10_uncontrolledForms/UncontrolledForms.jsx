import React, { useRef } from "react";

const UncontrolledForms = () => {
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  function formHandle(e) {
    e.preventDefault();
    // console.log(usernameRef.current.value);
    // console.log(passwordRef.current.value);

    let newUser = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(newUser);

    //Clearing input field
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <div className="m-10 border h-[200px] w-[400px] bg-gray-200 rounded-md">
      <h1>From</h1>
      <form onSubmit={formHandle}>
        <label htmlFor="username" className="mr-4">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="border border-black rounded-md mt-2 px-2 py-1 "
          ref={usernameRef}
        />
        <br />
        <label htmlFor="password" className="mr-4">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border border-black rounded-md my-2 px-2 py-1"
          ref={passwordRef}
        />
        <br />
        <button
          type="submit"
          className="border border-black rounded-md px-4 py-1 bg-blue-500 text-white text-lg font-bold hover:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UncontrolledForms;
