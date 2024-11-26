// Seleção de elementos do DOM
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskListPending = document.getElementById('task-list-pending');
const taskListCompleted = document.getElementById('task-list-completed');
const deleteModal = document.getElementById('delete-modal');
const confirmDelete = document.getElementById('confirm-delete');
const cancelDelete = document.getElementById('cancel-delete');

let taskToDelete = null;

// Recuperar tarefas do localStorage
document.addEventListener('DOMContentLoaded', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || { pending: [], completed: [] };
  tasks.pending.forEach(taskText => addTask(taskText, 'pending'));
  tasks.completed.forEach(taskText => addTask(taskText, 'completed'));
});

// Adicionar tarefa
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    addTask(taskText, 'pending');
    taskInput.value = '';
  }
});

// Função para adicionar tarefa
function addTask(taskText, status) {
  const li = document.createElement('li');
  li.textContent = taskText;

  const completeButton = document.createElement('button');
  completeButton.className = 'complete-btn';
  completeButton.innerHTML = '<i class="fas fa-check"></i>'; // Ícone de "check"
  completeButton.addEventListener('click', () => toggleTaskStatus(li)); // Marca a tarefa como concluída ou pendente

  const removeButton = document.createElement('button');
  removeButton.className = 'remove-btn';
  removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Ícone de "lixeira"
  removeButton.addEventListener('click', () => showDeleteModal(li)); // Exibe o modal de confirmação de exclusão

  li.appendChild(completeButton);
  li.appendChild(removeButton);

  if (status === 'pending') {
    taskListPending.appendChild(li);
  } else {
    li.classList.add('completed');
    taskListCompleted.appendChild(li);
  }

  saveTasks();
}

// Alternar status da tarefa entre concluída e pendente
function toggleTaskStatus(li) {
  const isCompleted = li.classList.contains('completed');
  
  if (isCompleted) {
    taskListPending.appendChild(li);
  } else {
    taskListCompleted.appendChild(li);
  }

  li.classList.toggle('completed');
  saveTasks();
}

// Mostrar modal de confirmação de exclusão
function showDeleteModal(task) {
  taskToDelete = task;
  deleteModal.style.display = 'flex';
}

// Confirmar exclusão
confirmDelete.addEventListener('click', () => {
  if (taskToDelete) {
    taskToDelete.remove();  // Remove a tarefa
    taskToDelete = null;
    saveTasks();  // Atualiza o localStorage
  }
  deleteModal.style.display = 'none';
});

// Cancelar exclusão
cancelDelete.addEventListener('click', () => {
  taskToDelete = null;
  deleteModal.style.display = 'none';
});

// Salvar tarefas no localStorage
function saveTasks() {
  const pendingTasks = Array.from(taskListPending.children).map(task => task.textContent);
  const completedTasks = Array.from(taskListCompleted.children).map(task => task.textContent);

  const tasks = { pending: pendingTasks, completed: completedTasks };
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
