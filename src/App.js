
import './App.css';

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    setCount(count + 1); 
  }
  const updateWord = () => {
    if (count === 0 || count > 1) {
    return `${count} likes` 
  } else {
    return `${count} like`
  }
  };


return (
  <div className='App'>
    <button id="likebutton" onClick={handleClick} >{updateWord()}</button>
  </div>
);

}

export default App;
