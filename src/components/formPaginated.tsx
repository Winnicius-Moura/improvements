import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export interface Question {
  id: number;
  question: string;
  options: string[];
}

interface Props {
  questions: Question[];
}



const Questionnaire: React.FC<Props> = ({ questions }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 10;
  const [searchParams, setSearchParams] = useSearchParams();
  const totalQuestions = questions.length;
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);

  // Obter respostas salvas nos parâmetros de busca
  const savedAnswers = searchParams.get('answers') ? JSON.parse(searchParams.get('answers')!) : {};

  // Atualizar as respostas selecionadas
  const handleAnswerSelect = (questionId: number, selectedOption: string) => {
    const updatedAnswers = { ...savedAnswers, [questionId]: selectedOption };
    setSearchParams({ answers: JSON.stringify(updatedAnswers) });
  };

  useEffect(() => {
    // Atualizar o estado atual da página ao alterar os parâmetros de busca
    const currentPageParam = parseInt(searchParams.get('page') || '0');
    setCurrentPage(currentPageParam);
  }, [searchParams]);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
    setSearchParams({ page: (currentPage + 1).toString() });
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
    setSearchParams({ page: (currentPage - 1).toString() });
  };

  const currentPageQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  return (
    <div style={{ width: '600px', overflowY: 'auto' }}>
      {currentPageQuestions.map(question => (
        <div key={question.id} >
          <h3>{question.question}</h3>
          <ul>
            {question.options.map((option, index) => (
              <li key={index} style={{ listStyle: 'none' }}>
                <label>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={savedAnswers[question.id] === option}
                    onChange={() => handleAnswerSelect(question.id, option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button onClick={handlePrevPage} disabled={currentPage === 0}>
          Previous
        </button>
        <p>{currentPage + 1} of {totalPages}</p>
        <button onClick={handleNextPage} disabled={(currentPage + 1) * questionsPerPage >= totalQuestions}>
          Next
        </button>
      </div>
    </div>
  );
};



export default Questionnaire;
