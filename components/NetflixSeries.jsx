// export const NetflixSeries =() => ....

import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries =() =>{
    // const name = "Queen of Tears";
    // const rating = "8.2";
    // const summary ="Baek Hyun-woo and Hong Hae-in Navigate a tense relationship, both at home and at work.But upon deciding his future ,Hyun-woo pays a visit to his family.";

    // let age =19;

    
    // const returnGenre =() => {
    //     const Genre ="Hey Rone";
    //     return Genre;
    // };

    // // let Canwatch ="Not Available";

    // // if (age>= 18) Canwatch = "Watch Now";


    // const Canwatch = () =>{
    //     if (age>= 18) return "Watch Now" ;
    //     return "Not Available";
    // }

    // // if (age<18){

    //     return (

    //         <div>
            
    //             <div>
            
    //         <img src="abc.jpeg" Alt ="abc.jpeg" width="41%" height="41%"/>
            
    //             </div>
            
    //         <h2>Name: {name}</h2>
            
    //         <h3>Rating: {5+9.22}</h3>
            
    //           {/* <p>summary:Baek Hyun-woo and Hong Hae-in Navigate a tense relationship, both at home and at work.But upon deciding his future ,Hyun-woo pays a visit to his family.</p>; */}
            
            
    //         <p>Summary: {summary}</p>
    //         <p>Genre: {returnGenre()}</p>
    //         <button>Not Availale</button>
    //         </div>);



    // }
    
    return (
        <ul className="grid grid-three-cols" >
            {
                seriesData.map((curElem) =>(

                    <SeriesCard key ={curElem.id} data={curElem}/>

                // return(    <li key ={curElem.id}>

                //     <div>
                
                // {/* <img src="abc.jpeg" Alt ="qot.jpeg" width="41%" height="41%"/> */}
                // <img 
                // src={curElem.img_url}
                // Alt ="qot.jpg"
                // width="41%"
                // height="41%"
                // />
                
                //     </div>
                
                // <h2>Name: {curElem.name}</h2>
                
                // <h3>Rating: {curElem.rating}</h3>
                
                //   {/* <p>summary:Baek Hyun-woo and Hong Hae-in Navigate a tense relationship, both at home and at work.But upon deciding his future ,Hyun-woo pays a visit to his family.</p>; */}
                
                
                // <p>Summary: {curElem.description}</p>
                // {/* <p>Genre: {returnGenre()}</p> */}
                // {/* <button>Watch Now</button> */}
                // <p>Genre : {curElem.genre}</p>
                // <p>Cast: {curElem.cast}</p>
                // {/* <button>{age >= 08 ? "Watch Now" : "Not Available"}</button> */}
                        
                //         {/* <button>{Canwatch()}</button>; */}
                //         <a href={curElem.watch_url} target="_blank">
                //         <button>Watch Now</button>
                //         </a>
                // </li>)
                ))}
                
               
                
            
                



</ul>
);
} ;

// export const Footer =() =>{
//     return(
//         <p>sumit the king maker</p>
//     );
// }

// export const Header =() =>{
//     return(
//         <p>Lucifer</p>
//     );
// }
export default NetflixSeries;