import { useRouteError, Link } from "react-router-dom";

function ErrorElement() {
  const error = useRouteError();

  // Determine if the error is a 404 or another type
  const isNotFound = error.status === 404;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        color: "#343a40",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem", color: "#dc3545" }}>
        {isNotFound ? "404" : "Oops!"}
      </h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
        {isNotFound
          ? "The page you're looking for doesn't exist."
          : "Something went wrong!"}
      </p>
      <Link
        to="/"
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          color: "#fff",
          backgroundColor: "#007bff",
          textDecoration: "none",
          borderRadius: "5px",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Go back to Home
      </Link>
    </div>
  );
}

export default ErrorElement;
