import { Routes, Route, Outlet, Link } from "react-router-dom";

import { AppLayout } from "./components/layout";

import { AboutPage } from "./pages/about";
import { ContactPage } from "./pages/contact";
import { HomePage } from "./pages/home";
import { NewsPage } from "./pages/news";
import { PrivacyPage } from "./pages/privacy";
import { TermsPage } from "./pages/terms";
import { ReturnPolicyPage } from "./pages/return-policy";
import { ShopPage } from "./pages/shop";
import { ProductItemDetails } from "./pages/product-item-details";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="gioi-thieu" element={<AboutPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="lien-he" element={<ContactPage />} />
          <Route path="tin-tuc" element={<NewsPage />} />
          <Route path="chinh-sach-bao-mat" element={<PrivacyPage />} />
          <Route path="dieu-khoan-dich-vu" element={<TermsPage />} />
          <Route
            path="chinh-sach-doi-tra-hang"
            element={<ReturnPolicyPage />}
          />
          <Route
            path="product/:slug"
            element={<ProductItemDetails/>}
          />
          <Route path="product-description" element={<TermsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
