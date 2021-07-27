import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonToolbar, IonTitle, IonAlert, IonGrid, IonRow, IonCol, IonLabel, IonInput, IonItem } from '@ionic/react';
import BMIButtons from './components/BMIButtons';
import BMIResult from './components/BMIResult';
import '@ionic/react/css/core.css';
import React from 'react';
import { useRef, useState } from 'react';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const [resBMI, setresBMI] = useState(0);
  const [error, setError] = useState(false);
  const calculateBMI = () => {
    const enteredHeight = heightInputRef.current!.value;
    const enteredWeight = weightInputRef.current!.value;
    if (!enteredWeight || !enteredHeight) {
      return;
    } else if (+enteredWeight <= 0 || +enteredHeight <= 0) {
      setError(true)
      weightInputRef.current!.value = '';
      heightInputRef.current!.value = '';
      setresBMI(0);
    }
    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);
    setresBMI(bmi);
  }
  const resetHandler = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
    setresBMI(0);
  }
  return (
    <React.Fragment>

      {error && <IonAlert isOpen={error} onDidDismiss={() => setError(false)} message={"Please enter some non-zero value"} buttons={['Okay!']} animated={true} />}
      <IonApp>
        <IonHeader className="ion-padding">
          <IonToolbar color="primary">
            <IonTitle>
              BMI Caluclator
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid >
            <IonRow className="ion-margin">
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Height</IonLabel>
                  <IonInput ref={heightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-margin">
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Weight</IonLabel>
                  <IonInput ref={weightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <BMIButtons calculateHandler={calculateBMI} resetBMI={resetHandler} />
          </IonGrid>{
            resBMI > 0 &&
            <BMIResult result={resBMI} />}
        </IonContent>
      </IonApp>
    </React.Fragment>)
};

export default App;
