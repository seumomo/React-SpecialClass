import PropTypes from 'prop-types';

const 조건부랜더링 = () => {
  const 사용자수 = 1;

  if (사용자수) {
    return <p>사용자가 있음</p>;
  }

  return <p>사용자가 없음</p>;
};

조건부랜더링.propTypes = {};

export default 조건부랜더링;
