import React,{useEffect, useState} from 'react';
import Blogs from "../Blogs/Blogs";
import styles from "../Home/Home.module.css"


let dataUrl="https://blogs-data.herokuapp.com/blogs";
// let dataUrl="http://localhost:4000/blogs"


function Home(){

const[blogData,setBlogData]=useState([]);

useEffect(()=>{
 fetch(dataUrl)
 .then((response)=>{
     return response.json()
 })
 .then((data)=>{
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
                return <div  key={blog.blogId}  className={styles.blogTile}>
                        <Blogs data={blog} />  
                    </div>     

            })
            }
        </div>
        </>
    )
}

export default Home