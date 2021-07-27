import * as express from "express";
let router = express.Router();
import db from "../db";

router.get("/", async (req, res) => {
  try {
    res.json(await db.Chirps.all());
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    res.json((await db.Chirps.one(req.params.id))[0]);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  try {
    let User = await db.Chirps.postUser(
      req.body.name,
      req.body.email,
      req.body.password
    );
    let userid = User.insertId;
    db.Chirps.postChirp(userid, req.body.content, req.body.location);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.put("/:id", async(req, res) => {
  try {
    await res.send(db.Chirps.update(req.params.id, req.body.content, req.body.location))

    // res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete('/:id', async(req, res) =>{
  try {
    await res.send(db.Chirps.deleteChirp(req.params.id))

    // res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
})

export default router;
// import {
//   GetChirps,
//   GetChirp,
//   UpdateChirp,
//   CreateChirp,
//   DeleteChirp,
// } from "../chirpsstore";

// router.get("/:id?", (req, res) => {
//   let id: string = req.params.id;
//   if (id) {
//     const chirp = GetChirp(id);
//     chirp.id = id;
//     res.json(chirp);
//   } else {
//     const chirps = GetChirps();
//     let chirpArr: any[] = [];

//     Object.keys(chirps).map(function (key) {
//       chirpArr.push({ id: key, name: chirps[key].name, msg: chirps[key].msg });
//     });
//     chirpArr.pop();
//     res.send(chirpArr);
//   }
// });

// router.post("/", (req, res) => {
//   CreateChirp(req.body);
//   res.sendStatus(200);
// });

// router.put("/:id", (req, res) => {
//   UpdateChirp(req.params.id, req.body);
//   res.sendStatus(200);
// });

// router.delete("/:id", (req, res) => {
//   DeleteChirp(req.params.id);
//   res.sendStatus(200);
// });
