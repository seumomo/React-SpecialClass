import PropTypes from 'prop-types';

const Button = ({ children }) => {
  return <button>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.element,
};

export default Button;
