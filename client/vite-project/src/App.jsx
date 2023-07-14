import { useState } from 'react';
import './App.css';
import Graph from './components/Graph';
import Form from './components/Form';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <div className="container mx-auto max-w-screen-xl text-center drop-shadow-lg text-gray">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Expense Tracker</h1>

        {/* grid columns */}
        <div className='grid place-items-center border'>
         {/* Chart */}
         <Graph></Graph>
         {/* Form */}    
          <Form></Form>
        </div>
        </div>
      </div>
  
    </>
  )
}

export default App;
