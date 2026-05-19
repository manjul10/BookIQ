const FileInput = (props) => {
  return (
    <input
      type="file"
      {...props}
      className="text-sm px-4 py-2 border border-gray-300 rounded-md bg-gray-0 shadow-sm
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-indigo-600 file:text-indigo-50
          hover:file:bg-indigo-700
        "
    />
  );
};

export default FileInput;
