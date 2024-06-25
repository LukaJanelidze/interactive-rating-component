import { useState } from 'react';
import './App.css';
import Rate from './assets/Rate/Rate';
import RatingResult from './assets/RatingResult/RatingResult';

const App: React.FC = () => {
  const [number, setNumber] = useState<number | undefined>(undefined);
  const [submit, setSubmit] = useState<boolean>(false);
  console.log(submit);
  return (
    <>
      {submit ? <RatingResult number={number} /> : <Rate number={number} setNumber={setNumber} setSubmit={setSubmit} />}
    </>
  );
};

export default App;
