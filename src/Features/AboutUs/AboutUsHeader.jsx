import Icons from "../../Ui/Icons";
import MenuBar from "../../Ui/MenuBar";
import SideBar from "../../Ui/SideBar";
import NavBar from "./../../Ui/NavBar";

function AboutUsHeader() {
  return (
    <>
      <Icons />
      <header>
        <NavBar
          containerClass="xl:flex"
          hiddenClass="xl:hidden"
          positionClass="top-20"
          widthClass="lg:w-44"
        />
        <MenuBar
          containerClass="xl:flex"
          hiddenClass="hidden"
          widthClass="lg:w-64"
        />
        <div className="flex flex-wrap xl:flex-nowrap gap-x-20 mt-6 xl:mt-0 mx-2.5 lg:mx-33.75">
          <SideBar containerClass="xl:flex" widthClass="w-64" />
          <div className="flex flex-col items-center justify-center">
            <div className="xl:w-[550px] xl:h-[275px]">
              <img
                src="/public/images/article/1.png"
                className="w-full h-full"
              />
            </div>
            <span className="font-VazirBold text-2xl mt-5">درباره ما</span>
            <span className="font-Vazir xl:w-[550px] mt-4 text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. ورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
              متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
              و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
              طلبد، رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </span>
          </div>
          <div className="flex xl:flex-col gap-5 mt-4 xl:mt-0">
            <div className="border w-[33%] xl:w-40">
              <div>
                <img
                  src="/public/images/users/3.jpg"
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-VazirBold sm:text-2xl lg:text-xl">
                  مدیر
                </span>
                <span className="font-VazirMedium">شهرام شاه کردی</span>
              </div>
            </div>
            <div className="border w-[33%] xl:w-40">
              <div>
                <img
                  src="/public/images/users/5.jpg"
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-VazirBold sm:text-2xl lg:text-xl">
                  طراح و اجرا
                </span>
                <span className="font-VazirMedium">شهروز شمس</span>
              </div>
            </div>
            <div className="border w-[33%] xl:w-40">
              <div>
                <img
                  src="/public/images/users/6.jpg"
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-VazirBold sm:text-2xl lg:text-xl">
                  مشاور
                </span>
                <span className="font-VazirMedium">سیما مجد</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default AboutUsHeader;
