import { useState, createContext } from 'react';
import DataAxios from '../services/dataAxios';
import { useRouter } from 'next/router';

export const DataContext = createContext();

export const DataProvider = (props) => {

    const [newData, setNewData] = useState({});
    const [card, setCard] = useState(false);
    const navigate = useRouter();


    const createAudit = (eventHTML) => {
        eventHTML.preventDefault();
        DataAxios.search(newData).then((response) => {
            console.log(response)
            setNewData(response)
            setCard(true)
            // setData(data)

            // setNewData(response)
            // navigate.push('/audit')
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