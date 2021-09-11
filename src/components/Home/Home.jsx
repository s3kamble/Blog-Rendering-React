import React,{useEffect, useState} from 'react';
import Blogs from "../Blogs/Blogs";
import styles from "../Home/Home.module.css"


// let dataUrl="https://s3kamble.github.io/webpage-rendering-data/blogData.json";
let dataUrl="http://localhost:4000/blogs"


function Home(){

const[blogData,setBlogData]=useState([]);

useEffect(()=>{
 fetch(dataUrl)
 .then((response)=>{
     return response.json()
 })
 .then((data)=>{
     console.log(data.data)
    //  setBlogData(data)     

     setBlogData(data.data)     
 })
 .catch((err)=>{
     console.log(err)
 })
 
},[])

    return(
        <>
        <h2 className={styles.title}>What's on your mind,this time?</h2>
        <div className={styles.tiles}>
           { 
           blogData.map((blog)=>{      
                return <div  className={styles.blogTile}>
                        <Blogs key={blog._id} data={blog} />  
                    </div>
                // return <Blogs key={blog.blogId} data={blog} />       

            })
            }
        </div>
        </>
    )
}

export default Home