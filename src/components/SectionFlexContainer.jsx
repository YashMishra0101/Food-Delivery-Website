import { Link } from "react-router-dom";
import Button from "./Button";

function SectionFlexContainer({
  images,
  title,
  description,
  flex = "md:flex-row",
}) {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-[20px] ${flex}`}
    >
      <div className="w-full md:w-[50%]">
        <img src={images} alt={title} />
      </div>
      <div className="w-full text-center text-base font-bold md:w-[50%] md:text-left md:text-lg">
        <p className="text-yellow">{description}</p>
        <h1 className="text-4xl md:text-2xl">{title}</h1>
        <p className="my-[10px] text-lightGray">
          At Tarun Singh Restaurant, we bring the finest flavors of Indian
          cuisine with a twist. Whether you're craving traditional dishes, juicy
          chicken burgers, pizza dough, or something with a modern flair, we
          offer it all. Our food is prepared with love and the finest
          ingredients, ensuring each bite is an unforgettable experience.
        </p>
        <p className="my-[10px] text-lightGray">
          From classic flavors to innovative creations, you'll find a variety of
          options that will satisfy every craving. Every dish is carefully
          crafted to provide a unique and delicious dining experience.
        </p>

        <Link to={"/menu"}>
          <Button>Order Now</Button>
        </Link>
      </div>
    </div>
  );
}

export default SectionFlexContainer;
