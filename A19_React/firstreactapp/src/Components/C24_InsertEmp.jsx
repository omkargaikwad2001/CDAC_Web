import { useReducer, useState } from "react";

const InsertEmp = () => {

  const init = {
    empno: "",
    ename: "",
    job: "",
    mgr: "",
    hiredate: "",
    sal: "",
    comm: "",
    deptno: ""
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fid]: action.value };
      case "reset":
        return init;
      default:
        return state;
    }
  };

  const [emp, setEmp] = useState([]);
  const [empData, dispatch] = useReducer(reducer, init);

  const GetEmpDetails = () => {
    fetch("http://localhost:9000/getallemps")
      .then(res => res.json())
      .then(data => setEmp(data))
      .catch(err => console.log(err.toString()));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/insertEmp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(empData)
    })
      .then(res => res.text())
      .then(msg => {
        alert(msg);
        dispatch({ type: "reset" });
        GetEmpDetails();
      })
      .catch(err => console.log(err.toString()));
  };

  return (
    <>
      <h1>This is Emp table</h1>

      <button onClick={GetEmpDetails}>Get All data</button>

      <table border="1">
        <thead>
          <tr>
            <th>Emp No</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {emp.map((v) => (
            <tr key={v.EMPNO}>
              <td>{v.EMPNO}</td>
              <td>{v.ENAME}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Insert New Employee</h2>

      <form onSubmit={handleSubmit}>
        <label>Emp No: </label>
        <input
          type="number"
          value={empData.empno}
          onChange={(e) =>
            dispatch({ type: "update", fid: "empno", value: e.target.value })
          }
        />
        <br />

        <label>Name: </label>
        <input
          type="text"
          value={empData.ename}
          onChange={(e) =>
            dispatch({ type: "update", fid: "ename", value: e.target.value })
          }
        />
        <br />

        <label>Job: </label>
        <input
          type="text"
          value={empData.job}
          onChange={(e) =>
            dispatch({ type: "update", fid: "job", value: e.target.value })
          }
        />
        <br />

        <label>Manager ID: </label>
        <input
          type="number"
          value={empData.mgr}
          onChange={(e) =>
            dispatch({ type: "update", fid: "mgr", value: e.target.value })
          }
        />
        <br />

        <label>Hire Date: </label>
        <input
          type="date"
          value={empData.hiredate}
          onChange={(e) =>
            dispatch({ type: "update", fid: "hiredate", value: e.target.value })
          }
        />
        <br />

        <label>Salary: </label>
        <input
          type="number"
          value={empData.sal}
          onChange={(e) =>
            dispatch({ type: "update", fid: "sal", value: e.target.value })
          }
        />
        <br />

        <label>Comm: </label>
        <input
          type="number"
          value={empData.comm}
          onChange={(e) =>
            dispatch({ type: "update", fid: "comm", value: e.target.value })
          }
        />
        <br />

        <label>Dept No: </label>
        <input
          type="number"
          value={empData.deptno}
          onChange={(e) =>
            dispatch({ type: "update", fid: "deptno", value: e.target.value })
          }
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export { InsertEmp };
