import React from 'react';
import Quiz from './components/Quiz';
import { questions } from './data/questions';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz App</h1>
      </header>
      <main>
        <Quiz questions={questions} timeLimit={60} />
      </main>
    </div>
  );
}

export default App; 