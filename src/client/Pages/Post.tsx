import React, { useState } from "react";

const Post = () => {
  const [name, setName] = useState([]);
  const [msg, setMsg] = useState([]);

  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const handleMessage = (e: any) => {
    setMsg(e.target.value);
  };

  const postChirp = () => {
    
    // let res = await fetch('/api/chirps', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},

    // })
    
    
    const update: object = {
      name: name ,
      msg: msg,
    };

    const options: object = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(update)
    };

    fetch("/api/chirps", options)
    //.then(data => data.json())
    .then(update => console.log(update))
}

  return (
    <form>
      <div>
        <h1>
          Here is where you post a new chirp with a "Post Request" on the
          backend
        </h1>
        <label htmlFor="">Name</label>
        <input value={name} onChange={handleName}></input>
      </div>
      <div>
        <label htmlFor="">Chirp Message</label>
        <input value={msg} onChange={handleMessage}></input>
      </div>
      <button type="button" className="bg-primary" onClick={postChirp}>
        Post a New Chirp!
      </button>
    </form>
  );
};

export default Post
