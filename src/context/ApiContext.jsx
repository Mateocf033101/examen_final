import React, { createContext, useState } from 'react';
import axios from 'axios'

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [apiData, setApiData] = useState(null);
    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
            );
            setApiData(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const postData = async (id) => {
        try {
          const response = await axios.post(
            `https://deckofcardsapi.com/api/deck/${id}/draw/?count=2`,
          );
          return response.data
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <ApiContext.Provider value={{ apiData, fetchData, postData }}>
            {children}
        </ApiContext.Provider>
    )
}


export {ApiContext, ApiProvider};
