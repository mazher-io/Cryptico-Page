import img1 from '../../assets/1.svg';
import img2 from '../../assets/2.svg';
import img3 from '../../assets/3.svg';
import img4 from '../../assets/4.svg';
import img5 from '../../assets/5.svg';
import img6 from '../../assets/6.svg';
import { motion } from "framer-motion";

const Companies = () => {
  return ( 
    <motion.div
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      viewport={{ once: true }} // Prevents re-triggering when scrolling back
    >
    <div className="flex items-center justify-center flex-col">
        <p className="text-white">Trusted by the fastest growing companies</p>
        <div className="flex flex-wrap items-center pt-8 gap-8 pb-10 justify-center">
            <img className='w-[8rem] transition-all duration-300 hover:filter hover:brightness-0 hover:saturate-100 hover:invert sm:w-[10rem] md:w-[15rem]' src={img1} alt="Company 1" />
            <img className='w-[8rem] transition-all duration-300 hover:filter hover:brightness-0 hover:saturate-100 hover:invert sm:w-[10rem] md:w-[15rem]' src={img2} alt="Company 2" />
            <img className='w-[8rem] transition-all duration-300 hover:filter hover:brightness-0 hover:saturate-100 hover:invert sm:w-[10rem] md:w-[15rem]' src={img3} alt="Company 3" />
            <img className='w-[8rem] transition-all duration-300 hover:filter hover:brightness-0 hover:saturate-100 hover:invert sm:w-[10rem] md:w-[15rem]' src={img4} alt="Company 4" />
            <img className='w-[8rem] transition-all duration-300 hover:filter hover:brightness-0 hover:saturate-100 hover:invert sm:w-[10rem] md:w-[15rem]' src={img5} alt="Company 5" />
            <img className='w-[8rem] transition-all duration-300 hover:filter hover:brightness-0 hover:saturate-100 hover:invert sm:w-[10rem] md:w-[15rem]' src={img6} alt="Company 6" />
        </div>
    </div>
    </motion.div>
  );
}

export default Companies;