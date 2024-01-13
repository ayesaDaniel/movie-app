import Image from 'next/image';
import Link from "next/link"
import styles from '../home.module.scss'
export default function Series(props){
 const imagePath = "https://image.tmdb.org/t/p/original"   
    return(
      <section >
      <div className={styles.popularContainer}>
          <Link href={`/${props.Id}`}>
              <Image  src={imagePath + props.poster_path }
              width={250} height={400} alt= {props.title}
              className={styles.movieImage}  
              />
          </Link>
            <h1 className={styles.movieTitle}> {props.title}</h1>
            <h2 className={styles.ReleaseDate}>{props.release_date}</h2>
            <h2 className={styles.ReleaseDate}>Rating:{props.rating} </h2>
          </div>
      </section>

    )
}