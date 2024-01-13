import styles from '../home.module.scss'
// import Image from 'next/image'
// import Link from "next/link"
import Series from './series'
export default async function SeriesPage(){
    const API_KEY =  '0af44b04ed2bababfbea6b61856bcc50'
    const data = await fetch( `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`)
   const res = await data.json()
   const imagePath = "https://image.tmdb.org/t/p/original"  
   
   console.log(res)

 //  const data = await fetch( `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`)
   


   const popularSeries = res.results?.map(series =>(
    <div className={styles.popular}>
    <Series 
 key ={series.id}
 Id = {series.id} 
 title = {series.name}
 poster_path = {series.poster_path}
 release_date = {series.first_air_date}
 rating={series.vote_average}
    />
    </div>
    
    ))
    return(
        <section className={styles.popular}>
        {popularSeries}
          </section>
    )
}


// key ={series.id}
// Id = {series.id} 
// title = {series.name}
// poster_path = {series.poster_path}
// release_date = {series.first_air}
// rating={series.vote_average}
