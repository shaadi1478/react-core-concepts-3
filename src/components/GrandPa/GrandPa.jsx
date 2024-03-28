import { createContext } from "react";
import Anty from "../Anty/Anty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './GrandPa.css';

const AssetContext = createContext('gold')

const GrandPa = () => {
    const asset = 'daimond'
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <AssetContext.Provider value="gold">
                <section className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle></Uncle>
                    <Anty></Anty>
                </section>
            </AssetContext.Provider>
        </div>
    );
};

export default GrandPa;