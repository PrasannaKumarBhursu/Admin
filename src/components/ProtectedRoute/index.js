import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [Token] = useCookies("Token");
  console.log("Hello");
  if (Token.Token === undefined) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
