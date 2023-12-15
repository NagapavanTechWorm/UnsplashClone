import { GlobalContext } from "./Context";

const SearchForm = ()=>{
    const {value,handleSubmit,setValue} = GlobalContext();

    return (
    <section>
        <h1 className="title">unSplash images</h1>
        <form onSubmit={handleSubmit} className="search-form" >
            <input className="form-input search-input" type="text" onChange={(e)=>setValue(e.target.value)} value={value} placeholder="Cars"/>
            <button type="submit" className="btn" >Submit</button>
        </form>
    </section>
    )
}

export default SearchForm;