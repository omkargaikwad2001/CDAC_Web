let TimeCompo = ()=>{

    return(
        <>
            <h1>Date = {new Date().toLocaleDateString()}</h1>
            <h1>Time = {new Date().toLocaleTimeString()}</h1>
        </>
    )

}

export {TimeCompo};