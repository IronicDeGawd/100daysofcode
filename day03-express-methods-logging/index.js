import express from "express";
import logger from "./logger.js";
import morgan from "morgan";

const app = express();
const port = 3000;
const morganFormat = ":method :url :status :response-time ms";

let tasksArr = [];
let taskId = 1;

app.use(express.json());

//logging method
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

//post method
app.post("/addTask", (req, res) => {
  try {
    const { title, body } = req.body;
    const task = { id: taskId++, title, body };
    tasksArr.push(task);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).send(`Error occurred while post: ${error}`);
  }
});

//get method
app.get("/getTasks", (req, res) => {
  try {
    res.status(202).json(tasksArr);
  } catch (error) {
    res.status(400).send(`Error occurred while get: ${error}`);
  }
});

app.get("/getTask/:id", (req, res) => {
  const currTask = tasksArr.find((t) => t.id === parseInt(req.params.id));
  if (!currTask) {
    return res.status(404).send(`Error occurred`);
  }
  res.send(currTask).status(200);
});

//update method
app.put("/updateTask/:id", (req, res) => {
  const currTask = tasksArr.find((t) => t.id === parseInt(req.params.id));
  if (!currTask) {
    return res.status(404).send(`Error occurred`);
  }
  const { title, body } = req.body;
  currTask.title = title;
  currTask.body = body;
  res.send(currTask).status(200);
});

//delete method
app.delete("/delTask/:id", (req, res) => {
  const index = tasksArr.findIndex((t) => t.id === parseInt(req.params.id));
  console.log(index);
  if (index < 0) {
    return res.status(404).send(`Error occurred`);
  }
  res.send(tasksArr.splice(index, 1)).status(200);
});

app.listen(port, () => {
  console.log(`Server listening at port ${port}...`);
});
