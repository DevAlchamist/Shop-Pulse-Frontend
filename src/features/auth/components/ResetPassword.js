import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import {
  resetPasswordAsync,
  selectError,
  selectMailStatus,
  selectPasswordReset,
} from "../authSlice";

export default function ResetPassword() {
  const passwordReset = useSelector(selectPasswordReset);
  const MailStatus = useSelector(selectMailStatus);
  console.log(passwordReset);
  const error = useSelector(selectError);
  const query = new URLSearchParams(window.location.search);
  const token = query.get("token");
  const email = query.get("email");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      {email && token ? (
        <div className="bg-[#92b3dc] h-screen">
          <div className=" flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Enter Your New Password
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                className="space-y-6"
                noValidate
                onSubmit={handleSubmit((data) => {
                  console.log(data);
                  dispatch(
                    resetPasswordAsync({
                      email,
                      token,
                      password: data.password,
                    })
                  );
                })}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      {...register("password", {
                        required: "It is Required",
                      })}
                      type="password"
                      className="block dark:shadow-black/40 p-3 outline-none border shadow-2xl w-full rounded-md  py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                    {errors.password && (
                      <p className="text-red-500">{errors.password.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      {...register("confirmPassword", {
                        required: "confirm password is required",
                        validate: (value, formValues) =>
                          value === formValues.password ||
                          "password not matching",
                      })}
                      type="password"
                      className="block dark:shadow-black/40 p-3 outline-none shadow-2xl w-full rounded-md border py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                    {error && <p className="text-red-500">{error}</p>}
                  </div>
                </div>
                {MailStatus === "loading" ? (
                  <div className=" flex justify-center mx-auto ">
                    <div class="flex flex-row gap-2">
                      <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                      <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                      <div class="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                    </div>
                  </div>
                ) : passwordReset === true ? (
                  <div className=" text-center flex justify-center flex-col  ">
                    <h4 className=" bg-green-500 mx-auto px-4 py-3 rounded shadow dark:shadow-black/40 ">
                      Password Changed
                    </h4>
                  </div>
                ) : (
                  <div>
                    <button
                      type="submit"
                      className="transition flex justify-center flex-row duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center "
                    >
                      <span className="flex justify-center mr-2">
                        Change Password{" "}
                      </span>
                      <ArrowRightOnRectangleIcon className="w-4 h-5" />
                    </button>
                  </div>
                )}
                {/* <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Reset Password
                  </button>
                </div> */}
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                <Link
                  to="/login"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Back to Login{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Account Not Found</p>
      )}
    </>
  );
}
