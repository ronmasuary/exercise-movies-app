import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SideMenu from './Components/SideMenu';
import BM from './Components/BM.js';
import Movie from './Components/Movie';


function App() {

  //https://www.youtube.com/watch?v=0d76_2sksWY


// מערך הסרטים, כל סרט הוא אובייקט של סרט שמכיל: שם, דירוג ממוצע, מערך דירוגים, תמונה ופרטים
  const [movies, setMovies] = useState([
    { name: 'Gladiator', rate: 2.5, rates: [1, 2, 3, 4], image: '', details: 'very good movie' },
    { name: 'It', rate: 3, rates: [5, 1, 2, 3, 4], image: '', details: 'very good movie' },
    { name: 'Shrek', rate: 3, rates: [5, 1, 2, 3, 4], image: '', details: 'very good movie' },
    { name: 'Batman', rate: 4, rates: [1, 4, 4, 5, 5, 5], image: '', details: 'very good movie' },
    { name: 'Spiderman', rate: 3, rates: [2, 5, 4, 1], image: '', details: 'very good movie' },
    { name: 'Luci', rate: 2, rates: [1, 2, 1, 2, 1, 2, 1, 5, 3], image: '', details: 'very good movie' },
    { name: 'Hangover', rate: 3, rates: [4, 5, 4, 1, 1], image: '', details: 'very good movie' },
    { name: 'Avatar', rate: 3, rates: [3, 4, 5, 2, 1], image: '', details: 'very good movie' },
    { name: 'Harry Potter', rate: 5, rates: [5, 5, 5, 5, 5], image: '', details: 'very good movie' },
    { name: 'The Joker', rate: 4, rates: [4, 4, 5, 2, 4, 5], image: '', details: 'very good movie' }
  ]);

// בשביל שהעמוד הראשון יהיה הסרט שמדורג בדירוג הגבוה ביותר, עשיתי לולאת סורט כדי למיין את המערך לפי הדירוג הממוצע הגבוה ביותר. הלולאה בתצורה 
// לא מתאימה למיון מחרוזות. דוגמא למיון שמתאים למחרוזות יש בקומפוננטה של תפריט הצד
  movies.sort((a, b) => b.rate - a.rate)


//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

// פונקציה שמקבלת אובייקט של סרט מעמוד הסרט. נשלחת לעמוד הסרט. מגדירה משתנה מסוג מערך, לאחר מכן מפזרת בתוכו את מערך הסרטים. 
// מגדירה משתנה מקומי שיכיל את האינדקס של הסרט שהתקבל. 
// לאחר מכן במשתנה המערך הזמני משנה את האובייקט באינדקס המתאים לאובייקט הסרט שהתקבל.
// עושה סט למערך הסרטים ומפזר בתוכו את המערך הזמני כאשר בתוכו יש את הסרט המעודכן
  const updateMovies = (movie) => {
    let temp = []
    temp = [...movies]
    let moIn = temp.findIndex(e => {
      if (e.name === movie.name) {
        return true
      }
    })
    temp[moIn] = movie;
    setMovies([...temp])

  }


  

//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
 


// כותרת וזה. מתחתייה שלושת הסרטים שמדורגים הכי גבוה.
// לאחר מכן עשיתי רידיירקט לעמוד הסרט במיקום הראשון במערך הסרטים הממוין, כלומר לסרט הטוב ביותר. הנתיב הוא בהתאם למה שכתוב בראוט. עמוד הסקט ולאחר 
// מכן שם הסרט באינדקס המתאים. 
// עשיתי לולאת מאפ, למערך הסרטים ויצרתי לכל סרט נתיב משלו לראוט משלו כאשר הנתיב הוא עמוד סרט ושם הסרט

// לעמוד הסרט שלחתי אובייקט סרט שמתקבל מהמאפ. שלחתי אלייה גם את הפונקציה שמעדכנת את מערך הסרטים שכאשר בעמוד הסרט יהיה דירוג חדש של סרט
// מערך הסרטים יתעדכן עם הדירוג החדש של הסרט שדורג. בגלל שאחרי מערך הסרטים יש פונקציה אשר ממינת אותו, גם הכפתורים שמציגים את הסרטים 
// שמדורגים בדירוג הגבוה ביותר יתעדכנו גם הם. אם סרט ידורג בדירוג מספיק גבוה כדי להיות בין הסרטים שמדורגים הכי גבוה, הוא יוצג במקום הסרט שמדורג במיקום
// הנמוך ביותר מבין שלושת הסרטים שמדורגים בדירוג הגבוה ביותר

// לאחר מכן מחוץ לסוויץ ייבאתי את תפריט הצד
  return (
    <div className="container-md">
      <div>

        <Router>

          <div className='row justify-content-center'>
            <h1>Best movies</h1>
          </div>

          <div className='row justify-content-center '>
            <BM movies={movies} />
          </div>

          <div className='row'>

            <Switch>
            

              <div className=' col-md-9'>
              <Redirect to={`/movie/${movies[0].name}`}/>
                {movies.map((movie, i) => {
                  return (
                    <Route exact path={`/movie/${movie.name}`} component={() => {
                      return (
                        <div >
                          <Movie updateMovies={updateMovies} movie={movie}  index={i} />
                        </div>
                      )
                    }} />
                  )
                })}
              </div> 
            
            </Switch>

            <div >
              <SideMenu movies={movies} />
            </div>
          </div>
        </Router>
      </div>
    </div>

  )
}

export default App;
