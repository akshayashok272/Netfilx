import{ React,useEffect,useState} from 'react'
import './Banner.css'
import instance from './instance'
import requests from './request'

function Banner() {
    const base_url = "https://image.tmdb.org/t/p/original/";

const [movie,setMovies]=useState({})
const fetchData=async()=>{
  const response=await instance.get(requests.fetchTrending)  
  setMovies(response.data.results[
    Math.floor(Math.random()*response.data.results.length)
  ]);



}
function truncate(str,n){
   return str?.length>n?str?.substr(0,n-1)+'....':str
}

useEffect(()=>{
    fetchData()
  },[])

  return (
    <div
    className='banner'
    style={{
        backgroundSize:'cover',
        backgroundImage:`url(${base_url}${movie.backdrop_path})`
    }}
    >
       <div className='bannerContent'>
        
        <h1 className='title'>{movie.title}</h1>
        <h3 className='overview'>{truncate(movie?.overview,200)}</h3> 

        </div> 
    </div>
   
  )
}

export default Banner