import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Potential path and function to fetch order history
import { fetchUserOrderHistory } from "./orderSlice";
// o: this doesn't seem like its being used
import { NavLink } from "react-router-dom";

// o: please remove if not being used
// Dummy Data for now
// const orderHistory = [
//   {
//     id: 1,
//     status: "fulfilled",
//     products: [
//       { name: "banana", price: "0.50" },
//       { name: "apple", price: "1.00" },
//     ],
//   },
//   {
//     id: 2,
//     status: "fulfilled",
//     products: [
//       { name: "banana", price: "0.50" },
//       { name: "apple", price: "1.00" },
//     ],
//   },
//   {
//     id: 3,
//     status: "fulfilled",
//     products: [
//       { name: "banana", price: "0.50" },
//       { name: "apple", price: "1.00" },
//     ],
//   },
//   {
//     id: 4,
//     status: "fulfilled",
//     products: [
//       { name: "banana", price: "0.50" },
//       { name: "apple", price: "1.00" },
//     ],
//   },
// ];


// o: why is this outside of the component?
// Will get this from somewhere else later...probably from whatever user is logged in when we have that functioonality setup
const id = 1;

const OrderHistory = () => {
  // Potential functions when everything is connected
  const dispatch = useDispatch();
  const orderHistory = useSelector((state) => state.orders.userOrderHistory);
  useEffect(() => {
    dispatch(fetchUserOrderHistory(id));
  }, [dispatch]);

  return (
    <div>
      <h1>Order History</h1>
      <div>
        {orderHistory.map((order) => (
          <div key={order.id}>
            <div>Order ID: {order.id}</div>

            <div>Order Status: {order.status}</div>
            <div>Order Date: {order.dateOrdered}</div>
            <div>Order Number: {order.confirmationNumber}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
