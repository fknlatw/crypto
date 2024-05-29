import "./styles.css";
import { WithRuBalance } from "../../helpers/hoc/WithRuBalance";

const Card = ({ balance, setBalance, ruBalance }) => {
  console.log(ruBalance);
    return (
      <div className="card">
        <div className="card-block">
          <p>CRYPTO-FINANCE</p>

          <button 
            onClick={setBalance}
            onMouseEnter={()=>console.log("---enter")}
          >ADD MONEY</button>
        </div>

        <div className="card-block">
          <p>FLATW</p>

          <p>{balance} $</p>
        </div>
      </div>
    );
}

export default WithRuBalance(Card);