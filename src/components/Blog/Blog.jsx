import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import Aside from '../Aside/Aside';
import styles from '../Blog/Blog.module.css'

// let dataUrl="https://s3kamble.github.io/webpage-rendering-data/blogData.json";
let dataUrl="http://localhost:4000/blogs"



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
            console.log(data)   
            // const foundBlog = data.find(blog => blog.id === params.id); 
            const foundBlog = data.data.find(blog => blog.blogId === params.id); 
            
            setBlog(foundBlog)
            // setLinks(foundBlog.links)
            setLinks(foundBlog.relatedLinks)
       console.log(typeof(foundBlog.createdAt))


        })
        .catch((err)=>{
            console.log(err)
        })
        
       },[params.id])


    return(
        <div>
           {/* <h2>{blog.title}</h2> */}
           {/* <img src={blog.imageUrl} alt="Blog Image" /> */}
           {/* <div>{blog.content}</div> */}

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