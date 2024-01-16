import Image from 'next/image';
import Link from "next/link"
import styles from '../home.module.scss'
import { MdStarRate } from 'react-icons/md';
export default function Series(props){
 const imagePath = "https://image.tmdb.org/t/p/original"   
    return(
      <section >
         <Link href={`/${props.Id}`}>
      <div className={styles.popularContainer}>
         
              <Image  src={imagePath + props.poster_path }
              width={250} height={400} alt= {props.title}
              className={styles.movieImage}
              />
          
            <h1 className={styles.movieTitle}> 
            {props.title}  | 
             < MdStarRate width={40} height={90} className ={styles.starRating}/>{props.rating}

            </h1>
            <h2 className={styles.ReleaseDate}>{props.release_date}</h2>
          </div>
          </Link>
      </section>

    )
}