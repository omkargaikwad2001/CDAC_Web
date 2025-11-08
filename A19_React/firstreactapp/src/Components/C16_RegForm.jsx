import { useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RegForm = () => {
  const init = {
    email: "",
    pass: "",
    gender: "",
    city: "",
    agree: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fid]: action.value };
      case "toggleAgree":
        return { ...state, agree: !state.agree };
      case "reset":
        return init;
      default:
        return state;
    }
  };

  const [emp, dispatch] = useReducer(reducer, init);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emp.agree) {
      setError("⚠️ Please accept the policy first.");
      return;
    }

    setError("");
    console.log("Form Submitted:", emp);
    alert("Form submitted successfully!");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary mb-3">Registration Form</h2>

      <form
        className="p-3 border rounded shadow-sm bg-light"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={emp.email}
            onChange={(e) =>
              dispatch({ type: "update", fid: "email", value: e.target.value })
            }
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={emp.pass}
            onChange={(e) =>
              dispatch({ type: "update", fid: "pass", value: e.target.value })
            }
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            value={emp.gender}
            onChange={(e) =>
              dispatch({ type: "update", fid: "gender", value: e.target.value })
            }
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            value={emp.city}
            onChange={(e) =>
              dispatch({ type: "update", fid: "city", value: e.target.value })
            }
            required
          />
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="agree"
            checked={emp.agree}
            onChange={() => dispatch({ type: "toggleAgree" })}
          />
          <label htmlFor="agree" className="form-check-label">
            I agree to the terms & policy
          </label>
        </div>

        {error && <p className="text-danger">{error}</p>}

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
        </div>
      </form>

      <p className="mt-3">
        <strong>Current State:</strong> {JSON.stringify(emp)}
      </p>
    </div>
  );
};

export { RegForm };
