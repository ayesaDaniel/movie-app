import Image from 'next/image';
import Link from "next/link"
import styles from './home.module.scss'
import { MdStarRate } from 'react-icons/md';
export default function Movie(props){
 const imagePath = "https://image.tmdb.org/t/p/original"   
    return(
      <section >
        <Link href={`/${props.Id}`}>
          <div className={styles.popularContainer}>
                <Image  src={imagePath + props.poster_path} 
                width={287} height={320} alt= {props.title}
                className={styles.movieImage}
          
                />
           
           <div className={styles.popularInfo}>
          <h1 className={styles.movieTitle}> {props.title}
            | 
             < MdStarRate width={40} height={90} className ={styles.starRating}/>{props.rating}
            </h1>
            <h2 className={styles.ReleaseDate}>Release Date:{props.release_date}</h2>
          </div>
        </div>
        </Link>
      </section>

    )
}