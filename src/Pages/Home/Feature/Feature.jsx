import img from '../../../assets/dr.jpg'
import teeth from '../../../assets/teeth.jpg'

const Feature = () => {
    return (
        <section className="mx-20 my-10">
            <div className="grid grid-cols-2 gap-8 ">
                <div>
                    <img className='h-[910px] rounded-xl' src={img} alt="" />
                </div>
                <div>
                    <div>
                        <h3 className='text-4xl font-semibold mb-3'>Our Services</h3>
                        <p className='mb-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <div className="btn-group mb-8">
                            <button className="btn btn-error">Cavity Protection</button>
                            <button className="btn btn-ghost">Cosmetic Dentisty</button>
                            <button className="btn btn-ghost">Oral Surgery</button>
                        </div>
                    </div>
                    <div>
                        <img src={teeth} alt="" />
                    </div>
                    <div>
                        <h3 className='text-3xl font-semibold mt-8 mb-3'>Electro  Gastrology Therapy</h3>
                        <p className='mb-2'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                        <p className='mb-3'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <button className="btn btn-outline btn-error">More Details</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;