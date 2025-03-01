class TasksList
{
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }

    add(name, priority = 1) {

        if(this.tasks.find(item => item.name === name)){
            return this;
        }

        this.tasks.push({
            id: this.nextId++,
            name: name,
            priority: priority,
            done: false
        })

        return this;
    }

    remove(id){
        let index = this.tasks.findIndex(item => item.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }

        return this;
    }

    getAll(){
        return this.tasks;
    }

    getById(id){
        return this.tasks.find(item => item.id === id);
    }

    getIf(condition){
        return this.tasks.filter(task => condition(task));
    }

    sortByName(){
        this.tasks.sort((a, b) => a.name.localeCompare(b.name));
        return this;
    }

    sortByPriority(){
        this.tasks.sort((a, b) => b.priority - a.priority);
        return this;
    }

    printAll(){
        console.log(this.tasks);
        return this;
    }
}

tasksList = new TasksList();
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

tasksList2 = new TasksList();
tasksList2
    .add('first', 10)
    .add('ten')
    .printAll()