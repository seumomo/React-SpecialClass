import PropTypes from 'prop-types';

const 반복문테스트 = () => {
  const 데이터목록 = [1, 2, 3];

  const LI들 = 데이터목록
    .filter(요소 => {
      const 일보다큰값 = 요소 % 2 === 1;

      return 일보다큰값;
    })
    .map(데이터 => {
      return <li>{데이터}</li>;
    });

  return <ul>{LI들}</ul>;
};

반복문테스트.propTypes = {};

export default 반복문테스트;
