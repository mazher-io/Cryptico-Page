import img1 from '../../assets/1.svg';
import img2 from '../../assets/2.svg';
import img3 from '../../assets/3.svg';
import img4 from '../../assets/4.svg';
import img5 from '../../assets/5.svg';
import img6 from '../../assets/6.svg';

const Companies = () => {
  return ( 
    <div className="flex items-center justify-center flex-col">
        <p className="text-white">Trusted by the fastest growing companies</p>
        <div className="flex items-center pt-8 gap-8 pb-10">
            <img className='w-[15rem] transition-all duration-300 hover:filter hover:brightness-0 hover:saturate-100 hover:invert' src={img1} alt="Company 1" />
            <img className='w-[15rem] transition-all duration-300 hover:filter hover:brightness-0 hover:saturate-100 hover:invert' src={img2} alt="Company 2" />
            <img className='w-[15rem] transition-all duration-300 hover:filter hover:brightness-0 hover:saturate-100 hover:invert' src={img3} alt="Company 3" />
            <img className='w-[15rem] transition-all duration-300 hover:filter hover:brightness-0 hover:saturate-100 hover:invert' src={img4} alt="Company 4" />
            <img className='w-[15rem] transition-all duration-300 hover:filter hover:brightness-0 hover:saturate-100 hover:invert' src={img5} alt="Company 5" />
            <img className='w-[15rem] transition-all duration-300 hover:filter hover:brightness-0 hover:saturate-100 hover:invert' src={img6} alt="Company 6" />
        </div>
    </div>
  );
}

export default Companies;