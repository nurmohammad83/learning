import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MyContext } from "../Context/AuthContes";
const LogIn = () => {
  const { signInUser, user } = useContext(MyContext);
  const [error, setError] = useState('')
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handelLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((res) => {
        const user = res.user;
        form.reset();
		setError('')

        console.log(user);
        toast.success("Log In Successfully!", { autoClose: 500 });
      })
      .catch((error) => {
        toast.warning("Wrong Password!", { autoClose: 500 });
         setError(error.massage);
      });
  };
  useEffect(() => {
    if (user && user.uid) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <div className="w-full max-w-md p-12 ml-4  space-y-3 rounded-xl bg-fuchsia-400 my-7 mx-auto dark:text-gray-100">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form
        onSubmit={handelLogIn}
        noValidate=""
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-400">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          required
		  />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
          required
		  />
        </div>
		<p className="text-base text-red-500 py-1">{error}</p>
        <button className="block w-full p-3 text-center rounded-sm text-white font-semibold bg-red-500">
          Log in
        </button>
      </form>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Don't have an account?
        <Link
          rel="noopener noreferrer"
          to="/signup"
          className="underline dark:text-gray-100 font-semibold"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
