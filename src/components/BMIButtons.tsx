import React from 'react';
import {calculatorOutline,refreshOutline} from 'ionicons/icons'
import {IonRow,IonCol,IonButton,IonIcon} from '@ionic/react';
const BMIButtons:React.FC<{calculateHandler:()=>void; resetBMI:()=>void;}>=props=>{
return (<>
   <IonRow className="ionic-text-center">
            <IonCol>
              <IonButton onClick={props.calculateHandler}>
                <IonIcon slot="start" icon={calculatorOutline} />
                Calculate</IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={props.resetBMI}>
                <IonIcon slot="start" icon={refreshOutline} />
                Reset</IonButton>
            </IonCol>
          </IonRow>
</>);

}
export default BMIButtons;