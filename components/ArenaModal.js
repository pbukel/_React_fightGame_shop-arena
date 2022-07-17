import React from "react";
import { useRef, useEffect } from "react";
import { useContext } from "react";
import mainContext from "../context/mainContext";
import Inventor from "../components/Inventor";

function ArenaModal({ setModal }) {
  const { getInventor } = useContext(mainContext);

  // CLICK OUTSIDE MODAL -> CLOSE MODAL
  const wrapperRef = useRef(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setModal(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  // CLICK OUTSIDE MODAL -> CLOSE MODAL

  return (
    <div className="modal">
      <div ref={wrapperRef} className="insideModal">
        {getInventor.map((x, i) => (
          <Inventor item={x} index={i} parameter={"modal"} />
        ))}
      </div>
    </div>
  );
}

export default ArenaModal;
