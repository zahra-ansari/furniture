import PropTypes from "prop-types";

function ProductDetail({ productDeatil }) {
  const {
    id,
    name,
    price,
    image_url,
    type,
    discount,
    rating,
    width,
    length,
    weight,
    color,
    material,
    other_features,
  } = productDeatil;

  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="flex mt-5 sm:mt-0">
      <div className="flex flex-col items-center border">
        {/* <img src={image_url} alt="" /> */}
        <img src="/images/furniture/1.jpg" alt="" />
        <button className="font-VazirBold bg-green text-white mt-10 hover:bg-white hover:text-green hover:border-2 hover:border-green rounded-ss-lg rounded-se-sm rounded-ee-lg rounded-es-sm w-28 h-10">
          خرید
        </button>
      </div>

      <div className="border">
        <div className="mt-4 mr-4">
          {/* <span className="block font-VazirBlack">دسته بندی: {type}</span> */}
          <span className="block font-VazirBlack">دسته بندی: {"مبلمان"}</span>
          {/* <span className="font-VazirBlack">نام محصول: {name}</span> */}
          <span className="font-VazirBlack">نام محصول: {"مبل راحتی"}</span>
        </div>

        <div className="flex flex-wrap gap-y-4 xl:flex-nowrap xl:gap-y-0 gap-x-20 mt-4 mr-4 ml-4">
          <div>
            <span
              className={`font-VazirBold ${
                discount === 0 ? "" : "line-through text-gray-400"
              }`}
            >
              قیمت اصلی: {price} تومان
            </span>
          </div>

          {discount === 0 ? (
            <div>
              <span className="font-VazirBold">تخفیف به زودی اعلام میگردد</span>
            </div>
          ) : (
            <div>
              <span className="font-VazirBold">
                قیمت با تخفیف: {discountedPrice} تومان
              </span>
            </div>
          )}
        </div>

        {discount === 0 ? (
          <div className="mt-4 mr-4">
            <span className="font-VazirBold">درصد تخفیف ها از 5 الی 40</span>
          </div>
        ) : (
          <div className="mt-4 mr-4">
            <span className="font-VazirBold">
              درصد تخفیف داده شده: {discount}%
            </span>
          </div>
        )}

        <div className="mt-4">
          <span className="font-VazirBlack mb-3 mr-4">ویژگی های کالا:</span>
          <div className="flex flex-col gap-y-3 child:mr-5">
            <div>
              <span className="font-VazirBold">طول کالا: {length}</span>
            </div>
            <div>
              <span className="font-VazirBold">عرض کالا: {width}</span>
            </div>
            <div>
              <span className="font-VazirBold">وزن کالا: {weight}</span>
            </div>
            <div>
              <span className="font-VazirBold">رنگ کالا: {color}</span>
            </div>
            <div>
              <span className="font-VazirBold">جنس کالا: {material}</span>
            </div>
            {/* <div>
              <span className="font-VazirBold">
                ویژگی های دیگر: {other_features}
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  productDeatil: PropTypes.any,
};

export default ProductDetail;
