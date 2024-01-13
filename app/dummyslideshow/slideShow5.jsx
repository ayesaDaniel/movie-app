import Image from "next/image"
import styles from "../home.module.scss"
export default function SlideShow5(){
  
    return(
     <>
       <Image src="/wallpapersden.com_the-marvels-2023-movie-poster_3840x3176.jpg"  
        className={styles.slideImage}
        width={1500}
        height={760}
        alt="The Marvels"    
        layout = "responsive"
        priority/>
        <h1 className={styles.movieName}> The Marvels</h1>
  
     </>
    )
}