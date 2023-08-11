import { ClockIcon, MapPinIcon, PhoneArrowDownLeftIcon } from '@heroicons/react/24/solid'
const Services = () => {
    return (
        <div className='grid grid-cols-3 mx-24'>
            <div className="my-10 w-80 bg-sky-950 p-6 rounded-xl">
            <div className='flex gap-4'>
                <div>
                   <ClockIcon className="h-12 w-12 text-white" /> 
                </div>
                <div>
                    <p className='text-white text-xl mb-2'>Opening Hours</p>
                    <p className='text-white mb-2'>Open 9:00am to 5:00pm</p>
                    <p className='text-white'>Everyday</p>
                </div>
            </div>
        </div>
        <div className="my-10 w-80 bg-red-300 p-6  rounded-xl">
            <div className='flex gap-4'>
                <div>
                   <MapPinIcon className="h-12 w-12 text-white" /> 
                </div>
                <div>
                    <p className='text-white text-xl mb-2'>Our Locations</p>
                    <p className='text-white mb-2'>Dhanmondi 17, Dhaka </p>
                    <p className='text-white'>-1200, Bangladesh</p>
                </div>
            </div>
        </div>
        <div className="my-10 w-80 bg-sky-950 p-6 rounded-xl">
            <div className='flex gap-4'>
                <div>
                   <PhoneArrowDownLeftIcon className="h-10 w-10 text-white" /> 
                </div>
                <div>
                    <p className='text-white text-xl mb-2'>Contact Us</p>
                    <p className='text-white mb-2'>+88 01750 00 00 00 </p>
                    <p className='text-white'>+88 01750 00 00 00</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Services;