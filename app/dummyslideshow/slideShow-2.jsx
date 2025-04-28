import Image from "next/image"
import styles from "../home.module.scss"
export default function SlideShow2(){
  
    return(
     <>
       <Image src="/wallpapersden.com_dc-aquaman-2_1336x768.jpg" 
       className={styles.slideImage} 
        width={1500}
        
        height={90}
        layout = "responsive"
        priority
        alt="Aquaman 2"/>
        <h1 className={styles.movieName}> Aquaman 2</h1>
     </>
    )
}