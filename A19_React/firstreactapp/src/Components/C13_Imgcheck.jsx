import { useState } from "react";

const ImgCheck = () => {

    const[ischeck,setIsCheck] = useState(true);

    return (
        <>
            <h1>This is image check</h1>
            <img src="../images/img5.jpg" alt="img1" style={{display:ischeck?"block":"none"}} height={250} width={250} />
            <div>
                <input type="checkbox" checked={ischeck} onChange={(e)=>{
                    setIsCheck(!ischeck)
                }}/>Show/Hide image
            </div>
        </>
    )

}
export { ImgCheck };