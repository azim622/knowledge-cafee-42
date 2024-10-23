
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmatks from './components/Bookmarks/Bookmatks'
import Header from './components/Header'

function App() {
  const [bookmarks , setBookmarks]= useState([])
  const [readingTime, setReadingTime]= useState(0)
  const handleAddToBookMarks = blog =>{
    const newBookmarks = [...bookmarks , blog]
    setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = time =>{
     setReadingTime(readingTime+time)
  }

  return (
    <>
     
     <Header></Header>
     <div className='md:flex max-w-6xl mx-auto'>
        <Blogs
         handleAddToBookMarks={handleAddToBookMarks}
         handleMarkAsRead={handleMarkAsRead}></Blogs>
         
        <Bookmatks bookmarks={bookmarks} readingTime={readingTime}></Bookmatks>


     </div>
      
    </>
  )
}

export default App
