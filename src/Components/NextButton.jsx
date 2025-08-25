// src/Components/NextButton.jsx
import { useNavigate } from "react-router-dom";

export default function NextButton({ nextPath }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(nextPath)}
      style={{
        position: "fixed",   // stays in place
        bottom: "20px",      // distance from bottom
        right: "20px",       // distance from right
        padding: "12px 24px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "16px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
      }}
    >
      Next →
    </button>
  );
}
