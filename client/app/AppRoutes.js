import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm";
import Home from "../components/home/Home";
import AllProducts from "../components/products/AllProducts";
import { me } from "./store";
import OrderHistory from "../components/user/OrderHistory";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/orders" element={<OrderHistory />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;

// return (
//   <div>
//     {isLoggedIn ? (
//       <Routes>
//         <Route path="/*" element={<Home />} />
//         <Route to="/home" element={<Home />} />
//         {/* <Route path="/allproducts" element={<AllProducts />} /> */}
//       </Routes>
//     ) : (
//       <Routes>
//         <Route
//           path="/*"
//           element={<AuthForm name="login" displayName="Login" />}
//         />
//         <Route
//           path="/login"
//           element={<AuthForm name="login" displayName="Login" />}
//         />
//         <Route
//           path="/signup"
//           element={<AuthForm name="signup" displayName="Sign Up" />}
//         />
//       </Routes>
//     )}
//   </div>
// );
// };
