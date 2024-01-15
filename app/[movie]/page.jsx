import styles from "../home.module.scss"
import Image from "next/image"
import Footer from "../footer/page"
export default async function MovieDetail({params}){
  
    console.log(params)
    const {movie} = params
    const imagePath = "https://image.tmdb.org/t/p/original" 
    const API_KEY =  '0af44b04ed2bababfbea6b61856bcc50'
 const data = await fetch( `https://api.themoviedb.org/3/movie/${movie}?api_key=${API_KEY}`)
    const res = await data.json() 
    return(
    
<div className={styles.movieDetail}>

<h2 className={styles.Title}> {res.title}</h2>
         <h2 className={styles.ReleaseDate}>Release Date:{res.release_date}</h2>
         <h2 className={styles.runtime}>Runtime:{res.runtime} minutes</h2>
         <h2 className={styles.textStatus}>{res.status}</h2>

   
       <div  className={styles.imageContainer}>
       <Image 
         className={styles.image}
         src={imagePath + res.backdrop_path }
         width={1200}
         height={800}
         // layout ="fill"
         // fill
    //   fill ={true}
proirity="true"
      quality={80}
          />
       </div>
        <p className={styles.textOverview}>
           <span className={styles.textOverviewGreen}> Overview</span>
            :{res.overview}</p>  
    
 </div>
 
   // movie-app-pi-lilac-46.vercel.app       
   // https://react-meme-generator-hazel.vercel.app/
   // https://tenzies-game-zeta-sepia.vercel.app/
    )
}