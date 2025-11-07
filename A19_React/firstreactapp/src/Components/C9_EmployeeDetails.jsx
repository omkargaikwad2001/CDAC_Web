const EmpCompo = (props) =>{

    return(

        <>
            <h1>This is Employee Details...</h1>
            <table border={1}>
                <tr>
                    <td>{props.eid}</td>
                    <td>{props.name}</td>
                    <td>{props.sal}</td>
                </tr>
            </table>
        </>

    )

}

export {EmpCompo};