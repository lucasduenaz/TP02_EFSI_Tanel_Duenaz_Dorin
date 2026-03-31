function FormInput({ type = "text", placeholder = "", value, onChange, className = "", ...rest }) {
  if (type === "textarea") {
    return (
      <textarea
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    );
  }

  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}

export default FormInput;
