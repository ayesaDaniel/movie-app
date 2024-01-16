import styles from "../home.module.scss"
import Link from 'next/link'

export default function Nav() {
    return ( 
        <>
          <Nav className={styles.nav}>
       <h2  className={styles.logoText}>
         <span className={styles.logo}>SS</span> 
         SaintStream</h2>
 
     <ul className={styles.navContainer} >
     <Link href="/">
         <li className={styles.item}>Home</li> 
         </Link>

     <Link href="trending"> 
     <li className={styles.item}>Trending</li> 
     </Link>
     <Link href="series"> <li className={styles.item}>Series</li> </Link>

     </ul>
        </Nav> 
        
        </>
     );
}

