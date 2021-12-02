import { useEffect, useState } from 'react';
import Content from './Content';

//side effects



function App() {
  const [show, setShow] = useState(false);
  

  return (
    <div style={{ padding: 20 }}>
      <button onClick= {() => setShow(!show)}>toggle</button>
      {show && <Content />}
      
    </div>
  );
}

export default App;

//https://www.youtube.com/watch?v=hjIxfXKmkjk
