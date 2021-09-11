import React from 'react';
import { Link} from "react-router-dom";
import styles from "../Blogs/Blogs.module.css"


function Blogs({data}){
    return(
           
          <Link className={styles.links} to={`/blog/${data.blogId}`}>
        {/* <Link to={`/blog/${data.id}`}> */}

            <div className={styles.blogTitle}>
              {data.blogTitle}
              {/* {data.title} */}

            </div>
            <img src={data.blogImage} alt="blogs" className={styles.images}></img>
          </Link>
     
    )
}

export default Blogs;