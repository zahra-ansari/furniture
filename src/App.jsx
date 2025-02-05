import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="landing" />} />
            <Route path="landing" element={<Landing />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="articles" element={<Articles />} />
            <Route
              path="contactusandcriticism"
              element={<ContactUsAndCriticism />}
            />
            <Route path="/:page/eacharticle/:id" element={<EachArticle />} />
            {/* هر اسمی که بعد از : که بدهیم باید برابر باشه با همان اسمی که توی useParams می دهیم .توجه شود به فایل useProductDetail */}
            <Route
              path="/:page/:category/eachproduct/:id"
              element={<EachProduct />}
            />
            <Route path="search-products" element={<SearchedProducts />} />
            {/* <Route path="products" element={<Products />} /> */}
            <Route path="/:page/:category" element={<Products />} />
            <Route path="authentication" element={<Authentication />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
