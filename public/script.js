"use strict";

// タスクリストをロード
async function loadTasks() {
  const response = await fetch("http://localhost:3000/tasks");
  const tasks = await response.json();

  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // 現在のリストをクリア

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = `${task.task} - ${task.status}`;
    taskList.appendChild(li);
  });
}

// タスクを追加
async function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task === "") return;

  const response = await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ task: task, status: "未完了" })
  });

  const data = await response.json();
  if (data.status === "success") {
    taskInput.value = ""; // 入力欄をクリア
    loadTasks(); // タスクリストを再描画
  } else {
    console.error("タスク追加エラー: ", data);
  }
}

// ページロード時にタスクリストをロード
document.addEventListener("DOMContentLoaded", loadTasks);