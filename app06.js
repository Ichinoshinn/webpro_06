const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));  // 静的ファイルの提供

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/form.html'));  // form.htmlを表示
  });

// ユーザーの入力を処理して結果を表示
app.get('/result', (req, res) => {
  const { name, age } = req.query;
  res.render('result', { name, age });
});

// サーバー起動
app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});