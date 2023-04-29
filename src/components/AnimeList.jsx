import { Link } from "react-router-dom/cjs/react-router-dom";


const AnimeList = ({animes}) => {
  

    return ( <div className="animelist">
      {
        animes.map((anime)=>{
            return (
            
              <div className="anime">
                <Link to={`/animedetails${anime.mal_id}`}>
             <img src={anime.images.jpg.image_url} alt="image" />
             <h1>{anime.title}</h1>
             <h3>{anime.year}</h3>
             </Link>
           </div>
            
            )
           
        })
      }
    </div> );
}
 
export default AnimeList;