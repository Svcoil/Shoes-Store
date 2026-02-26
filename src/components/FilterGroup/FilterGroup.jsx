// Eu uso esse componente para renderizar qualquer grupo de filtro (checkbox ou radio).
function FilterGroup({ title, inputType, options, name, selectedValues = [], onChange }) {
  return (
    <div className="filter-group">
      <h4 className="filter-group-title">{title}</h4>
      {options.map((option, index) => {
        const value = option.value ?? option.text;
        const inputId = `${name}-${index}`;
        const isChecked = selectedValues.includes(value);

        return (
          <label key={inputId} htmlFor={inputId} className="filter-option">
            <input
              id={inputId}
              type={inputType}
              name={name}
              value={value}
              checked={isChecked}
              onChange={() => onChange(value)}
            />
            <span>{option.text}</span>
          </label>
        );
      })}
    </div>
  );
}

export default FilterGroup;
