import Icons from "../../Ui/Icons";
import Product from "./Product";
// import { useProducts } from "./useProducts";
// import Spinner from "../../Ui/Spinner";

function ProductsMain() {
  //const { isLoading, products } = useProducts();

  const products = [
    {
      id: 1,
      name: "مبل راحتی",
      type: "مبلمان",
      price: 1200000,
      discount: 10,
      image_url: "/images/furniture/1.jpg",
    },
    {
      id: 2,
      name: "آینه مدرن",
      type: "آینه",
      price: 300000,
      discount: 0,
      image_url: "/images/mirror/2.jpg",
    },
  ];

  //if (isLoading) return <Spinner />;

  return (
    <>
      <Icons />
      <main>
        <section className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-9 mt-5 mx-2.5 lg:mx-33.75">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </section>
      </main>
    </>
  );
}

export default ProductsMain;
