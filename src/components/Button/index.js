import { Link } from 'react-router-dom';

function Button({ children, url, disabled, onClick }) {
  let Component = Link;
  let classNamesDisabled = '';

  if (disabled) {
    Component = 'div';
    classNamesDisabled = 'cursor-not-allowed bg-gray-400';
  }

  return (
    <Component to={url}>
      <button
        onClick={onClick}
        className={`px-6 py-2 text-white text-base m-2 rounded-2xl ${!disabled && 'bg-orange-500 hover:bg-orange-600'} ${classNamesDisabled}`}
      >
        {children}
      </button>
    </Component>
  );
}

export default Button;
