import Icons from "../../Ui/Icons";
import MenuBar from "../../Ui/MenuBar";
import NavBar from "./../../Ui/NavBar";
import SideBar from "../../Ui/SideBar";
// import { useArticles } from "./useArticles";
// import Spinner from "../../Ui/Spinner";
import Article from "./Article";

function ArticlesHeader() {
  // const { isLoading, articles } = useArticles();

  // if (isLoading) return <Spinner />;

  const articles = [
    {
      id: 1,
      title: "مبل های استاندارد",
      content:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.",

      // image_url: "/images/article/1.png",
      image_url: "/dist/images/article/1.png",
    },
  ];

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

        <div className="flex gap-x-10 mx-2.5 lg:mx-33.75">
          <SideBar containerClass="xl:flex" widthClass="w-64" />
          <div className="flex flex-col gap-y-8 xl:w-[70%] mt-5 xl:mt-0">
            {articles.map((article) => (
              <Article article={article} key={article.id} />
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

export default ArticlesHeader;
