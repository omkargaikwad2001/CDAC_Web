import { useState } from "react";

const C14_ArrayStudent = ()=>{
    
    const [student,setnm] = useState([]);
    const [ele,setele] = useState("");
    
    return (
        <>
            <h1>This is Array of student</h1>
            <ul>
                {student.map((v)=>{
                    return(
                        <li>{v}</li>
                    )
                })}
            </ul>
            Enter Name : <input type="text" onChange={(e)=>{
                setele(e.target.value)
            }}/>
            <button onClick={(e)=>{
                setnm(student.concat([ele]))
            }}>Display</button>
        </>
    )
}
export {C14_ArrayStudent};