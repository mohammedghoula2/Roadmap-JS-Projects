// Select elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create task element
  const task = document.createElement('div');
  task.classList.add('task');

  // Checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('task-checkbox');

  // Task text
  const taskParagraph = document.createElement('p');
  taskParagraph.textContent = taskText;

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteBtn.addEventListener('click', () => task.remove());

  // Append elements
  task.appendChild(checkbox);
  task.appendChild(taskParagraph);
  task.appendChild(deleteBtn);
  taskList.appendChild(task);

  // Clear input
  taskInput.value = '';
}

// Add task on button click
addTaskBtn.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
