import React from 'react';
import {IonCard,IonCardContent} from '@ionic/react';
const BMIResult:React.FC<{result:number;}>=props=>{
return(
        <IonCard>
        <IonCardContent>
        <h2>Your BMI is</h2>
        <h3>{props.result}</h3>
        </IonCardContent>
        </IonCard>
     );
}
export default BMIResult;