import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { CgSpinner } from "react-icons/cg";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <CgSpinner />
        <p>Loading....</p>
      </div>
    );
  }
  if (isAuthenticated) return children;
};

export default ProtectedRoute;
