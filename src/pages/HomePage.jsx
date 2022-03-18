import NavBar from "../Components/NavBar";
import ImgSaction from "../Components/ImgSaction";
import Freelancer from "../images/Freelancer.jpeg";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <ImgSaction
        picteur={Freelancer}
        description="freelancer picteur"
        title="Freelance"
      />
    </div>
  );
};

export default HomePage;
