const db = require('./db/models');

// Promise / Chaining
function getTasks() {
  db.Task.findAll()
    .then((tasks) => {
      tasks.forEach((task) => {
        console.log(task.taskName);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

// Async Await
async function printTasks()  {
  try {
    const tasks = await db.Task.findAll();
    tasks.forEach((task) => {
      console.log(task.taskName);
    });
  } catch (err) {
    console.log(err);
  }
};

getTasks();
printTasks();
