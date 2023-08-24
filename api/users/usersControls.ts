import { connection } from "../../server";

export async function getUsers(req: any, res: any) {
  try {
    //get all users from db

    const query = "SELECT * FROM users";
    connection.query(query, (error: any, result: any) => {
      console.log(error);
      if (error) throw new Error("error in query");

      console.log("query result", result);
      res.send({ users: result });
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

export async function addUser(req: any, res: any) {
  try {
    const { fullName, email, userName, password } = req.body;

    if (!fullName || !email || !userName || !password)
      throw new Error("all fiels are required");

    const query = `INSERT INTO users (FullName, Email, UserName, Password) VALUES ("${fullName}", "${email}", "${userName}", "${password}");`;

    connection.query(query, (error: any, result: any) => {
      if (error) throw new Error("error in query");

      res.send(result);
    });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
}

export async function searchUserById(req: any, res: any) {
  try {
    const { user_id } = req.body;
    console.log(user_id);
    if (!user_id) throw new Error("user id are required");
    const query = `SELECT * FROM users
    WHERE user_id LIKE '%${user_id}%' LIMIT 1`;
    connection.query(query, (error: any, result: any) => {
      console.log(error);
      if (error) throw new Error("error in query");

      console.log("query result", result);
      res.send({ users: result });
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}
export async function deleteUser(req: any, res: any) {
  try {
    const { id } = req.body;

    const query = `DELETE FROM users WHERE user_id='${id}';`;
    connection.query(query, (error: any, result: any) => {
      console.log(error);
      if (error) throw new Error("error in query");

      console.log("query result", result);
      res.send({ users: result });
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}
