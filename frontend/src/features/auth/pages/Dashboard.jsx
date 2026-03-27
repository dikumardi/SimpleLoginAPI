import { useAuth } from "../hooks/useAuth";


function Dashboard() {
  const {loading,handleLogout} = useAuth()

  handleLogout()
  if (loading) {
    return(<main>
      <h1>Loading...</h1>
      </main>)
  }
 

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "220px",
        background: "#1f2937",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
        <div>
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>My Dashboard</h2>
          <p style={{ padding: "10px", borderRadius: "5px", cursor: "pointer", background: "#374151" }}>Profile</p>
          <p style={{ padding: "10px", borderRadius: "5px", cursor: "pointer", marginTop: "10px" }}>Settings</p>
          <p style={{ padding: "10px", borderRadius: "5px", cursor: "pointer", marginTop: "10px" }}>Analytics</p>
        </div>
        <button 
        //   onClick={logout}
          style={{
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            background: "#ef4444",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, background: "#f3f4f6", padding: "40px" }}>
        {/* Welcome Card */}
        <div style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div>
            <h2 style={{ marginBottom: "10px", color: "#111827" }}>Welcome, user</h2>
            <p style={{ color: "#6b7280" }}>Here’s a quick look at your profile</p>
          </div>
        </div>

        {/* Profile + Stats Section */}
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {/* Profile Card */}
          <div style={{
            flex: "1 1 300px",
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
          }}>
            <h3 style={{ marginBottom: "15px", color: "#111827" }}>Profile</h3>
            <p><b>Username:</b> user</p>
            <p><b>Email:</b> email || "Not set"</p>
           

            <input
              placeholder="Update Email"
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "10px",
                margin: "10px 0",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #ccc"
              }}
            />

            <input
              placeholder="Update Bio"
            //   value={bio}
            //   onChange={(e) => setBio(e.target.value)}
              style={{
                padding: "10px",
                marginBottom: "10px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #ccc"
              }}
            />

            <button
            //   onClick={saveProfile}
              style={{
                padding: "12px",
                width: "100%",
                borderRadius: "8px",
                border: "none",
                background: "#3b82f6",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Save Profile
            </button>
          </div>

          {/* Stats Card */}
          <div style={{
            flex: "1 1 300px",
            background: "white",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
          }}>
            <h3 style={{ marginBottom: "15px", color: "#111827" }}>mollitia officia</h3>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
              <div>
                <p style={{ fontSize: "24px", fontWeight: "bold", color: "#3b82f6" }}>5</p>
                <p style={{ color: "#6b7280" }}>ullam maxime</p>
              </div>
              <div>
                <p style={{ fontSize: "24px", fontWeight: "bold", color: "#10b981" }}>12</p>
                <p style={{ color: "#6b7280" }}>Accusantium</p>
              </div>
              <div>
                <p style={{ fontSize: "24px", fontWeight: "bold", color: "#f59e0b" }}>3</p>
                <p style={{ color: "#6b7280" }}>blanditiis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;