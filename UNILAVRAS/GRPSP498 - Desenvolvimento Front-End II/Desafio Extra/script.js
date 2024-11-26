document.getElementById('task-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário (reload da página)
  
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    addTask(taskText);
    taskInput.value = ''; // Limpa o campo de input
  }
});

function addTask(taskText) {
  const taskList = document.getElementById('task-list');
  const li = document.createElement('li');
  
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="complete-btn">Concluído</button>
      <button class="remove-btn">Remover</button>
    </div>
  `;
  
  // Alternar status de conclusão
  li.querySelector('.complete-btn').addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  // Remover tarefa
  li.querySelector('.remove-btn').addEventListener('click', function() {
    li.remove();
  });
  
  taskList.appendChild(li);
}
