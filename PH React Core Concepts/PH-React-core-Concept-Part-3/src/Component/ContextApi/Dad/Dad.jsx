import Moom from "../Moom/Moom";


const Dad = ({prop}) => {
    return (
        <div className="border">
            <h3>Dad</h3>
            <Moom prop={prop}></Moom>
        </div>
    );
};

export default Dad;