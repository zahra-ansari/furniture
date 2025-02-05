import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
//import { useProductRating } from "./useProductRating";
//import Spinner from "../../Ui/Spinner";
import { useBuyProducts } from "./useBuyProducts";

function Product({ product }) {
  const { id, name, price, image_url, type, discount } = product;
  //const { averageRating, isLoading } = useProductRating(id);
  const { buyProducts } = useBuyProducts();

  const discountedPrice = price - (price * discount) / 100;

  const location = useLocation();
  const parentPath = location.pathname.split("/")[1];
  const childPath = location.pathname.split("/")[2];

  //if (isLoading) return <Spinner />;

  const handleClickBuyProduct = () => {
    buyProducts({
      id,
      image_url,
      name,
      finalPrice: discount === 0 ? price : discountedPrice,
    });
  };

  return (
    <div
      className={`flex flex-col border ${
        discount === 0 ? "justify-start" : "justify-center"
      }`}
    >
      <NavLink
        to={`/${parentPath}/${childPath}/eachproduct/${id}`}
        className="flex items-start"
      >
        <img src={image_url} alt="" className="w-full" />
      </NavLink>

      <div>
        <span className="block font-normal text-base text-gray-500 font-VazirMedium mb-3">
          {type}
        </span>

        <div className="flex justify-around mb-3">
          <span className="self-center font-normal md:text-xl text-gray-600 font-VazirMedium">
            {name}
          </span>
          <button
            onClick={handleClickBuyProduct}
            className="h-7 border border-green bg-green rounded-ss-lg rounded-se-sm rounded-ee-lg rounded-es-sm text-white font-Vazir px-3 md:w-[30%] xl:w-auto"
          >
            خرید
          </button>
        </div>

        {discount === 0 ? null : (
          <div className="flex justify-around">
            <span className="self-center font-normal xs:text-xl text-gray-600 font-VazirMedium">
              {discount}%
            </span>
            <span className="font-Vazir">{discountedPrice} تومان</span>
          </div>
        )}

        <div className="flex flex-wrap justify-around mt-5">
          {/* <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < Math.round(averageRating)
                    ? "text-green"
                    : "text-gray-400"
                }`}
              >
                <use href="#star"></use>
              </svg>
            ))}
          </div> */}

          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${
                  index < Math.round(4) ? "text-green" : "text-gray-400"
                }`}
              >
                <use href="#star"></use>
              </svg>
            ))}
          </div>
          <div
            className={`font-Vazir ${
              discount === 0 ? "" : "line-through text-gray-400"
            }`}
          >
            {price} تومان
          </div>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.any,
};

export default Product;
