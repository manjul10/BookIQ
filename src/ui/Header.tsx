import Logout from "../features/authentication/Logout";

const Header = () => {
  return (
    <header
      className="flex items-center justify-end gap-6 border-b border-gray-100
  bg-gray-0 px-12 py-5"
    >
      <Logout />
    </header>
  );
};

export default Header;
