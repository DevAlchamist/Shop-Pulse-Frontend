import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchLoggedInUserOrderAsync,
  selectOrders,
  selectUserInfoStatus,
} from "../userSlice";

export default function UserOrders() {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const status = useSelector(selectUserInfoStatus);

  useEffect(() => {
    // handle calling of user orders when user logged in...
    dispatch(fetchLoggedInUserOrderAsync());
  }, [dispatch]);

  if (!Array.isArray(orders)) {
    // Handle the case when 'orders' is not an array (e.g., it's not initialized yet or is null)
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <h1 className=" py-2 text-xl ml-12 leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        My Orders :
      </h1>
      {orders &&
        orders.map((order) => (
          <>
            <div className="mx-auto pt-3 shadow-xl dark:shadow-black/40 border border-2 rounded bg-white mt-2 pb-7 max-w-5xl px-4 sm:px-6 lg:px-8">
              <h1 className=" text-lg leading-7 text-gray-600 sm:truncate sm:text-3xl sm:tracking-tight">
                Your Orders #{order.id}
              </h1>
              <div className=" flex leading-7 text-gray-600 sm:truncate sm:tracking-tight">
                Order Status:{" "}
                <div
                  className={`text-base font-medium leading-6 ${
                    order.status === "pending"
                      ? "text-indigo-500"
                      : order.status === "dispatched"
                      ? "text-yellow-500"
                      : order.status === "delivered"
                      ? "text-green-500"
                      : order.status === "cancelled"
                      ? "text-red-500"
                      : "text-gray-600" // default color if status doesn't match any condition
                  }`}
                >
                  {order.status}
                </div>
              </div>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {order.items.map((item) => (
                      <li key={item.product.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.product.thumbnail}
                            alt={item.product.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href={item.href}>{item.product.title}</a>
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                                discount : {item.product.discountPercentage}%
                                OFF
                              </p>
                              <p className="ml-4">
                                $ {item.product.discountPrice}
                              </p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              Brand : {item.product.brand}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Category : {item.product.category}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="text-gray-500">
                              Qty : {item.quantity}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Summary */}
              <div class="flex justify-centerflex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                <div class="shadow-inner dark:shadow-black/40 rounded border border-2 flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full space-y-6">
                  <h3 class="text-xl font-semibold leading-5 text-gray-500">
                    Summary
                  </h3>
                  <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-400 border-b-2 pb-4">
                    <div class="flex justify-between w-full">
                      <p class="text-base leading-4 text-gray-600">Subtotal</p>
                      <p class="text-base leading-4 text-gray-600">
                        ${order.totalAmount}
                      </p>
                    </div>
                    <div class="flex justify-between items-center w-full">
                      <p class="text-base leading-4 text-gray-600">Discount</p>
                      <p class="text-base leading-4 text-gray-600">
                        Already calculated
                      </p>
                    </div>
                    <div class="flex justify-between items-center w-full">
                      <p class="text-base leading-4 text-gray-600">Shipping</p>
                      <p class="text-base text-green-300 leading-4 text-green-800">
                        Free
                      </p>
                    </div>
                  </div>
                  <div class="flex justify-between items-center w-full">
                    <p class="text-base font-semibold leading-4 text-gray-600">
                      Total
                    </p>
                    <p class="text-base font-semibold leading-4 text-gray-600">
                      ${order.totalAmount}
                    </p>
                  </div>
                </div>
                {/* Shipping Address */}
                <div class=" shadow-inner dark:shadow-black/40 rounded border border-2 justify-center px-4 py-6 md:p-6 xl:p-8 w-full space-y-6">
                  <h3 class="text-xl  font-semibold leading-5 text-gray-700">
                    Shipping Address
                  </h3>
                  <div class="flex justify-between items-center w-full">
                    <p class=" text-sm text-gray-600">
                      Email : {order.selectedAddress.email}
                    </p>
                  </div>
                  <div class="flex justify-between items-center w-full">
                    <p class=" text-sm text-gray-600">
                      Number : {order.selectedAddress.phone}
                    </p>
                  </div>
                  <div class="flex justify-between items-center w-full">
                    <p class=" text-sm text-gray-600">
                      {order.selectedAddress.street},
                      {order.selectedAddress.city}
                    </p>
                  </div>

                  <div class="">
                    <p class=" flex text-sm text-gray-600">
                      {order.selectedAddress.region},
                      {order.selectedAddress.pinCode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      {status === "loading" ? (
        <div class="bg-white rounded-lg shadow-md p-4 animate-pulse">
          <div class="w-2/3 h-4 bg-gray-300 rounded mb-2"></div>
          <div class="w-full h-8 bg-gray-300 rounded mb-2"></div>
          <div class="w-full h-8 bg-gray-300 rounded mb-2"></div>
          <div class="w-1/2 h-8 bg-gray-300 rounded"></div>
        </div>
      ) : null}
    </div>
  );
}
