import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import MainContainer from "../components/MainContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <MainContainer />
    </IonPage>
  );
};

export default Home;
