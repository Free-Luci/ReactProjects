export const Practises =() => {

    const students =[];

    console.log(Boolean(students.length));
    console.log(students.length);
    
    

    return(
        <>
        {/* { <p>
            {students.length && "No students found"}</p> } */}
     
                    {/*1st  */}
                    {/* <p>{students.length===0 && "No students found"}</p> */}

                    {/* 2nd */}
                {/* <p>{! students.length && "No students found"}</p> */}

                {/* 3rd */}
            {/* <p>{Boolean(students.length) && "No students found"}</p>8 */}
            <p>Number of students:{students.length}</p>
            </>
    );

};