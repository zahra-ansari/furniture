import Icons from "../../Ui/Icons";
import MenuBar from "../../Ui/MenuBar";
import NavBar from "../../Ui/NavBar";
import SideBar from "../../Ui/SideBar";
import Spinner from "../../Ui/Spinner";
import ProductDetail from "./ProductDetail";
import { useProductDetail } from "./useProductDetail";

function EachProductHeader() {
  const { isLoading, productDetail } = useProductDetail();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Icons />
      <header>
        <NavBar containerClass="sm:flex" hiddenClass="sm:hidden" />
        <MenuBar containerClass="flex" widthClass="lg:w-64" />
        <div className="flex gap-x-2.5 mx-2.5 lg:mx-33.75">
          <SideBar containerClass="sm:flex" widthClass="w-64" />
          <ProductDetail
            productDetail={productDetail}
            key={productDetail.slug}
          />
        </div>
      </header>
    </>
  );
}

export default EachProductHeader;
