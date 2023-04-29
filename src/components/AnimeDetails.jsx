import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {useState,useEffect} from 'react'
const AnimeDetails = () => 
{
    let[anime,setAnime]=useState(null);
    let [pending,setPending]=useState(true);
    let[error,setError]=useState(null);
   let{id}= useParams()
    console.log(anime);
      useEffect(()=>{
         setTimeout(()=>{
            fetch("https://api.jikan.moe/v4/anime/"+id)
            .then((res)=>{
             if(res.ok===false)
             {
                throw error("internet issue or verify the search") ;
             }
             return res.json();
              
            })
            .then((data)=>{ setAnime(data.data);setPending(false)
             
         })
         .catch((err)=>{setError(err.message);setPending(false)})
         },1000)
      },[])

    return (<div>
        {pending && <h1>Loading</h1>}
        {error &&<h1> {error}</h1>}
        {anime &&(
        <div className="moviedetails">
      
        
         <img src={anime.images.jpg.large_image_url} alt="image" />
        
        <div className="desc">
        <h1>Title:{anime.title}</h1>
            <h2>Score:{anime.score}</h2>
        <h2>Episode:{anime.episodes}</h2>
        <h2>Duration:{anime.duration}</h2>
         <h2>Rank:{anime.rank}</h2>
        </div>
            <div className="trailer">
               <h1>TRAILER</h1>
            <iframe src={anime.trailer.embed_url} frameborder="6"></iframe>
            </div>
            </div>
           
        ) 
            }
    </div>
        
      );
}
 
export default AnimeDetails;