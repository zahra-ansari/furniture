//import { useShoppingCart } from "../Features/ShoppingCart/useShoppingCart";
import Icons from "./../Ui/Icons";
import PropTypes from "prop-types";
//import Spinner from "./Spinner";
import { NavLink } from "react-router-dom";
//import { useDeleteShoppingCart } from "../Features/ShoppingCart/useDeleteShoppingCart";

function ShoppingCart({ onClose }) {
  // const { purchasedProducts, isLoading } = useShoppingCart();
  // const { deleteItem } = useDeleteShoppingCart();

  //if (isLoading) return <Spinner />;

  // const totalPrice = purchasedProducts.reduce((total, item) => {
  //   return total + item.price;
  // }, 0);

  // const handleDeletepurchasedProduct = (id) => {
  //   deleteItem(id);
  // };

  return (
    <>
      <Icons />
      <div
        className="absolute left-2 z-10 pb-3 sm:w-96 min-h-[250px] border rounded-ss-lg rounded-se-sm rounded-ee-lg rounded-es-sm border-slate-400 bg-white"
        id="shopping_list"
      >
        <div className="flex justify-between p-3">
          <svg
            onClick={onClose}
            className="w-6 h-6 cursor-pointer"
            id="shopping_close"
          >
            <use href="#x-mark"></use>
          </svg>
          <span className="font-Vazir">سبد خرید</span>
          {/* <span className="block text-center text-white bg-green w-6 h-6 rounded-full">
            {purchasedProducts.length}
          </span> */}
        </div>
        <span className="block border-b w-[95%] mx-auto"></span>
        {/* <div className="max-h-[336px] overflow-auto">
          {purchasedProducts.length === 0 ? (
            <div className="text-center font-Vazir text-slate-500 mt-4">
              سبد شما خالی است
            </div>
          ) : (
            purchasedProducts.map((purchasedProduct) => (
              <div
                key={purchasedProduct.id}
                className="flex justify-between border rounded-ss-lg rounded-se-sm rounded-ee-lg rounded-es-sm border-slate-400 mt-4 h-24 w-[95%] mx-auto"
              >
                <div className="w-20 h-[90%] my-auto mr-2">
                  <img
                    src={purchasedProduct.image_url}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-center mr-4 sm:mr-0">
                  <span className="font-Vazir">
                    {purchasedProduct.name_product}
                  </span>
                  <span className="font-Vazir text-slate-500">
                    {purchasedProduct.price} تومان
                  </span>
                </div>
                <svg
                  className="my-auto ml-2 w-6 h-6 cursor-pointer"
                  onClick={() =>
                    handleDeletepurchasedProduct(purchasedProduct.id)
                  }
                >
                  <use href="#trash"></use>
                </svg>
              </div>
            ))
          )}
        </div> */}
        <span className="block border-b w-[95%] mx-auto mt-4"></span>
        <div className="flex px-4 mt-4 justify-between">
          <span className="font-VazirBlack">جمع کل:</span>
          {/* <span className="font-VazirBlack">{totalPrice} تومان</span> */}
        </div>
        <span className="block border-b w-[95%] mx-auto mt-4"></span>
        <NavLink
          to="#"
          className="block w-[50%] mx-auto font-VazirBold text-center text-white bg-green px-6 py-3 mt-4 border rounded-ss-lg rounded-se-sm rounded-ee-lg rounded-es-sm tracking-widest"
        >
          پرداخت
        </NavLink>
      </div>
    </>
  );
}

ShoppingCart.propTypes = {
  onClose: PropTypes.any,
};

export default ShoppingCart;

{
  /* <div className="flex justify-between border rounded-ss-lg rounded-se-sm rounded-ee-lg rounded-es-sm border-slate-400 mt-4 h-24 w-[95%] mx-auto">
            <div className="w-20 h-[90%] my-auto mr-2">
              <img
                src="/public/images/slider/7.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center mr-4 sm:mr-0">
              <span className="font-Vazir">میز قهوه خوری چوبی</span>
              <span className="font-Vazir text-slate-500">550,000 تومان</span>
            </div>
            <svg className="my-auto ml-2 w-6 h-6 cursor-pointer">
              <use href="#trash"></use>
            </svg>
          </div>
          <div className="flex justify-between border rounded-ss-lg rounded-se-sm rounded-ee-lg rounded-es-sm border-slate-400 mt-4 h-24 w-[95%] mx-auto">
            <div className="w-20 h-[90%] my-auto mr-2">
              <img
                src="/public/images/slider/7.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center mr-4 sm:mr-0">
              <span className="font-Vazir">میز قهوه خوری چوبی</span>
              <span className="font-Vazir text-slate-500">550,000 تومان</span>
            </div>
            <svg className="my-auto ml-2 w-6 h-6 cursor-pointer">
              <use href="#trash"></use>
            </svg>
          </div>
          <div className="flex justify-between border rounded-ss-lg rounded-se-sm rounded-ee-lg rounded-es-sm border-slate-400 mt-4 h-24 w-[95%] mx-auto">
            <div className="w-20 h-[90%] my-auto mr-2">
              <img
                src="/public/images/slider/7.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center mr-4 sm:mr-0">
              <span className="font-Vazir">میز قهوه خوری چوبی</span>
              <span className="font-Vazir text-slate-500">550,000 تومان</span>
            </div>
            <svg className="my-auto ml-2 w-6 h-6 cursor-pointer">
              <use href="#trash"></use>
            </svg>
          </div>
          <div className="flex justify-between border rounded-ss-lg rounded-se-sm rounded-ee-lg rounded-es-sm border-slate-400 mt-4 h-24 w-[95%] mx-auto">
            <div className="w-20 h-[90%] my-auto mr-2">
              <img
                src="/public/images/slider/7.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center mr-4 sm:mr-0">
              <span className="font-Vazir">میز قهوه خوری چوبی</span>
              <span className="font-Vazir text-slate-500">550,000 تومان</span>
            </div>
            <svg className="my-auto ml-2 w-6 h-6 cursor-pointer">
              <use href="#trash"></use>
            </svg>
          </div> */
}

// {purchasedProducts.map((purchasedProduct) => (
//   <div
//     key={purchasedProduct.id}
//     className="flex justify-between border rounded-ss-lg rounded-se-sm rounded-ee-lg rounded-es-sm border-slate-400 mt-4 h-24 w-[95%] mx-auto"
//   >
//     <div className="w-20 h-[90%] my-auto mr-2">
//       <img
//         src={purchasedProduct.image_url}
//         className="w-full h-full"
//       />
//     </div>
//     <div className="flex flex-col justify-center mr-4 sm:mr-0">
//       <span className="font-Vazir">
//         {purchasedProduct.name_product}
//       </span>
//       <span className="font-Vazir text-slate-500">
//         {purchasedProduct.price} تومان
//       </span>
//     </div>
//     <svg
//       className="my-auto ml-2 w-6 h-6 cursor-pointer"
//       onClick={() =>
//         handleDeletepurchasedProduct(purchasedProduct.id)
//       }
//     >
//       <use href="#trash"></use>
//     </svg>
//   </div>
// ))}
