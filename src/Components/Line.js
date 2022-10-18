import '../App.css';

const Line = ({ guess, isFinal, solution, solutionLength }) => {

    const tiles = []
  
    for (let i = 0; i < solutionLength; i++) {
      const char = guess[i]
      let className = 'tile';
  
      if(isFinal) {
        if(char.toLowerCase() === solution[i].toLowerCase()) {
          className += ' correct';
        } else if (solution.includes(char)) {
          className += ' close';
        } else {
          className += ' incorrect';
        }
      }
  
      tiles.push(<div className={className} key={i}>{char}</div>)
    }
  
    return (
      <div className='line'>
        {tiles}
      </div>
    )
}

export default Line;