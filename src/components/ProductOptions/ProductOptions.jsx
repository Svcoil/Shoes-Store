import { useMemo, useState } from 'react';

function ProductOptions({ options, radius = '4px', shape = 'square', type = 'text' }) {
  // Eu inicio com a primeira opção selecionada para já mostrar um estado ativo.
  const [selected, setSelected] = useState(options?.[0]);

  // Esse estilo dinâmico me permite reutilizar o mesmo componente para cor e tamanho.
  const itemStyle = useMemo(() => {
    if (shape === 'circle') {
      return { width: 31, height: 31, borderRadius: '50%' };
    }

    return { width: 46, height: 46, borderRadius: radius };
  }, [shape, radius]);

  return (
    <div className="product-options">
      {options.map((option) => {
        const isSelected = selected === option;
        return (
          <button
            key={option}
            type="button"
            style={itemStyle}
            className={`product-option-item ${isSelected ? 'selected' : ''}`}
            onClick={() => setSelected(option)}
          >
            {type === 'color' ? (
              <span className="color-dot" style={{ backgroundColor: option }} />
            ) : (
              option
            )}
          </button>
        );
      })}
    </div>
  );
}

export default ProductOptions;
