import React,{useState,useContext,useEffect,useCallback} from 'react'

const url = 'https://newsapi.org/v2/everything?q=keyword&apiKey=1ce7ed6761e448c1acf3e57ea09c3c80'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);


    const fetchApi = useCallback (async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}`)
            const data = await response.json();
            setArticles(data.articles)
            setLoading(false);
            
        } catch (error) {
            setLoading(false);
            //console.log(error);
        }
    })
    useEffect(() =>{
        fetchApi();
    },[])
    return <AppContext.Provider value={{loading, setLoading,articles}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider}