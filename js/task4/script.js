import { TasksList } from "./TaskList";

let tasksList = new TasksList();
tasksList
    .add('first', 10)
    .add('second', 5)
    .add('first', 3)
    .remove(2)
    .add('five', 8)
    .add('six', 15)
    .add('ten')
    .printAll();

console.log(tasksList.getAll());
console.log(tasksList.getById(2));
console.log(tasksList.getIf(function(task){
    return task.name.length === 3;
}))
console.log(tasksList.sortByPriority().getAll());
tasksList.printAll();

let tasksList2 = new TasksList();
tasksList2
    .add('first', 10)
    .add('ten')
    .printAll()