let input = prompt('what would you like to do?');
const todos = ['clean the kitchen', 'sweep the floor'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**********')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log(`**********`)
    } else if (input === 'new') {
        const newTodo = prompt('ok, what would you like to do?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    } else if (input === 'delete') {
        const index = prompt('enter an index to delete:')
        const deleted = todos.splice(index, 1);
        console.log(`${deleted} has been deleted`);
    }
    input = prompt('what would you like to do?');
}
console.log('ok, quit the app!')