import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';


export default function BM ({movies}) {


// קומפוננטה של הסרטים הטובים ביותר אשר מקבלת כפרופס את מערך הסרטים לאחר מיון.
// משתנה מקומי שיכיל את הפיזור של מערך הסרטים שהתקבל ולאחר מכן מחיקה של כל האיברים אשר נמצאים במערך החדש החל מאינדקס 3, כלומר ישארו המערך רק שלושה איברים
    let best=[...movies]
  best.splice(3,best.length)
// בעזרת לולאת מאפ מציגים כל איבר במערך המקומי כלינק לעמוד הסרט עם שם הסרט 
    return (
        <div>
            {best.map(B=>{
                return (
                    <div className="btn-group" role="group">
                        <Link to={`/movie/${B.name}`}><button type="button" className="btn btn-secondary btn-lg">{B.name}</button></Link>
                    </div>
                )
            })}
        </div>
    )
}
