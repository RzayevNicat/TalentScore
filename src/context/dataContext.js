import { createContext, useContext, useState } from 'react';

const Context = createContext();

export const QuickProvider = ({ children }) => {
	const [ datas, setData ] = useState([]);
	const [ currentPage, setCurrentPage ] = useState(1);
	const data = {
		datas,
		setData,
		currentPage,
		setCurrentPage
	};
	return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useData = () => useContext(Context);
