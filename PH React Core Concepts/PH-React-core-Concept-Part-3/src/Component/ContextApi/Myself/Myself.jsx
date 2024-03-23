import { useContext } from "react";
import { contextApi } from "../Grandpa/Grandpa";

const Myself = () => {
    const context = useContext(contextApi)
    return (
        <div className="border">
            <h3>Myself</h3>
            {context}
        </div>
    );
};

export default Myself;