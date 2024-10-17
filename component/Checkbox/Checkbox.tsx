import React from "react";
import './Checkbox.css'
interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
  className,
}) => {
  return (
    <label className={`checkbox-container ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
          <div className="checkmark"></div>
          {label && <div className="checkbox_Label">{label}</div>}
    </label>
  );
};

export default Checkbox;
