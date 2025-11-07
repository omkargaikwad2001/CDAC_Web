import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { C1_Compo } from './Components/C1_ClassCompo';
import { C2_FuncCompo, Demo } from './Components/C2_FuncCompo';
import { ClsHeaderCompo } from './Components/C3_ClassHeader';
import { NamesCompo } from './Components/C5_Names';
import { C6_Table } from './Components/C6_Table';
import { ClsProp } from './Components/C7_PropFact';
import { ArrayNameProp } from './Components/C8_PropArrayName';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <App /> */}
    {/* <C1_Compo/> */}
    {/* <C2_FuncCompo/> */}
    {/* <Demo/> */}
    {/* <ClsHeaderCompo/> */}
    {/* <NamesCompo/> */}
    {/* <C6_Table/> */}
    {/* <ClsProp num="5"/> */}
    {/* <ArrayNameProp data = {['apple','mango','banana','chiku']}/> */}

    

  </React.StrictMode>
);

reportWebVitals();
