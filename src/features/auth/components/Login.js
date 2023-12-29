import React from "react";
import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { loginUserAsync, selectError, selectLoggedInUser } from "../authSlice";
import product from "../../../images/Product2.jpg";

import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const error = useSelector(selectError);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="bg-[#92b3dc] h-screen">
      {user && <Navigate to="/" replace={true} />}
      <div className="flex justify-center">
        <div className="h-auto w-[30%]  flex flex-col justify-center sm:py-12">
        <div className="text-center flex justify-center text-3xl">
          Shop 
          <div className="text-pink-400 flex">
          Pulse
          </div>
        </div>
          <div className="p-5 xs:p-0 mx-auto md:w-full md:max-w-full">
            <div className=" p-3 transition 5s ease-in-out hover:border-gray-400 hover:shadow-2xl dark:shadow-black/40 w-auto rounded-lg divide-y divide-gray-200">
              <form
                noValidate
                onSubmit={handleSubmit((data) => {
                  dispatch(
                    loginUserAsync({
                      email: data.email,
                      password: data.password,
                    })
                  );
                })}
              >
                <div className="px-5 py-7">
                  <label className="font-semibold text-sm text-gray-600 pb-1 block">
                    E-mail
                  </label>
                  <input
                    id="email"
                    {...register("email", {
                      required: "Email is Required",
                      pattern: {
                        value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                        message: "email not valid",
                      },
                    })}
                    type="email"
                    className="border shadow-lg outline-none rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  />
                  {errors.email && (
                    <p className="text-red-500 bottom-3 relative text-center">
                      {errors.email.message}
                    </p>
                  )}
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="font-semibold text-sm text-gray-600 pb-1 block">
                        Password
                      </label>
                      <div className="text-sm">
                        <Link
                          to="/forgot"
                          className="font-semibold text-blue-600 hover:text-blue-500"
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    <input
                      id="password"
                      {...register("password", {
                        required: "Password is Required",
                      })}
                      type="password"
                      className="border shadow-lg outline-none rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                    />{" "}
                  </div>
                  {errors.password && (
                    <p className="text-red-500 bottom-3 relative text-center">
                      {errors.password.message}
                    </p>
                  )}
                  {error && (
                    <p className="text-red-500 text-center">{error ||error.message}</p>
                  )}
                  <button
                    type="submit"
                    className="transition dark:shadow-black/40 flex justify-center flex-row duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center "
                  >
                    <span className="flex justify-center mr-2">Login </span>
                    <ArrowRightOnRectangleIcon className="w-4 h-5" />
                  </button>
                </div>
              </form>
              <p className=" text-center text-sm text-gray-500">
                Create Your Account{" "}
                <Link
                  to="/signup"
                  className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
