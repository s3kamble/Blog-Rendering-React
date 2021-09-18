import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import Aside from '../Aside/Aside';
import styles from '../Blog/Blog.module.css'

let dataUrl="https://blogs-data.herokuapp.com/blogs";
// let dataUrl="http://localhost:4000/blogs"



function Blog(){
    const [blog,setBlog]=useState([])
    const [links,setLinks]=useState([])

    let params=useParams();
    useEffect(()=>{
        fetch(dataUrl)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{          
            const foundBlog = data.data.find(blog => blog.blogId === params.id);           
            setBlog(foundBlog)
            setLinks(foundBlog.relatedLinks)
        })
        .catch((err)=>{
            console.log(err)
        })
        
       },[params.id])


    return(
        <div>
         

           <div className={styles.blogInfo}>            
               <img src={blog.blogImage} alt="Blog" className={styles.blogImage} />
               <div className={styles.blogAbout}>
                    <h2 className={styles.blogHeading}>{blog.blogTitle}</h2>
                    <h5 className={styles.blogAuthor}>Created By:{blog.author} </h5>
                    <p>{new Date(blog.createdAt).toLocaleDateString("en-US",{   day: 'numeric' , month: 'long', year: 'numeric' })}</p> 
               </div>
           </div>
         

           <div  className={styles.blogContent}>{blog.blogContent}</div>

           <Aside links={links} />

        </div>
    )
}

export default Blog;