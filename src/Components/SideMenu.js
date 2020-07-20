import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

export default function SideMenu({movies}) {


// הקומפוננטה מקבלת את מערך הסרטים.
// יוצר סטייט של מערך ממוין, בתוכו מערך אשר מכיל את פיזור מערך הסרטים שממוין לפי abc 
// פונקציית סורט מקבלת שני פרמטרים, שניהם שמות של סרטים שנמצאים במערך.
// שני משתנים מקומיים שיכילו את שמות הסרטים שהפונקציה בודקת, היא משנה אותם לאותיות קטנות כדי ליצור אחידות ביניהם.
// אם שם 1 גדול משם 2 תחזיר -1, אם ההפך תחזיר 1, ואם אותו דבר אז 0. כלומר, הפונציה תסדר את המערך כך שהערך שקיבל הכי הרבה פעמים 1 יהיה ראשון
// והאחרון יהיה הערך שקיבל 1 הכי פחות פעמים, כלומר, 0. כי הוא לא גדול יותר מאף איבר אחר במערך
const [sortedM,setSortedM]=useState([...movies.sort((a, b) => {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase(); 
    
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    return 0;
  })])  


// בעזרת לולאת מאפ כל איבר במערך הופך ללינק לעמוד הסרט שלו.
return (
    <div>
        {sortedM.map(m=>{
            return (
                <div className='row bg-dark' >
                    
                 <Link  to={`/movie/${m.name}`}><button type='button' className="btn btn-dark btn-lg btn-block " >{m.name}</button></Link>
                    <p></p>
                </div>
              
            )
        })}
        
    </div>
)
}

