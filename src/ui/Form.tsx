const Form = ({ children, onSubmit, type = "regular" }) => {
  const baseStyle = "text-sm overflow-hidden";
  const regularStyles =
    "bg-gray-0 border border-gray-100 rounded-md p-6 shadow-sm";
  const modalStyles = "w-full max-w-lg"; // In a modal, let the content define the width slightly more

  return (
    <form
      onSubmit={onSubmit}
      className={`${baseStyle} ${type === "regular" ? regularStyles : modalStyles} `}
    >
      {children}
    </form>
  );
};

export default Form;
