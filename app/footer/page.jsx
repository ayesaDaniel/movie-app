import styles from "../home.module.scss"
import {MdFacebook  } from "react-icons/md";
import {SlSocialInstagram} from "react-icons/sl";
import {SlSocialGoogle} from "react-icons/sl";
import {SlSocialTwitter} from "react-icons/sl";
export default function Footer(){
    return(
        <section className={styles.footer}>
    <div className={styles.footerLeft}>
        <h1 className={styles.footerLefth1}> Our platform is trusted by millions
        <br/> 
        and features 
            the best updated movies
             <br/>all around the world</h1>
            <ul className={styles.footerLeftul}>
                <li className={styles.footerLeftli}>Terms of service</li>
                <li className={styles.footerLeftli}>Privacy policy</li>
                <li className={styles.footerLeftli}> Language</li>
            </ul>
        </div>  



    
<div className={styles.footerRight}>
<ul className={styles.footerRightul}>
    <li className={styles.footerRightli}> Home </li> 
    <li className={styles.footerRightli}> Trending </li>
    <li className={styles.footerRightli}>Series</li>
</ul>
</div>



<div className={styles.footerRightIcons} >
<ul>
    <li className={styles.footerIcon}><MdFacebook /></li>
    <li className={styles.footerIcon}><SlSocialTwitter /></li>
    <li className={styles.footerIcon}><SlSocialInstagram /></li>
    <li className={styles.footerIcon}><SlSocialGoogle/></li>
</ul>
        </div>

        {/* <h3 className={styles.copyright}> &copy 2023</h3> */}
        </section>
    )
}