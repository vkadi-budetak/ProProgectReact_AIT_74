import { useState } from 'react';


import './App.css'
import Button from './components/Button/Button'

function App() {
// хук useState создает хранилище и отдаст функцию;
const [count, setCount] = useState(0);
// setCount(count+1)
// setCount((prev)=>prev+1)

const onMinus = ()=>setCount((prev)=>prev-1);

  return (
    <div className='app'>
      React Interoduction
      {/* Вызов компонента */}
      <Button name ="plus" onClick={()=>setCount((prev)=>prev+1)}/>
      <Button name ="minus" onClick={onMinus}/>
      <div>{count}</div>
    </div>
  )
}

export default App
