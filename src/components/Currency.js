import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const handleCurrency = (e) => {
        console.log(e.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Currency</span>
            <select className="custom-select" id="inputGroupSelect02" onChange={handleCurrency}>
                <option value="£" name="pound" defaultValue>£ Pound</option>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="hr">₹ Rupee</option>
            </select>
        </div>
    );
}
 
export default Currency;