import React, { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('항상 돌아가는 것');
  useEffect(() => {
    console.log('한번만 돌아감');
  }, []);
  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('I run when keyword Changes.', keyword);
    }
  }, [keyword]);
  useEffect(() => {
    console.log('I run when counter Changes.', counter);
  }, [counter]);
  useEffect(() => {
    console.log('I run when counter,keyword Changes.', counter, keyword);
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
