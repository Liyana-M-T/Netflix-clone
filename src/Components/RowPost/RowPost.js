import React,{useEffect,useState} from 'react'
import "./RowPost.css";
import Youtube from 'react-youtube'
import axios from '../../Axios';
import {imageUrl,API_KEY} from '../../Constants/Constants';

const RowPost = (props) => {
  const[movies,setMovies]=useState([]);
  const[urlid,setUrlId]=useState('');
  
  useEffect(()=>{
    axios.get(props.url)
    .then(response=>{
      console.log(response.data);
      setMovies(response.data.results);
    })
    .catch(err=>{
     // alert('network error')
    });
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

 const handleMovie=(id)=>{
  console.log(id, "idd");
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    if(response.data.results.length!==0){
      setUrlId(response.data.results[0])
    }else{
      console.log('array empty')
    }
  })
 }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
          <img onClick={() => handleMovie(obj.id)} className={props.isSmall? 'smallPoster' :'poster'} alt='Poster' src={`${imageUrl+obj.backdrop_path}`}/>
        )}
      
      
      </div>
      {urlid && <Youtube videoId={urlid.key} opts={opts} />}
    </div>
  )
}

export default RowPost


