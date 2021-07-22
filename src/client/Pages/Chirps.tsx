import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
const Chirps = () => {
  const [chirps, setChirps] = useState([]);

  const { chirpid }: { chirpid: string } = useParams();

  useEffect(() => {
    fetch(`/api/chirps`)
      .then((chirps) => chirps.json())
      .then((chirps) => setChirps(chirps));
  }, []);

  const deleteChirp = () => {
    fetch(`/api/chirps/${chirps}`, {
      method: "DELETE",
    })
      .then((response) => console.log(response))
      .catch((err) => {
        err = new Error("Failed to Fetch");
        console.log(err);
      });

    fetch(`/api/chirps`)
      .then((chirps) => chirps.json())
      .then((chirps) => setChirps(chirps));
  };

  return (
    <main className="container">
      
      <section className="row justify-content-center mt-5">
        {chirps.map((chirp) => (
          <div className=" card col-md-6 mt-3" key={`chirp-card-${chirp.id}`}>
            <h1 className="card-header">{chirp.name}</h1>
            <p className="card-body">{chirp.msg}</p>
            <Link to={`/chirps/${chirp.id}`} className="btn btn-success">
              Edit This Chirp
            </Link>
            <button
              type="submit"
              onClick={() => {
                fetch(`/api/chirps/${chirp.id}`, {
                  method: "DELETE",
                })
                  .then((response) => console.log(response))
                  .catch((err) => {
                    err = new Error("Failed to Fetch");
                    console.log(err);
                  });

                fetch(`/api/chirps`)
                  .then((chirps) => chirps.json())
                  .then((chirps) => setChirps(chirps));
              }}
              className="btn btn-danger mt-3"
            >
              Delete Chirp
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Chirps;
