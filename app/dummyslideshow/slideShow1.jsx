import Image from "next/image"
import styles from "../home.module.scss"


export default function SlideShow1(){
  
    return(
     <>
       <Image
       className={styles.slideImage}
       src="/wallpapersden.com_daisy-ridley-the-marsh-king-s-daughter_3840x2160.jpg"  
        width={1500}
       
        height={90}
        layout = "responsive"
        priority
        alt="The kings daughter"/>
        <h1 className={styles.movieName}> The king's Daughter</h1>
     </>
    )
}