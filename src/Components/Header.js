const Header = (props) => {
    return (
        <div className="header">
            <h2>Guess The Word!</h2>
            <h3 className="reset" onClick={() => props.restartGame()}>Restart Game</h3>
        </div>
    )
}

export default Header;