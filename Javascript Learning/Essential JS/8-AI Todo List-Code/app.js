// AI Enhanced ToDo List - Modern, optimized, and maintainable
// Features: Accessibility, modularity, localStorage, log history, improved UX

document.addEventListener('DOMContentLoaded', () => {
  const addTaskBtn = document.getElementById('add-task-btn');
  const inpEle = document.querySelector('.inp-element');
  const todoList = document.querySelector('.todoList');
  const resetBtn = document.getElementById('reset-btn');
  const logToggleBtn = document.getElementById('btn-2');
  const logContainer = document.querySelector('.log-container');
  const logTable = document.querySelector('.log-table');
  const logInfo = document.getElementById('hide-log-info');

  // Utility functions
  const getLogHistory = () => JSON.parse(localStorage.getItem('logHistory') || '[]');
  const setLogHistory = (arr) => localStorage.setItem('logHistory', JSON.stringify(arr));
  const saveTasks = () => localStorage.setItem('tasks', todoList.innerHTML);
  const loadTasks = () => { todoList.innerHTML = localStorage.getItem('tasks') || ''; };

  // Add Task
  addTaskBtn.addEventListener('click', () => {
    const value = inpEle.value.trim();
    if (!value) {
      alert('Please enter the task');
      return;
    }
    if (value.length > 50) {
      alert('Please enter task within 50 characters');
      return;
    }
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `<span>${value}</span><span class="span-cross" title="Delete Task">&#x274C;</span>`;
    todoList.appendChild(li);
    saveTasks();
    logTask(value);
    inpEle.value = '';
  });

  // Task actions (complete/delete)
  todoList.addEventListener('click', (e) => {
    const li = e.target.closest('li.task-item');
    if (!li) return;
    if (e.target.classList.contains('span-cross')) {
      li.remove();
      saveTasks();
    } else {
      li.classList.toggle('checked');
      updateLogCompletion(li.querySelector('span').textContent, li.classList.contains('checked'));
      saveTasks();
    }
  });

  // Log Task
  function logTask(taskName) {
    const logArr = getLogHistory();
    const now = new Date();
    logArr.push({
      input: taskName,
      recordedDateTime: now.toISOString(),
      isTaskCompleted: 'N'
    });
    setLogHistory(logArr);
  }

  // Update completion status in log
  function updateLogCompletion(taskName, completed) {
    const logArr = getLogHistory();
    logArr.forEach(log => {
      if (log.input === taskName) log.isTaskCompleted = completed ? 'Y' : 'N';
    });
    setLogHistory(logArr);
  }

  // Log Table
  function populateLogTable() {
    logTable.innerHTML = '';
    const logArr = getLogHistory();
    if (logArr.length === 0) {
      logTable.innerHTML = '<tr><td colspan="4">No log history found.</td></tr>';
      return;
    }
    const header = `<tr><th>Task ID</th><th>Task Name</th><th>Created</th><th>Completed</th></tr>`;
    logTable.innerHTML = header + logArr.map((log, i) =>
      `<tr><td>${i+1}</td><td>${log.input}</td><td>${new Date(log.recordedDateTime).toLocaleString()}</td><td>${log.isTaskCompleted}</td></tr>`
    ).join('');
  }

  // Toggle Log Container
  logToggleBtn.addEventListener('click', () => {
    if (logContainer.style.display === 'flex') {
      logContainer.style.display = 'none';
      logToggleBtn.classList.replace('fa-toggle-on', 'fa-toggle-off');
    } else {
      populateLogTable();
      logContainer.style.display = 'flex';
      logToggleBtn.classList.replace('fa-toggle-off', 'fa-toggle-on');
    }
  });

  // Show/hide info on hover
  logToggleBtn.addEventListener('mouseover', (e) => {
    logInfo.style.display = 'block';
    logInfo.style.left = (e.clientX - 110) + 'px';
    logInfo.style.top = (e.clientY + 30) + 'px';
  });
  logToggleBtn.addEventListener('mouseout', () => {
    logInfo.style.display = 'none';
  });

  // Reset Log
  resetBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset the log?')) {
      localStorage.removeItem('logHistory');
      populateLogTable();
    }
  });

  // Remove completed tasks after 10 minutes
  setInterval(() => {
    document.querySelectorAll('.checked').forEach(task => {
      task.remove();
      saveTasks();
    });
  }, 10 * 60 * 1000); // 10 minutes

  // Initial load
  loadTasks();
});
