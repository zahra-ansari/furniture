import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./Ui/AppLayout";
import Landing from "./Pages/Landing";
import AboutUs from "./Pages/AboutUs";
import Articles from "./Pages/Articles";
import ContactUsAndCriticism from "./Pages/ContactUsAndCriticism";
import EachArticle from "./Pages/EachArticle";
import EachProduct from "./Pages/EachProduct";
import Products from "./Pages/Products";
import SearchedProducts from "./Pages/SearchedProducts";
import { Toaster } from "react-hot-toast";
import Authentication from "./Pages/Authentication";

// Managing queries & cache(It's just like a brain that allows you set default settings)
const queryClient = new QueryClient();

function App() {
  return (
    // providing queryClient to different locations of app(It's just like bridge or context api)
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "font-VazirBold",
          success: { duration: 4000 },
          error: { duration: 6000 },
        }}
      />
      <HashRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="landing" />} />
            <Route path="landing" element={<Landing />} />
            <Route path="products" element={<Products />} />
            <Route path="articles" element={<Articles />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route
              path="contact-us-and-criticism"
              element={<ContactUsAndCriticism />}
            />
            <Route path="articles/item/:slug" element={<EachArticle />} />
            <Route path="products/item/:slug" element={<EachProduct />} />
            <Route path="search-products" element={<SearchedProducts />} />
            <Route path="products/category/:category" element={<Products />} />
            <Route path="authentication" element={<Authentication />} />
          </Route>
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
