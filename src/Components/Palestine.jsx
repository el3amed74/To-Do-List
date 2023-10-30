import "./Palestine.css";
import PalestineFlage from "../Assets/palestineFlag.png";
const Palestine = () => {
    return(
        <div className= "Palestinecontainer" >
            <img src={PalestineFlage} alt="PalestineFlage"  />
            <h3>Free Palestine</h3>
            <img src={PalestineFlage} alt="PalestineFlage"  />
        </div>
    )
}
export default Palestine;