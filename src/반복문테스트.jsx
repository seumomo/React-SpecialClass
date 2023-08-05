import PropTypes from 'prop-types';

const 반복문테스트 = () => {
  const 데이터목록 = [1, 2, 3];
  const 필터한목록 = 데이터목록.filter(요소 => {
    const 홀수이다 = 요소 % 2 === 1;

    return 홀수이다;
  });

  return (
    <ul>
      {필터한목록.map((데이터, 인덱스) => {
        const key = `${데이터}_${인덱스}`;
        console.log(key);

        return <li key={key}>{데이터}</li>;
      })}
    </ul>
  );
};

반복문테스트.propTypes = {};

export default 반복문테스트;
