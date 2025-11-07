let C6_Table=()=>{

    let str = "";            
    let n=6;

    let rows = [];

    // const arr=Array.from({length:10},(_,i)=>6*(i+1));

    for(let i=1;i<=10;i++){

        rows.push(
            <tr key={i}>
                <td>{n}</td>
                <td>X</td>
                <td>{i}</td>
                <td>=</td>
                <td>{n*i}</td>
            </tr>
        )
    }

    return(
        <>

            <h1>TABLE OF 6</h1>
            <table>
                <tbody>{rows}</tbody>
            </table>   

        </>

    )

}

export {C6_Table};