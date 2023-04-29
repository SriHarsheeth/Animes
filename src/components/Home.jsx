import{useEffect, useState} from 'react'
import AnimeList from './AnimeList';
const Home = () => {

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
           .then((data)=>{ setAnimes(data.data);setPending(false)
            
        })
        .catch((err)=>{setError(err.message);setPending(false)})
        },1000)
     },[])
    return (  <div className="home">
        {pending && <h1>Loading</h1>}
      {error &&<h1> {error}</h1>}
        {animes && <AnimeList animes={animes}/>}


        
    </div>);
}
 
export default Home;