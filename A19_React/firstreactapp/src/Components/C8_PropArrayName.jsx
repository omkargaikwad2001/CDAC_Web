const ArrayNameProp = ({ data }) => {

    return (
        <>
            <ul>
                {data.map((val, ind) => {
                    return (
                        <li key={ind}>{val}</li>
                    )
                })}
            </ul>
        </>
    )

}

export { ArrayNameProp };