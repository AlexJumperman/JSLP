require('./db/mongoose');
const Task = require('./models/task');

// Task.findByIdAndDelete('67e473c092230837b7d10583').then(r => {
//     console.log(r);
//     return Task.countDocuments({ completed: false });
// }).then(r => {console.log(r)});

const deleteTaskAndGetIncompleteCount = async (id) => {
    await Task.findByIdAndDelete(id);
    return await Task.countDocuments({ completed: false });
}

deleteTaskAndGetIncompleteCount('67e473bc92230837b7d1057f').then(r => console.log(r));