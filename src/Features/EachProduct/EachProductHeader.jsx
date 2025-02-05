import Icons from "../../Ui/Icons";
import MenuBar from "../../Ui/MenuBar";
import NavBar from "../../Ui/NavBar";
import SideBar from "../../Ui/SideBar";
//import Spinner from "../../Ui/Spinner";
import ProductDetail from "./ProductDetail";
//import { useProductDetail } from "./useProductDetail";

function EachProductHeader() {
  //const { isLoading, productDeatil } = useProductDetail();

  //if (isLoading) return <Spinner />;

  const productDeatil = [
    {
      id: 1,
      name: "مبل راحتی",
      price: 1200000,
      image_url: "/images/furniture/1.jpg",
      type: "مبلمان",
      discount: 10,
      rating: 4,
      width: 10,
      length: 10,
      weight: 10,
      color: "آبی",
      material: "مخمل",
    },
  ];

  return (
    <>
      <Icons />
      <header>
        <NavBar containerClass="sm:flex" hiddenClass="sm:hidden" />
        <MenuBar containerClass="flex" widthClass="lg:w-64" />
        <div className="flex gap-x-2.5 mx-2.5 lg:mx-33.75">
          <SideBar containerClass="sm:flex" widthClass="w-64" />
          <ProductDetail productDeatil={productDeatil} key={productDeatil.id} />
        </div>
      </header>
    </>
  );
}

export default EachProductHeader;
