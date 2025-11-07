import { Component } from "react";
import { TimeCompo } from "./C4_TimeCompo";

class ClsHeaderCompo extends Component {

    render() {

        return (
            <>
                <img src="logo192.png" alt="logoimg" />
                {/* <img src="/images/img1.jpg" alt="img1" height={250} width={500} /> */}
                <h1>Welcome</h1>
                <TimeCompo/>
            </>
        )
    }

}

export { ClsHeaderCompo };