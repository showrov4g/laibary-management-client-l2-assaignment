
import bannerImg from "../../asstes/book.jpg";

const Banner = () => {
  return (
    <div className="w-full">
      <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] relative overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={bannerImg}
          alt="Library Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
