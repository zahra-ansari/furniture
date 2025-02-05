import Icons from "../../Ui/Icons";
import MenuBar from "../../Ui/MenuBar";
import NavBar from "../../Ui/NavBar";
import SideBar from "../../Ui/SideBar";

function ContactUsAndCriticismHeader() {
  return (
    <>
      <Icons />
      <NavBar
        containerClass="xl:flex"
        hiddenClass="xl:hidden"
        positionClass="top-20"
        widthClass="lg:w-44"
      />
      <MenuBar
        containerClass="xl:flex "
        hiddenClass="hidden"
        widthClass="lg:w-64"
      />
      <div className="flex gap-x-10 mx-2.5 lg:mx-33.75">
        <SideBar containerClass="xl:flex" widthClass="w-96" />
        <div>
          <span className="block font-VazirBlack mt-10">
            شما می توانید از طریق فرم زیر یا از طریق راه های ارتباطی که در پایین
            هر صفحه در اختیارتان قرار گرفته شده است، با ما ارتباط داشته باشید و
            یا نظرات، پیشنهادات و انتقادات خود را با ما در میان بگذارید
          </span>
          <div className="border mt-10 mx-2.5 lg:mx-33.75">
            <span className="inline-block font-VazirBlack mt-4 mr-4">
              متن پرسش یا نظر
            </span>
            <form action="#" className="w-[90%] mx-auto mt-5">
              <textarea
                className="font-Vazir border w-full resize-none"
                rows="5"
                placeholder="متن نظر یا پرسش خود را در این قسمت وارد کنید..."
              ></textarea>
              <br />
              <button
                type="submit"
                className="font-Vazir mb-4 mt-3 bg-green text-white hover:bg-white hover:text-green hover:border-2 hover:border-green rounded-ss-lg rounded-se-sm rounded-ee-lg rounded-es-sm w-28 h-10"
              >
                ثبت
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsAndCriticismHeader;
