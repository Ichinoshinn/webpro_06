const express = require("express");
const app = express();
const path = require("path");

app.use(express.json()); // JSONリクエストをパース

// 静的ファイル（index.html）を提供
app.use(express.static(path.join(__dirname, 'public')));

let tasks = [];

// タスク一覧を取得
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// タスクを追加
// タスクを追加
app.post("/tasks", (req, res) => {
  const { task, status } = req.body;
  console.log("リクエストを受け取りました:", req.body);  // 追加
  if (!task || !status) {
    return res.status(400).json({ status: "error", message: "タスクが不正です" });
  }
  const newTask = { id: tasks.length + 1, task, status };
  tasks.push(newTask);
  res.json({ status: "success", message: "タスクが正常に追加されました" });
});

// サーバーをポート3000で起動
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});