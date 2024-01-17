import * as React from 'react';
import styles from './home.module.scss'
import Movie from "./movie"

export default async function Home() {
 const API_KEY =  '0af44b04ed2bababfbea6b61856bcc50'
  const data = await fetch( `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
 const res = await data.json()
 console.log(res)


 
 const popularMovie = res.results?.map((movie: {
   vote_average: any; id: any; title: any; poster_path: any; release_date: any; 
}) =>(
<div className={styles.popular}>
<Movie 
key ={movie.id}
Id = {movie.id} 
title = {movie.title}
poster_path = {movie.poster_path}
release_date = {movie.release_date}
rating = {movie.vote_average}
/>
</div>

))

  return (
    <main className={styles.popular} >
  {popularMovie}   
  
    </main>
  )
}
