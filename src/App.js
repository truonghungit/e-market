import { Routes, Route } from "react-router-dom";

import { AppLayout } from "./components/layout";

import { ShoppingCartProvider } from "./shopping-cart";
import { AboutPage } from "./pages/about";
import { ContactPage } from "./pages/contact";
import { HomePage } from "./pages/home";
import { NewsPage } from "./pages/news";
import { PrivacyPage } from "./pages/privacy";
import { TermsPage } from "./pages/terms";
import { ReturnPolicyPage } from "./pages/return-policy";
import { ShopPage } from "./pages/shop";
import { ProductItemDetails } from "./pages/product-item-details";
import { ShoppingCartPage } from "./pages/shopping-cart";

import "react-range-slider-input/dist/style.css";
import "./App.css";

function App() {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="gioi-thieu" element={<AboutPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="product-category/:category" element={<ShopPage />} />
          <Route path="lien-he" element={<ContactPage />} />
          <Route path="tin-tuc" element={<NewsPage />} />
          <Route path="chinh-sach-bao-mat" element={<PrivacyPage />} />
          <Route path="dieu-khoan-dich-vu" element={<TermsPage />} />
          <Route
            path="chinh-sach-doi-tra-hang"
            element={<ReturnPolicyPage />}
          />
          <Route path="product/:slug" element={<ProductItemDetails />} />
          <Route path="cart" element={<ShoppingCartPage />}>
            <Route path="" element={<ShoppingCartPage />} />
            <Route path="checkout" element={<ShoppingCartPage />} />
          </Route>
        </Route>
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
