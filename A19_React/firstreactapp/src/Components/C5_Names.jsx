let NamesCompo = () => {

    let data = ["Omkar", "Amit", "Shubham", "Virat", "Rohit"];

    return (
        <>
            <h1>NAMES</h1>
            <ul>
                {data.map((val) => {
                    return (
                        <li>{val}</li>
                    )
                })}
            </ul>

        </>
    )

}

export { NamesCompo };