import { useEffect, useState } from "react";

const Rest = () => {
  const [user, setUser] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.log(err.toString()));
  }, []);

  const tableStyle = {
    width: "80%",
    margin: "20px auto",
    borderCollapse: "collapse",
    fontFamily: "Arial",
    fontSize: "16px"
  };

  const thStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "10px",
    border: "1px solid black",
    textAlign: "left"
  };

  const tdStyle = {
    padding: "8px",
    border: "1px solid black"
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>This is REST API DEMO</h1>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Username</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>City</th>
            <th style={thStyle}>Zipcode</th>
          </tr>
        </thead>

        <tbody>
          {user.map((v) => (
            <tr key={v.id}>
              <td style={tdStyle}>{v.id}</td>
              <td style={tdStyle}>{v.name}</td>
              <td style={tdStyle}>{v.username}</td>
              <td style={tdStyle}>{v.email}</td>
              <td style={tdStyle}>{v.address.city}</td>
              <td style={tdStyle}>{v.address.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export { Rest };
