// Arrays to keep track of each task's state
const newTask = (title, description) => {
  const task = {
    title,
    description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? "" : " not"} been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? "" : " not"} been completed`);
};

function completeTask(task) {
  task.complete = true;
};

// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

logTaskState(task1);
completeTask(task1);
logTaskState(task1);

console.log(tasks);
