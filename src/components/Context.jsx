import { useContext,useState,createContext,useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({children})=>{

    const[value, setValue] = useState("");
    const [searchTerm,setSearch] = useState("car");

    const getInitialDarkMode = () => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const storedDarkMode = localStorage.getItem('darkTheme');
     
        if (storedDarkMode === null) {
            return prefersDarkMode;
        }
     
        return storedDarkMode === 'true';
    };
    
    const [isDarkTheme, setDarkTheme] = useState(getInitialDarkMode());

    const handleDarkTheme = ()=>{
        const newDarkTheme = !isDarkTheme;
        setDarkTheme(newDarkTheme);
        const body = document.querySelector('body');
        body.classList.toggle('dark-theme',isDarkTheme);
    }

    useEffect(()=>{
        document.querySelector('body').classList.toggle('dark-theme',isDarkTheme);
    },[isDarkTheme])

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!value) return;
        setSearch(value);
        console.log(value);

    }


    return (
        <AppContext.Provider value={{handleDarkTheme,isDarkTheme,handleSubmit,value,setValue,searchTerm,setSearch}}>
            {children}
        </AppContext.Provider>
    )
}

export const GlobalContext = ()=> useContext(AppContext)