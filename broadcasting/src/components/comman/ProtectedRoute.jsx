import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const user = localStorage.getItem("user");

  if (!user) return <Navigate to="/" />;

 if (role && user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;