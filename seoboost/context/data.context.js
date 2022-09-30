import { useState, createContext, useEffect } from 'react';
import DataAxios from '../services/dataAxios';

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [newData, setNewData] = useState({});
    const [card, setCard] = useState(false);

    const createAudit = (eventHTML) => {
        eventHTML.preventDefault();
        DataAxios
            .search(newData)
            .then((response) => {
                setNewData(response)
                setCard(true)
            });

    };

    const updateAudit = (eventHTML) => {
        const { name, value } = eventHTML.target;
        setNewData({ ...newData, [name]: value });
    };

    return (
        <DataContext.Provider
            value={{ card, newData, createAudit, updateAudit }}
        >
            {props.children}
        </DataContext.Provider>
    )

}