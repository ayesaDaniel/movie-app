import styles from '../home.module.scss'
// import Image from 'next/image'
// import Link from "next/link"
import Trending from './trending'
export default async function About(){
    const API_KEY =  '0af44b04ed2bababfbea6b61856bcc50'
    const data = await fetch( `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
   const res = await data.json()
   const imagePath = "https://image.tmdb.org/t/p/original"  
   
   console.log(res)

 
   

   const trendingSeries = res.results?.map(series =>(
    <div className={styles.popular}>
    <Trending 
    key ={series.id}
    Id = {series.id} 
    title = {series.title}
    poster_path = {series.poster_path}
    release_date = {series.release_date}
    rating={series.vote_average}
    />
    </div>
    
    ))
    return(
        <section className={styles.popular}>
        {trendingSeries}
          </section>
    )
}

