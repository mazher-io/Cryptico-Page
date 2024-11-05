import bg from "../../assets/bg.png";

const Herosection = () => {
  return (
    <div className="flex flex-col items-center mt-[44px] ">
      <h1 className="text-white text-center text-[32px] sm:text-[40px] md:text-[50px] lg:text-[57px] leading-[131.99%] font-extrabold">
        Making Your
        <br />
        Crypto Heading
      </h1>
      <p className="text-darkgray text-center text-[2px] sm:text-[8px] md:text-[10px] lg:text-[13px] pt-5 font-extralight leading-[131.99%] ">
        Take control of your crypto investments with our portfolio
        management platform, designed to help you <br/> track, and optimize
        your digital assets effortlessly.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-3 ">
        <input
          className="pt-5 pb-5 w-10 sm:w-[47rem] rounded-[9px] pl-8 pr-6 h-[56px] outline-none"
          type="text"
          placeholder="Search for coin ..."
        />
        <button className="bg-button-color w-full sm:w-[120px] text-white h-[56px] rounded-[9px] text-[15px] mt-3 sm:mt-0 font-medium">
          Get coin
        </button>
      </div>

      <div className="mt-12 mr-8 ml-8 mb-12 p-8 md:mt-[50px] md:mr-[120px] md:ml-[120px] md:mb-[50px] md:p-[35px] rounded-[29px] h-[400px] md:h-[650px] flex items-center justify-center [background:linear-gradient(89.63deg,_#3a0ca3,_#f72585_39%,_#ff9e00_68.5%,_#7209b7)]">
        <img
          className="rounded-[29px] w-full h-full object-cover"
          src={bg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Herosection;
