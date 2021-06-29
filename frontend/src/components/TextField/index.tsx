import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface TextFieldProps {
  label?: string;
  value: string;
  setValue: (Dispatch<SetStateAction<string>>) | ((value: string) => void);
  hint?: string;
  InputProps?: Record<string, any>
}

function TextField ({ InputProps, hint, label, value, setValue }: TextFieldProps) {
  function handleInputChange (e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div className="Vlt-form__element">
      {
        label && (
          <label className="Vlt-label">
            {label}
          </label>
        )
      }
      <div className="Vlt-input">
        <input
          {...InputProps}
          value={value}
          onChange={handleInputChange}
        />
      </div>
      { hint && <small className="Vlt-form__element__hint">{hint}</small>}
    </div>
  )
}

export default TextField;
