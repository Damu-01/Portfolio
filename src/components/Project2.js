

const Project2 = () => {
    return (
        <>
            <div className="project2">
                <img
                    src="https://t3.ftcdn.net/jpg/04/61/21/46/360_F_461214664_3YPpasoxfJZ6JARXgfBH4fQNLp2Fz5E5.jpg"
                    alt="swiggy homepage"
                    width={500}
                    height={300}
                />
                <div className="project_description">
                    <h1>TENZIE GAME </h1>
                    <p>
                        Players are stored in the players state, each with a name and an array to store their scores for 10 rounds.
                        Clicking the "Roll Dice" button generates random values for 10 dice and updates the displayed values.
                        The updateScores function updates the scores for the current player based on the rolled dice values.
                        switchPlayers function switches the active player after rolling the dice.Dice values are displayed in colored div elements within the .dice-container.
                        Player names and their respective scores for each round are displayed.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Project2;