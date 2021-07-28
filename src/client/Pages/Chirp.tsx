import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import RouteComponentProps from 'react-router-dom'

const Chirp = () => {
  const [chirp, setChirp] = useState({
    id: null,
    name: "",
    content: "",
  });
  const { chirpid }: { chirpid: string } = useParams();

  const handleName = (e: any) => {
    setChirp({
      id: chirp.id,
      name: e.target.value,
      content: chirp.content,
    });
  };

  const handleMessage = (e: any) => {
    setChirp({
      id: chirp.id,
      name: chirp.name,
      content: e.target.value,
    });
  };

  const updateMyChirp = () =>{
    fetch(`/api/chirps/${chirpid}`,{
        method: 'PUT',
        headers:{
        'Content-Type':'application/json'
        },
        body: JSON.stringify(chirp)
    })
    .then(response => console.log(response))
    .catch((err) => {
        err = new Error('Failed to Fetch')
        console.log(err)
      })
  
  }

  useEffect(() => {
    fetch(`/api/chirps/${chirpid}`)
      .then((chirps) => chirps.json())
      .then((chirps) => setChirp(chirps));
  }, []);

  return (
    <div className=" card col-md-6" key={`chirp-card-${chirp.id}`}>
      <input className="card-header" onChange = {handleName} value={chirp.name}></input>
      <textarea className="card-body" onChange = {handleMessage} value={chirp.content}></textarea>
      <button type="button" onClick = {updateMyChirp} className="btn btn-primary">
        Update Chirp
      </button>
    </div>
  );
};

export default Chirp;
// const [films, setFilms] = useState({})
// const {filmid} = useParams()

// useEffect(() => {
//     fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
//       .then((res) => res.json())
//       .then((film) => setFilms(film))
//       .catch((err) => {
//         err = new Error('Failed to Fetch')
//         console.log(err)
//       })
//   }, [filmid]);

// return (
//     <main className="container">
//     <section className="row justify-content-center mt-5">

//         <div className=" card col-md-6" key={`film-card-${films?.id}`}>
//           <h1 className="card-header text-center">{films?.title}</h1>
//           <p className="card-body text-center">{films?.description}</p>
//           <Link to ='/films' className=" btn btn-primary">Back To Films</Link>
//         </div>

//     </section>
//   </main>
//)
