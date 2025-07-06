import styles from "./Netflix.module.css";
import styled from "styled-components";


export  const SeriesCard = ({data}) => {
    // console.log(props);
    const { id, img_url, name, rating, description, cast, genre, watch_url }=data;


    // const btn_style ={
    //        padding:"1.2rem 2.4rem",
    //             border:"none",
    //             fontSize:"1.6rem",
    //             // backgroundColor:"var(--bnt-hover-bg-color)",
    //             backgroundColor:`${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}` ,
    //             // color:"var(--bg-color)",
    //             color:"var(--btn-color)",
    //             fontWeight :"bold",
    //             cursor:"pointer",
    // };

         // THROUGH OBJECT
    //     const ButtonThapa =styled.button( 
    //         {
    //               padding:"1.2rem 2.4rem",
    //             border:"none",
    //             fontSize:"1.6rem",
    //             // backgroundColor:"var(--bnt-hover-bg-color)",
    //             backgroundColor:`${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}` ,
    //             // color:"var(--bg-color)",
    //             color:"var(--btn-color)",
    //             fontWeight :"bold",
    //             cursor:"pointer",
    //     }
    // );

    
   

    // const btn_style ={
    //        padding:"1.2rem 2.4rem",
    //             border:"none",
    //             fontSize:"1.6rem",
    //             // backgroundColor:"var(--bnt-hover-bg-color)",
    //             backgroundColor:`${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}` ,
    //             // color:"var(--bg-color)",
    //             color:"var(--btn-color)",
    //             fontWeight :"bold",
    //             cursor:"pointer",
    // };


//  TEMPLATE LITERALS

        const ButtonThapa =styled.button`
                padding:1.2rem 2.4rem;
                border:none;
                font-size:1.6rem;
                background-color:${(props) => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"} ;
                
                color:var(--btn-color);
                font-weight :bold;
                cursor:pointer;
                `;

                //  IN STYLED COMPONETNT YOU CAN PASS A FN. WITHIN TEMPLATE LITERALS
                //  to DYNAMICALLY SET CSS PROPERTIES BASED ON PROPS OR STATE.

            const Rating = styled.h3 `
            font-size:1.6rem;
            color : #7dcea0;
            text-transform:capitalize;
            `;

    // const ratingClass= rating >= 8.5 ? "super_hit" : "average";
    
        const ratingClass= rating >= 8.5 ? styles.super_hit : styles.average;

    return(
//         <li className="card">

//         <div>
    
//     {/* <img src="abc.jpeg" Alt ="qot.jpeg" width="41%" height="41%"/> */}
//     <img 
//     src={img_url}
//     // Alt ="qot.jpg"
//     alt={ name }
//     width="40%"
//     height="40%"
//     />
    
//         </div>
//         <div className="card-content">
    
//     <h2>Name: { name}</h2>

//     {/* conditional styling */}
//     {/* <h3 >Rating: <span className={rating >=8.5 ? "super_hit": "average"}> {rating}</span></h3> */}
    
    
//     {/* Template literals     */}
//     {/* <h3 >Rating: <span className={`rating  ${rating >=8.5 ? "super_hit": "average"}`}> {rating}</span></h3> */}

//     <h3>Rating:
//         <span className={`rating ${ratingClass}`}>{rating}</span>
//     </h3>
    
//       {/* <p>summary:Baek Hyun-woo and Hong Hae-in Navigate a tense relationship, both at home and at work.But upon deciding his future ,Hyun-woo pays a visit to his family.</p>; */}
    
    
//     <p >Summary: {description}</p>
//     {/* <p>Genre: {returnGenre()}</p> */}
//     {/* <button>Watch Now</button> */}
//     <p >Genre : {genre.join(" , ")}</p>
//     <p >Cast: {cast.join(" , ")}</p>
//     {/* <button>{age >= 08 ? "Watch Now" : "Not Available"}</button> */}
            
//             {/* <button>{Canwatch()}</button>; */}
//             <a href={watch_url} target="_blank">
//             {/* <button style={{
//                 padding:"1.2rem 2.4rem",
//                 border:"none",
//                 fontSize:"1.6rem",
//                 backgroundColor:"var(--bnt-hover-bg-color)",
//                 color:"var(--bg-color)",
//             }}>Watch Now</button> */}

//             <button style={btn_style}>Watch Now</button>
//             </a>
//             </div>
//     </li>)     
// }

 <li className={styles.card}>

        <div>
    
    <img 
    src={img_url}
    // Alt ="qot.jpg"
    alt={ name }
    width="40%"
    height="40%"
    />
    
        </div>
        {/* <div className={styles["card-content"]}> */}
        <div className="flex flex-col gap-6 px-[1.2rem] py-[3.2rem]">
    
    <h2>Name: {name}</h2>


    <Rating>Rating:
        <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
    </Rating>
    
    
    
    <p className="text-3xl font-bold underline text-cyan-300">Summary: {description}</p>

    <p >Genre : {genre.join(" , ")}</p>
    <p >Cast: {cast.join(" , ")}</p>
            <a href={watch_url} target="_blank">
    

            {/* <button style={btn_style}>Watch Now</button> */}
        <ButtonThapa rating ={rating}>Watch Now</ButtonThapa> 

            </a>
            </div>
    </li>)
    
    
    };
