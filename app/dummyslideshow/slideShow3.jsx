import Image from "next/image"
import styles from "../home.module.scss"
export default function SlideShow3(){
  
    return(
     <>
       <Image src="/wallpapersden.com_hunger-games-prequel-movie_3840x2160.jpg"  
       className={styles.slideImage}
       width={1500}
    
        height={90}
        layout = "responsive"
        alt="The hunger games"
        priority/>
        <h1  className={styles.movieName}> The hunger games</h1>
     </>
    )
}