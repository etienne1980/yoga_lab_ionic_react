import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>YogaLab Barcelona</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name='Landing con botton a: Reservar classe' />
      </IonContent>
    </IonPage>
  );
};

export default Menu;
