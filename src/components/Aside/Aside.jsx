import React from 'react';
import { Link} from "react-router-dom";
import styles from "../Aside/Aside.module.css"

function Aside({links}){
    return(
      <>
      <h2 className={styles.blogLinks}>Read more about.....</h2>
       <div className={styles.blogInfo}>
        {links.map((link)=>{
               return <Link className={styles.blogTitle} key={`${link._id}`} to={`/blog/${link.href}`}>
               <div>
                 {link.title}
               </div>
             </Link>
           })}
        </div>
      </>
    )
}

export default Aside