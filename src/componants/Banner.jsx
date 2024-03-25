import banner from "../assets/images/user.png";

const Banner = () => {
  return (
    <div className="bg-[#9873FF0D]">
      <div className="pt-24 flex container mx-auto items-center justify-between mb-20">
        <div className="max-w-[570px] mb-6">
          <h1 className="text-[#1A1919] text-[80px] font-extrabold leading-[100px]">
            One Step Closer To Your <br />
            <span className="text-[#7E90FE]">Dream Job</span>{" "}
          </h1>
          <p className="text-[#757575] text-lg font-medium leading-8 mb-8">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="text-white font-extrabold text-xl bg-[#7E90FE] px-8 py-5 rounded-lg">
            Get Started
          </button>
        </div>

        <div>
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
