import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
//import { useProductRating } from "./useProductRating";
//import Spinner from "../../Ui/Spinner";
import { useBuyProducts } from "./useBuyProducts";

function Product({ product }) {
  const {
    category,
    color,
    create_at,
    discount,
    final_price,
    image,
    lenght,
    meterial,
    rating,
    slug,
    title,
    update_at,
    weight,
    width,
  } = product;
  //const { averageRating, isLoading } = useProductRating(id);
  const { buyProducts } = useBuyProducts();

  const discountedPrice = final_price - (final_price * discount) / 100;

  //if (isLoading) return <Spinner />;

  const imageUrl = `https://furnitureshopp.pythonanywhere.com/${image}`;

  const handleClickBuyProduct = () => {
    buyProducts({
      slug,
      image,
      title,
      finalPrice: discount === 0 ? final_price : discountedPrice,
    });
  };

  return (
    <div
      className={`flex flex-col border ${
        discount === 0 ? "justify-start" : "justify-center"
      }`}
    >
      <NavLink to={`/products/item/${slug}`} className="flex items-start">
        <img src={imageUrl} alt="" className="w-full" />
      </NavLink>

      <div>
        <span className="block font-normal text-base text-gray-500 font-VazirMedium mb-3">
          دسته بندی: {category.title}
        </span>

        <div className="flex justify-around mb-3">
          <span className="self-center font-normal md:text-xl text-gray-600 font-VazirMedium">
            {title}
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
            {final_price} تومان
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
