import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <main style={{
      minHeight: "100vh",
      fontFamily: "Segoe UI, sans-serif",
      background: "linear-gradient(120deg, #5f6071, #0b0b49)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      padding: "0 20px"
    }}>
      <div style={{
        maxWidth: "800px",
        textAlign: "center",
        marginBottom: "60px"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px", fontWeight: "700" }}>
          Welcome to MyApp
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "40px", lineHeight: "1.6" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptatibus impedit tenetur delectus alias cum sit reiciendis ut provident, vitae a libero enim neque, esse nihil perferendis culpa. Aliquam, ea?
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <button
            onClick={() => navigate("/register")}
            style={{
              padding: "15px 40px",
              borderRadius: "8px",
              border: "none",
              background: "#ff6b6bb9",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              transition: "0.3s",
              color: "#fff",
              fontSize: "16px"
            }}
            onMouseEnter={(e) => e.target.style.background = "#ff8787"}
            onMouseLeave={(e) => e.target.style.background = "#ff6b6b"}
          >
            Register
          </button>
          <button
            onClick={() => navigate("/login")}
            style={{
              padding: "15px 40px",
              borderRadius: "8px",
              border: "none",
              background: "#1dd1a184",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              transition: "0.3s",
              color: "#fff",
              fontSize: "16px"
            }}
            onMouseEnter={(e) => e.target.style.background = "#48dbfb"}
            onMouseLeave={(e) => e.target.style.background = "#1dd1a1"}
          >
            Login
          </button>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
        <div style={{
          background: "rgba(203, 197, 197, 0.1)",
          padding: "20px 30px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          width: "220px",
          textAlign: "center"
        }}>
          <h3 style={{ marginBottom: "10px" }}>porro fugiat ipsum
      </h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quas?</p>
        </div>
        <div style={{
          background: "rgba(255,255,255,0.1)",
          padding: "20px 30px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          width: "220px",
          textAlign: "center"
        }}>
          <h3 style={{ marginBottom: "10px" }}>Quis vitae  </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vitae porro fugiat ipsum cum..</p>
        </div>
        <div style={{
          background: "rgba(255,255,255,0.1)",
          padding: "20px 30px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          width: "220px",
          textAlign: "center"
        }}>
          <h3 style={{ marginBottom: "10px" }}>sapiente libero?
           </h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laudantium repellat harum iste. Dolorum officiis sapiente libero? </p>
        </div>
      </div>
    </main>
  );
}

export default Home;