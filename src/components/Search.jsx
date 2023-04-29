import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimeList from "./AnimeList";

const Search = () => {
    let{searchKey}=useParams()

    let[animes,setAnimes]=useState(null);
    let [pending,setPending]=useState(true);
    let[error,setError]=useState(null);
 
      
      useEffect(()=>{
         setTimeout(()=>{
            fetch("https://api.jikan.moe/v4/anime")
            .then((res)=>{
             if(res.ok===false)
             {
                throw error("internet issue or verify the search") ;
             }
             return res.json();
              
            })
            .then((data)=>{ setAnimes(data.data
                .filter((anime)=> {
                    return anime.title.toUpperCase().includes( searchKey.toUpperCase() )} ));
                setPending(false)
             
         })
         .catch((err)=>{setError(err.message);setPending(false)})
         },1000)
      },[searchKey])
    return (  <div>
        <h1>search</h1>
        {pending && <h1>Loading</h1>}
      {error &&<h1> {error}</h1>}
      {animes && <AnimeList animes={animes}/>}
    </div>);
}
 
export default Search;