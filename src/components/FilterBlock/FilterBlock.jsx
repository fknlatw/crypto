import { CoinsContext } from "../../context/coinsContext";
import { useFilterCoins } from "../../helpers/hooks/useFilterCoins";
import "./styles.css";
import React, { useContext } from "react";

const FilterBlock = ({setCoins}) => {
  const coinsContext = useContext(CoinsContext);
  const { coins } = coinsContext; 

  const {setValue, value} = useFilterCoins(setCoins, coins);

  return (
      <div className="filter-block">
        <input 
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text" 
          className="input"
          placeholder="bitcoin"
        />
      </div>
    );
}

export default React.memo(FilterBlock);