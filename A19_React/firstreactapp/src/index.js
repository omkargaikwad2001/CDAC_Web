import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { C1_Compo } from './Components/C1_ClassCompo';
import { C2_FuncCompo, Demo } from './Components/C2_FuncCompo';
import { ClsHeaderCompo } from './Components/C3_ClassHeader';
import { NamesCompo } from './Components/C5_Names';
import { C6_Table } from './Components/C6_Table';
import { ClsProp } from './Components/C7_PropFact';
import { ArrayNameProp } from './Components/C8_PropArrayName';
import { EmpCompo } from './Components/C9_EmployeeDetails';
import { Msg } from './Components/C10_MsgState';
import { ParaColor } from './Components/C11_ParaColor';
import { Counter } from './Components/C12_Count';
import { ImgCheck } from './Components/C13_Imgcheck';
import {C14_ArrayStudent} from './Components/C14_ArrayStudent';
import { Login } from './Components/C15_Login';
import { RegForm } from './Components/C16_RegForm';
import { StyleInExt } from './Components/C17_Styling1';
import { HeaderBoot } from './Components/C18_HeaderBoot';
import { UpdatingPhase } from './Components/C19_UpdatingPhase';
import { MountingPhase } from './Components/C20_Mounting';
import { Time } from './Components/C21_TimeUseEff';
import { Rest } from './Components/C22_RESTAPI';
import { EmpRest } from './Components/C23_EmpRestApi';
import { InsertEmp } from './Components/C24_InsertEmp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
    {/* <C1_Compo/> */}
    {/* <C2_FuncCompo/> */}
    {/* <Demo/> */}
    {/* <ClsHeaderCompo/> */}
    {/* <NamesCompo/> */}
    {/* <C6_Table/> */}
    {/* <ClsProp num="5"/> */}
    {/* <ArrayNameProp data = {['apple','mango','banana','chiku']}/> */}
    {/* <EmpCompo eid={101} name={"Omkar"} sal={8000} /> */}
    {/* <Msg/> */}
    {/* <ParaColor/> */}
    {/* <Counter/> */}
    {/* <ImgCheck/> */}
    {/* <C14_ArrayStudent/> */}
    {/* <Login/> */}
    {/* <RegForm/> */}
    {/* <StyleInExt/> */}
    {/* <HeaderBoot/> */}
    {/* <UpdatingPhase/> */}
    {/* <MountingPhase/> */}
    {/* <Time/> */}
    {/* <Rest/> */}
    {/* <EmpRest/> */}

    {/* <InsertEmp/> */}

  </React.StrictMode>
);

reportWebVitals();
;