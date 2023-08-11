import avatar from '../../../assets/avatar.png'

const PatientSays = () => {
    return (
        <div className="my-12 mb-20">
            <div className="text-center mx-56 mb-16">
                <h2 className="text-3xl font-bold">What Our Patients Says</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mx-6">
                <div className="card bg-base-100 shadow-xl">
                    <div className="flex items-center mx-8">
                        <div className='mr-4'>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={avatar} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold'>Diva Sen</h3>
                            <p className='text-xl'>Product Designer</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="flex items-center mx-8">
                        <div className='mr-4'>
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={avatar} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl font-bold'>Diva Sen</h3>
                            <p className='text-xl'>Product Designer</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientSays;