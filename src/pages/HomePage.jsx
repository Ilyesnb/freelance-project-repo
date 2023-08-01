import NavBar from "../Components/NavBar";
import ImgSaction from "../Components/ImgSaction";
import Freelancer from "../images/Freelancer.jpeg";
import TextSaction from "../Components/TextSaction";
import Equipe from "../images/equipe.png";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <ImgSaction
        picteur={Freelancer}
        description="freelancer picteur"
        title="Freelance"
      />
      <TextSaction
        photo={Equipe}
        description="photo d'equipe"
        text1="freelancer est plus qu'un endroit pour trouver le prochain emploi. Tout ce que nous faisons est fait par la communauté pour la communauté."
        text2="Que vous souhaitiez partager vos connaissances, devenir intervieweur, participer à des événements ou simplement apprendre des autres - freelancer est l'endroit
        où les freelances technologiques ont la liberté de se développer et de construire plus qu'une simple carrière."
        title1="Par la communauté"
        title2="—pour la communauté"
      />
    </div>
  );
};

export default HomePage;
