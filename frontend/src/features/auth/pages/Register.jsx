import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";


function Register() {

  const navigate = useNavigate();
  const {loading,handleRegister} = useAuth()


  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleRegister({username,email,password})
    if (loading) {
      return(<main>
        <h1>Loading...</h1>
        </main>
      )
    }

  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #1e2429, #1a191a)"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "15px",
        width: "350px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "30px", color: "#333" }}>Register</h2>

       <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "12px",
            marginBottom: "15px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        /><br />

        <input
        type="email"
          placeholder="Enter an Email"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "12px",
            marginBottom: "15px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        /><br />

        <input
          type="password"
          placeholder="Enter a Password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "12px",
            marginBottom: "20px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        /><br />

        <button
    
        className="btn"
          style={{
            padding: "12px",
            width: "100%",
            borderRadius: "8px",
            border: "none",
            background: "#9b59b6",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            
            
          }}
        >
          Register
        </button>

       </form>
        <p style={{ marginTop: "20px", color: "#555" }}>
          Already have account? <span style={{color:"#9b59b6", cursor:"pointer"}}
           onClick={() => navigate("/login")}
           >Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;