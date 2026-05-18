import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";

const Logout = () => {
  const { logout, isLoading } = useLogout();
  return (
    <button
      disabled={isLoading}
      onClick={logout}
      className="rounded-md p-2
  hover:bg-gray-100"
    >
      {!isLoading ? (
        <HiArrowRightOnRectangle className="h-6 w-6 text-indigo-600" />
      ) : (
        "...."
      )}
    </button>
  );
};

export default Logout;
