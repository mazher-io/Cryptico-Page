
import videoSrc from "../../assets/original-69e49e0ddb3f31adf771c19f91f22c12.mp4";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      viewport={{ once: true }} // Prevents re-triggering when scrolling back
    >
    <div className="flex flex-col items-center mt-[30px] ">
      <h1 className="text-white text-center text-[32px] sm:text-[40px] md:text-[60px] lg:text-[50px] leading-[131.99%] font-bold">
        Manage Your
        <br />
        Crypto Holdings
      </h1>
      <p className="text-darkgray text-center text-[9px] sm:text-[10px] md:text-[10px] lg:text-[13px] pt-5 font-extralight leading-[131.99%] ">
        Stay ahead of the market with up-to-the-minute insights, analysis, and
        trends.
        <br />
        Discover, track, and make smarter crypto decisions today.
      </p>

      <div
        className="flex flex-col sm:flex-row items-center justify-center mt-12 gap-3 w-full"
        style={{ padding: "20px" }}
      >
        <input
          className="pt-5 pb-5 sm:w-[350px] w-full rounded-[9px] pl-8 pr-6 h-[56px] outline-none sm:p-4"
          type="text"
          placeholder="Search for coin ..."
        />

        <button className="bg-button-color w-full sm:w-[120px] text-white h-[56px] rounded-[9px] text-[15px] sm:mt-0 font-bold font-sans   hover:bg-slate-600 transition duration-500 ease-in-out" onClick={() => window.location.href = 'https://crypticoo.netlify.app'}>
          
          Get coin
        </button>
      </div>

      <div className="mt-12 mr-8 ml-8 mb-12 p-8 md:mt-[50px] md:mr-[120px] md:ml-[120px] md:mb-[50px] md:p-[35px] rounded-[29px] h-[400px] md:h-[850px] flex items-center justify-center [background:linear-gradient(89.63deg,_#3a0ca3,_#f72585_39%,_#ff9e00_68.5%,_#7209b7)]">
        <video
          className="rounded-[29px] w-full h-full object-cover "
          src={videoSrc} // Replace `videoSrc` with your video file URL or import path
          
          autoPlay
          loop
          muted
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    </motion.div>
  );
};

export default Herosection;
