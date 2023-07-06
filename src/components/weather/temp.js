//https://api.openweathermap.org/data/2.5/weather?q={Raxaul}&appid={e017622f668f1f02950653f5ef0e3485}

import React,{useState,useEffect} from 'react';
import Weathercard from './weathercard';
import './style.css';
const Temp = () => {
  const[searchValue,setSearchValue]=useState("Raxaul");
  const [tempInfo,setTempInfo]=useState({});
  const getWeatherInfo=async()=>{
try{
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=fbfc191829f9f71164a632489dae5ea2`
const res=await fetch(url);
const data=await res.json();
//console.log(temp);
//console.log(data);
const{temp,humidity,pressure}=data.main;
const{main:weathermood}=data.weather[0];
const{name}=data;
const{speed}=data.wind;
const{country,sunset}=data.sys;

const myNewWeatherInfo={
  temp,
  humidity,
  pressure,
  name,
  speed,
  country,
  sunset
};
setTempInfo(myNewWeatherInfo);
}catch (error){
  console.log(error);
}
  };
  useEffect(()=>{
    getWeatherInfo();
  },[]);
  return (
    <>
    <div className="wrap">
      <div className="search">
<input
type="search"
placeholder="search..."
autoFocus
id="search"
className="searchTerm"
value={searchValue}
onChange={(e)=>setSearchValue(e.target.value)}
/>
<button className="searchButton"
 type="button" onClick={getWeatherInfo}>
  Search
</button>
      </div>
      </div> 
       {/* our temp card */}
       <Weathercard tempInfo={tempInfo}/>
    </>
  )
}

export default Temp;
