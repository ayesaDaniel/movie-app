import Image from "next/image"
import styles from "../home.module.scss"
export default function SlideShow4(){
  
    return(
     <>
       <Image src="/wallpapersden.com_the-creator-2023-movie-poster_1336x768.jpg"  
       className={styles.slideImage}
       width={1500}
        height={90}
       
        layout = "responsive"
        alt="The Creator"
        priority/>
        <h1  className={styles.movieName}> The Creator</h1>
     </>
    )
}