const TextArea = (props) => {
  return (
    <textarea
      {...props}
      className="rounded-md border border-gray-300 bg-gray-0 px-4 py-2 shadow-sm
  focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent w-full
  h-32"
    />
  );
};

export default TextArea;
