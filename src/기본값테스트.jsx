import PropTypes from 'prop-types';

const Button = ({ label = '기본값' }) => {
  return <button>{label}</button>;
};

Button.propTypes = {
  label: PropTypes.string,
};

export default Button;
