import React, { createContext, useState, useEffect, useContext } from 'react';
import { ApiContext } from '../context/ApiContext';

const ImageMCF = ({ id }) => {
    const { postData } = useContext(ApiContext);
    const [data, setData] = useState(null);
    const [secondCardData, setSecondCardData] = useState(null);
    const [ganador, setGanador] = useState(false);

    useEffect(() => {
        console.log({ id })
        const fetchData = async () => {
            const response = await postData(id);
            setData(response)
        };

        fetchData();
    }, [id, postData]);

    const pedir = async () => {
        const response = await postData(id);
        setSecondCardData(response.cards);
        if(response.cards[0].value === data.value){
            console.log('ganador')
        }
        if(data.cards[0].value === response.cards[0].value){
            console.log('ganador')
            console.log(data);
            console.log(secondCardData)
        }
        setGanador(response.cards[0].value === data.value);
    };

    return (
        <div>
            {data && (
                <div>
                    {data.cards.map((card, index) => (
                        <div key={index}>
                            <img src={card.image} alt={card.code} />
                        </div>
                    ))}
                    <button onClick={pedir}>pedir</button>
                    {secondCardData && (
                        <div>
                            <img src={secondCardData[0].image} alt={secondCardData[0].code} />
                        </div>
                    )}
                </div>
            )}
            {ganador && <p>Ganador!</p>}
        </div>
    )
}

export default ImageMCF
