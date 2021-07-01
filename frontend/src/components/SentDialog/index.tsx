// import Volta from "@vonagevolta/volta2/dist/js/volta";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useRef } from "react";

interface SentDialogProps {
  visible: boolean;
  setVisible: (Dispatch<SetStateAction<boolean>>);
}

function SentDialog ({ visible, setVisible }: SentDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  
  function toggleDialog () {
    setVisible((prev) => !prev);
  }

  useEffect(
    () => {
      // @ts-ignore
      const dialog = window.Volta.modal.create(dialogRef.current);
      if (visible) dialog.open()
      else dialog.dismiss();
    },
    [visible]
  )

  return (
    <div ref={dialogRef} className="Vlt-modal">
      <div className="Vlt-modal__panel">
        <div className="Vlt-modal__header">
          <h4>Sent!</h4>
        </div>
        <div className="Vlt-modal__content">
          Your message template is on the way. You should receive it soon
        </div>
        <div className="Vlt-modal__footer">
          <button
            className="Vlt-btn Vlt-btn--app Vlt-btn--secondary"
            onClick={toggleDialog}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}

export default SentDialog;
