import { Link } from "react-router-dom";

const MyWork = () => {
    return (
        <div className="mywork">
            <h1>PROJECTS</h1>
            <div className="work">
                <a href="https://github.com/Damu-01/Swiggy-Clone" target="_blank" rel="noreferrer">
                    <div className="swiggy_work">
                        <img src="https://wallpapercave.com/wp/wp6532227.png" alt="swiggy icon" />
                        <h3>Swiggy Clone</h3>
                        <p>HTML, CSS, JS, React</p>
                    </div>
                </a>

               <a href="https://github.com/Damu-01/Tenzies" target="_blank" rel="noreferrer"> 
                <div className="tenzies_work">
                    <img src="https://t3.ftcdn.net/jpg/04/61/21/46/360_F_461214664_3YPpasoxfJZ6JARXgfBH4fQNLp2Fz5E5.jpg" alt="tenzies icon" /> 
                    <h3>Tenzie Game</h3>
                    <p>HTML, CSS, JS, React</p>
                </div>
                </a>

                <a href="https://damu-01.github.io/Create-Meme/" target="_blank" rel="noreferrer">
                <div className="meme_work">
                    <img src="https://wallpapercave.com/wp/f8SAqOq.jpg" alt="meme icon" />
                    <h3>Meme Genarator </h3>
                    <p>HTML, CSS, JS, React</p>
                </div>
                </a>
            </div>
            <div className="view-button">
                <Link to="/projects" ><p>View More</p>
                <i className="fa-solid fa-arrow-up-right-from-square arrow-button"></i>
                </Link>
                </div>
        </div>
    )
}

export default MyWork;