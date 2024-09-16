import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className=" backdrop:bg-stone-900/90 p-4 rounded-xl shadow-md"
    >
      {children}
      <form method="dialog" className="text-center mb-4">
        <button className="px-6 py-2 rounded-md bg-stone-950 text-stone-50 hover:bg-stone-800">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
