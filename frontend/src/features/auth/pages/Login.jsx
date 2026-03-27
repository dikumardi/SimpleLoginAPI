import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const { loading, handleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
   
    navigate('/dashboard')
  }
   if (loading) {
      return (<main>
        <h1>Loading...</h1>
        </main>
      )
    }

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "linear-gradient(135deg, #000000, #363636)",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "15px",
            width: "350px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "30px", color: "#333" }}>Login</h2>

          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "12px",
              marginBottom: "15px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <br />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "12px",
              marginBottom: "20px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <br />

          <button
            style={{
              padding: "12px",
              width: "100%",
              borderRadius: "8px",
              border: "none",
              background: "#fda085",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>

          <p style={{ marginTop: "20px", color: "#555" }}>
            No account?{" "}
            <span
              style={{ color: "#fda085", cursor: "pointer" }}
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Login;
