import {  useQuery } from "react-query";
import axios from 'axios';
import { GlobalContext } from "./Context";

const url = `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_REACT_APP_API_KEY}`;

const Gallery = ()=>{
    const {searchTerm} = GlobalContext();
    console.log(import.meta.env.API_key);
    const response = useQuery({
        queryKey:['images',searchTerm],
        queryFn: async()=>{
            const result = await axios.get(`${url}&query=${searchTerm}`);
            return result.data;
        }
    })
    console.log(response.data);
    if(response.isLoading){
        return<section className="images-container">
            <h4>..Loading</h4>
        </section>
    }
    if(response.isError){
        return<section className="images-container">
            <h4>..Error</h4>
        </section>   
     }
    const results = response.data.results;
    if(results.length <1){
        return<section className="images-container">
            <h4>..No images Found</h4>
        </section>
    }
    return(
    <section className="image-container">
        {results.map((item)=>{
            const url = item?.urls?.regular;
            return <img src={url} key={item.id} alt={item.description}  className="img"/>
        })}
    </section>
    );
}

export default Gallery;


// B08ygBpkpVwW9ff8FGVMc0vAQPZxHTmkdVkENMR9bDI Api key
// XREqKbiLzfUCgFoK2ajHtuE3UpqwBRiOqmNVMvd_moI secreat key