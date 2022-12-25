import { Link, useParams } from 'react-router-dom';

const Survey = () => {
  const { questionNumber } = useParams();

  const questionInt = parseInt(questionNumber);
  const previous = questionInt === 1 ? 1 : questionInt - 1;
  const next = questionInt + 1;

  return (
    <main>
      <header>Survey</header>
      <section>
        <p>Question {questionNumber}</p>
        <Link to={`/survey/${previous}`}>Previous</Link>
        {questionInt === 10 ? (
          <Link to="/results">Results</Link>
        ) : (
          <Link to={`/survey/${next}`}>Next</Link>
        )}
      </section>
    </main>
  );
};

export default Survey;
