import pic from "../../resources/imgs/testimonial.png";
import InfluncerNav from "./InfluncerNav";

const testimonial = () => {
  return (
    <div className="w-[75%]  mx-auto py-24">
      <InfluncerNav />
      <h1 className="my-14 text-4xl font-bold text-center">
        <span className="text-primary">Podcasters</span> use MediaKits to grow
        their business
      </h1>

      <div className=" flex ">
        <img className="rounded-full" src={pic} />
        <div className="ml-6 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-primary">Jogn Richards</h1>
          <h6 className="my-3 text-sm font-normal text-slate-500">Influncer, Investor, Actor, Musican </h6>
          <h4 className="text-lg font-bold text-secondary">
            “I love that my media kit is always up to date with my latest
            content & stats when I need to send it out to a brand”
          </h4>
        </div>
      </div>
    </div>
  );
};

export default testimonial;
