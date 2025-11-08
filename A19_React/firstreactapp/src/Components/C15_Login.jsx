import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [uid, setUid] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("UserId:", uid, "Password:", pass);
    alert(`Login Successful!\nUserId: ${uid}\nPassword: ${pass}`);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setUid("");
    setPass("");
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ width: "24rem" }}>
        <h2 className="text-center mb-4 text-primary">Login Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="uid" className="form-label fw-semibold">
              User ID
            </label>
            <input
              type="text"
              id="uid"
              className="form-control"
              placeholder="Enter your user ID"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="pass" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              id="pass"
              className="form-control"
              placeholder="Enter your password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary w-50 me-2">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-secondary w-50"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>

        <p className="mt-3 text-center text-muted">
          uid = <strong>{uid}</strong> | pass = <strong>{pass}</strong>
        </p>
      </div>
    </div>
  );
};

export { Login };
