
import { createContext, useState } from 'react';
import Dad from '../Dad/Dad';

export const contextApi = createContext('context api')
export const moneyContext = createContext(1000)

const Grandpa = () => {
    const [money, setMoney] = useState(1000)
    const prop = 'Prop Dirlling'
    return (
        <div className='border'>
            <h1>Context API to avoid prop drilling</h1>
            <h3>Grandpa</h3>

            {/* created context API  */}
            <moneyContext.Provider value={[money, setMoney]}>

            <contextApi.Provider value='Context API'>

            <Dad prop={prop}></Dad>

            </contextApi.Provider>

            </moneyContext.Provider>
        </div>
    );
};

export default Grandpa;