import doctor1 from '../../../assets/d4.jpg'
import doctor2 from '../../../assets/d5.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className='bg-image pt-40 pb-12 '>
            <div className="grid grid-cols-2 gap-4">
                <div className="py-24 ml-28">
                    <h2 className="text-6xl font-semibold text-white mb-4">Your Best Medical <br /> Help Center</h2>
                    <p className="mb-4 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quo obcaecati nemo quas! Cum possimus eligendi culpa at fuga laudantium.</p>
                    <button className="btn btn-error text-white">All Service</button>
                </div>
                <div className='ml-28 mt-8'>
                    <div className='flex'>
                        <img className='h-56 border-4 -skew-y-6 border-white mr-6' src={doctor1} alt="" />
                        <img className='h-56 border-4 -skew-y-6 border-white' src={doctor1} alt="" />
                    </div>
                    <img className='h-56 absolute border-4 -skew-y-6 border-white ml-20 -mt-20' src={doctor2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;