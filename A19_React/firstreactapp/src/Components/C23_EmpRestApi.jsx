import { useEffect, useState } from "react"

const EmpRest = ()=>{

    const [emp, setEmp] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:9000/getemps")
        .then((res)=> res.json())       
        .then((data)=> setEmp(data))    
        .catch((err)=> console.log(err.toString()))
    },[]) 

    return(
        <>
            <h1>This is EMP REST API</h1>

            <table border="1">
                <thead>
                    <tr>
                        <th>Emp No</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Manager</th>
                        <th>Hiredate</th>
                        <th>Salary</th>
                        <th>Comm</th>
                        <th>Dept No</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        emp.map((v)=> {
                            return(
                                <tr key={v.EMPNO}>
                                    <td>{v.EMPNO}</td>
                                    <td>{v.ENAME}</td>
                                    <td>{v.JOB}</td>
                                    <td>{v.MGR}</td>
                                    <td>{v.HIREDATE}</td>
                                    <td>{v.SAL}</td>
                                    <td>{v.COMM}</td>
                                    <td>{v.DEPTNO}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </>
    )
}

export { EmpRest };
