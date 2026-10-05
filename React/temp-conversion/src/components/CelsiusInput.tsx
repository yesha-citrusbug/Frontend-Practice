type CelsiusInputProps = {
    value: string;
    onChange: (value: string) => void;
  };
  
  function CelsiusInput({ value, onChange }: CelsiusInputProps) {
    return (
      <div>
        <label>Celsius: </label>
  
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    );
  }
  
  export default CelsiusInput;