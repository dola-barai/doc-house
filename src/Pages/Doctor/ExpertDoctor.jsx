import doctor1 from '../../assets/d2.jpg'


const ExpertDoctor = () => {
    return (
        <div className="my-12 mb-20">
            <div className="text-center mx-56 mb-16">
                <h2 className="text-3xl font-bold">Our Expert Doctors</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mx-6">
                <div className="card w-96  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={doctor1} className="h-80 w-80 rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Karyan Adorshon</h2>
                        <p>BTP - Senior Physiotherapist</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertDoctor;