import { useState, useEffect } from 'react';
import Line from '../Components/Line';
import '../App.css';
import Header from '../Components/Header';
import Summary from '../Components/Summary';

const Home = () => {
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [solution, setSolution] = useState('');
  const [solutionLength, setSolutionLength] = useState('');
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [solutionFounded, setSolutionFounded] = useState(false)

  useEffect(() => {
    if(solution === '') {
        fetch('https://api.api-ninjas.com/v1/randomword').then(res => res.json())
        .then(data => {
            setSolution(data.word)
            setSolutionLength(data.word.length)
        })
    }
  }, [solution])

  useEffect(() => {
    const handleType = (event) => {
        if(isGameFinished) return;

        if(event.key === 'Enter') {
            if(currentGuess.length !== solutionLength) return;

            const newGuess = [...guesses]
            newGuess[guesses.findIndex(val => val == null)] = currentGuess

            setGuesses(newGuess)
            setCurrentGuess('')
        }
        
        if(currentGuess.toLowerCase() === solution.toLowerCase()) {
            setIsGameFinished(true)
            setSolutionFounded(true)
        }

        if(currentGuess.length >= solutionLength) return

        const isLetter = event.key.match(/^[a-z]{1}$/) != null
        
        if(isLetter) {
            setCurrentGuess(currentGuess => currentGuess + event.key)
        }
    }

    window.addEventListener('keydown', handleType);

    return () => window.removeEventListener('keydown', handleType)
  }, [currentGuess, guesses, isGameFinished, solution, solutionLength])

  const restartGame = () => {
    setGuesses(Array(6).fill(null))
    setCurrentGuess('')
    setIsGameFinished(false)
    setSolutionFounded(false)
    setSolution('')
  }

  return (
    <div>
        <Header restartGame={restartGame}/>
        <div className="board">
            {
                guesses.map((guess, i) => {
                const isCurrentGuess = i === guesses.findIndex(val => val == null)
                return (
                    <Line key={i} solutionLength = {solutionLength}
                    guess={isCurrentGuess ? currentGuess : guess ?? ''} 
                    solution={solution} isFinal={!isCurrentGuess && guess != null}/>
                )
                })
            }
            {isGameFinished && <h1>{solutionFounded ? 'Correct Answer !!' : 'Wrong Answer !!'}</h1>}
        </div>
        <Summary/>
    </div>
    
  );
}

export default Home;