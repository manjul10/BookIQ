
const FormRow = ({ label, error, children }) => {
      // Determine if children is a single element or an array to safely get ID
    const childId = children?.props?.id || (Array.isArray(children) &&
  children[0]?.props?.id);
  return (
    <div
      className="grid grid-cols-[1fr_2fr] items-center gap-6 py-3 border-b
  border-gray-100 last:border-b-0"
    >
      {label && (
        <label
          htmlFor={childId}
          className="font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="flex flex-col gap-1">{children}</div>
      {error && <span className="text-sm text-red-700">{error}</span>}
    </div>
  );
};

export default FormRow;
