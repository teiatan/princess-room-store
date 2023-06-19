import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "../routes/PublicRoute";
import PrivateRoute from "../routes/PrivateRoute";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProductsListPage from "../pages/ProductsListPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import AccountPage from "../pages/AccountPage";
import BasketPage from "../pages/BasketPage";
import NotFoundPage from "../pages/NotFoundPage";
import { Loader } from "./Loader/Loader";
import { Layout } from "./Layout/Layout";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route path="/products" element={<ProductsListPage />} />

          <Route path="/products/:productId" element={<ProductDetailsPage />} />

          <Route path="register" element={
              <PublicRoute redirectTo="/account" component={<RegisterPage />} />
            }
          />
          
          <Route path="login" element={
              <PublicRoute redirectTo="/account" component={<LoginPage />} />
            }
          />

          <Route path="account" element={
            <PrivateRoute redirectTo="/login" component={<AccountPage />} />
          }
          />

          <Route path="basket" element={<BasketPage />}
          />
          
          <Route path="*" element={<NotFoundPage />} />

        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
