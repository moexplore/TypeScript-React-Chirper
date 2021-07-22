import * as express from "express";

import {
  GetChirps,
  GetChirp,
  UpdateChirp,
  CreateChirp,
  DeleteChirp,
} from "../chirpsstore";
let router = express.Router();

router.get("/:id?", (req, res) => {
  let id: string = req.params.id;
  if (id) {
    const chirp = GetChirp(id);
    chirp.id = id;
    res.json(chirp);
  } else {
    const chirps = GetChirps();
    let chirpArr: any[] = [];

    Object.keys(chirps).map(function (key) {
      chirpArr.push({ id: key, name: chirps[key].name, msg: chirps[key].msg });
    });
    chirpArr.pop();
    res.send(chirpArr);
  }
});

router.post("/", (req, res) => {
  CreateChirp(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res) => {
  UpdateChirp(req.params.id, req.body);
  res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
  DeleteChirp(req.params.id);
  res.sendStatus(200);
});

export default router;
