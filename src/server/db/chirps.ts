import { Query } from "./index";

const all = async () =>
  Query(`select chirps.id, chirps.content, chirps.location, users.name from chirps
join users on chirps.userid = users.id`);

const one = async (id: any) =>
  Query("SELECT * from chirps where chirps.id = ?", [id]);

const postUser = async (name, email, password) =>
  Query(
    `insert into users(name, email, password) values("${name}", "${email}", "${password}")`
  );

const postChirp = async (userid, content, location) =>
  Query(`insert into chirps(userid, content, location) values(?, ?, ?)`, [
    userid,
    content,
    location,
  ]);

const update = async (id, content, location) =>
  Query(`update chirps
set location = "${location}", content = "${content}"
where id = "${id}";
`);

const deleteChirp = async (id: any) =>
  Query(`delete from chirps where chirps.id = ${id}`);

export default {
  all,
  one,
  postUser,
  postChirp,
  update,
  deleteChirp,
};
