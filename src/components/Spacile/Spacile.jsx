import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const Spacile = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Special</h2>
            <p>Has: {asset}</p>
            <p>has: {gift}</p>
        </div>
    );
};

export default Spacile;