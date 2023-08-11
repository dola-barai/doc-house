import ExpertDoctor from "../../Doctor/ExpertDoctor";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import PatientSays from "../PatientSays/PatientSays";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Services></Services>
            <PatientSays></PatientSays>
            <ExpertDoctor></ExpertDoctor>
        </div>
    );
};

export default Home;