import Borther from "../Borther/Borther";
import MySelf from "../MySlef/MySelf";
import Siter from "../Sister/Siter";

const Dad = ({asset}) => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <MySelf asset={asset}></MySelf>
                <Borther></Borther>
                <Siter></Siter>
            </section>
        </div>
    );
};

export default Dad;