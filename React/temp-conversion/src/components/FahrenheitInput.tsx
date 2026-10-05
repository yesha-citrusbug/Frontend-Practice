type FahrenheitInputProps = {
    value: string;
    onChange: (value: string) => void;
  };
  
  function FahrenheitInput({
    value,
    onChange,
  }: FahrenheitInputProps) {
    return (
      <div>
        <label>Fahrenheit: </label>
  
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    );
  }
  
  export default FahrenheitInput;