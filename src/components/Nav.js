import React,{useState} from 'react'
import axios from 'axios';
function Nav() {
  var [que,setQue]=useState("");
  var [obj,setObj]=useState({});

  function changeState(e){
     setQue(e.target.value);
  }

  function FetchData(e){
    e.preventDefault();
    console.log("fetch data called");
   
    var [a,b]=que.split(" ");
    console.log(a,b);
    axios
    .get(`http://api.weatherapi.com/v1/current.json?key=e4a290301fa444a6bd754423230502&q=${a}`)
    .then(
      (e)=>{
        console.log(e);
      setObj({...obj,first:e,});
    })
    axios
    .get(`http://api.weatherapi.com/v1/current.json?key=e4a290301fa444a6bd754423230502&q=${b}`)
    .then(
      (e)=>{
        console.log(e);
      setObj({...obj,last:e});
    })
    console.log(obj);
   
  }

  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">CAS</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact US</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0" onSubmit={FetchData}>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={changeState}/>
      <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  )
}

export default Nav