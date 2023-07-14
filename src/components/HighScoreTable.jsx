import PlayerScore from "./PlayerScore";
import allCountryScores from "../scores";

function HighScoreTable() {
    console.log(allCountryScores);
    
    return (
        <div>
            <PlayerScore />
        </div>
    )
}

export default HighScoreTable;