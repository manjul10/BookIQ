import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, opens: opensWindowName }) => {
  const { open } = useContext(ModalContext);
  //We need to clone the child element to injet an onClick handler
  return cloneElement(children, { onClick: () => open(opensWindowName) });
};

const Window = ({ children, name }) => {
  const { openName, close } = useContext(ModalContext);
  const ref = useRef();
  // custom hook for detecting clicks outside the modal
  // this is a common pattern, let's create it latter in src/hooks/useOutsideClick.ts

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClick, true); // Use mousedown for better UX

    return () => document.removeEventListener("mousedown", handleClick, true);
  }, [close]);

  if (name !== openName) return null;
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900
  bg-opacity-50 backdrop-blur-sm transition-all duration-300"
    >
      <div
        ref={ref}
        className="relative rounded-lg bg-gray-50 shadow-lg p-8 w-[80vw]
  max-w-lg transition-all duration-300"
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 bg-none border-none
  p-2 rounded-md hover:bg-gray-100 transition-all"
        >
          <HiXMark className="h-6 w-6 text-gray-500" />
        </button>
        {cloneElement(children, { onCloseModal: close })}
      </div>
    </div>,
    document.body,
  );
};
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
