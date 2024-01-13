"use client"

import Image from "next/image";
import styles from "../home.module.scss"
import Link from 'next/link'
import {MdClose} from 'react-icons/md'
import {FiMenu} from 'react-icons/fi'
import React, { useState, useEffect } from 'react';

import { IoMdArrowDroprightCircle } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { GoShareAndroid } from "react-icons/go";
 import { AiOutlineLike } from "react-icons/ai";

import slideShow2 from "./slideShow-2"
import slideShow1 from "./slideShow1"
import slideShow3 from "./slideShow3"
import slideShow4 from "./slideShow4"
import slideShow5 from "./slideShow5"


export default function Slider(){
    const [slideShow , setSlideShow] = useState("")

const slide = [ slideShow1,slideShow2,slideShow3,slideShow4,slideShow5 ]

const randomSlide =() =>{ 
    const randomIndex = Math.floor(Math.random()*slide.length )
    console.log(slideShow
        )
setSlideShow(slide[randomIndex])
}

useEffect(function(){ 
    const interval = setInterval(() => {
      randomSlide()
    }, 10000);  
    return () => clearInterval(interval);
  }, [])
    return(
       <>
        <div>
       { slideShow}
       
       </div>
       
       <section className={styles.IconsContainer} >
        
        <ul className={styles.leftIcons}>
            <li className={styles.iconItems}>
              <IoMdArrowDroprightCircle style={{width: '20px', height: '12px'}}  className={styles.icon}/>
                     Play now
            </li>
            <li  className={styles.iconItems}> 
         
            <CiBookmark style={{width: '20px', height: '12px'}}  className={styles.icon}/>
                 Add to watchList
            </li>
            </ul>

            <ul  className={styles.rightIcons}>
            <li  className={styles.iconItems} id={styles.download}>
           <MdOutlineFileDownload style={{width: '20px', height: '12px'}}  className={styles.icon} />    
                    Download
            </li>
            <li  className={styles.iconItems}> 
          
            <GoShareAndroid style={{width: '20px', height: '12px'}}   className={styles.icon}/>    
                Share
            </li>
            <li  className={styles.iconItems}>   
         
            <AiOutlineLike style={{width: '20px', height: '12px'}}  className={styles.icon}/>    
                 Like
            </li>
        </ul>
       </section>
       <section  className={styles.dummyOverview}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Repellendus ipsam harum sunt at repellat fugiat reiciendis 
        delectus quo, molestiae possimus quidem, consequuntur quam
         adipisci in deserunt aut, eligendi inventore non sed dolor
          accusamus provident. Nihil, quaerat minus, ut alias saepe ea
           aperiam distinctio fugiat perferendis recusandae sit expedita
            soluta, beatae obcaecati dolores ad eveniet facere excepturi 
            repudiandae. Fuga doloremque ut corrupti voluptatum libero commodi 
            sed autem officia sequi! Explicabo mollitia numquam sed omnis rem! 
            Blanditiis eius quibusdam suscipit alias.
         Repellat.
       </section>
       </>
    )

}


