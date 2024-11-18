const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");


app.use(express.static("public"));



// "/" ルートで index.html を表示
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});



app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

app.get("/janken", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win );
  let total = Number( req.query.total );
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';
  // ここに勝敗の判定を入れる
  // 今はダミーで人間の勝ちにしておく
  let judgement = '勝ち';
  if((num==1&&hand=='チョキ')||(num==2&&hand=='パー')||(num==3&&hand=='グー'))  {
  judgement = '負け';
} else if (hand === cpu) {
  judgement = '引き分け';
}


  win += 1;
  total += 1;
  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken', display );
});



app.get("/birthday", (req, res) => {
  const birthMonth = req.query.month; // ユーザーから送信された誕生月

  if (!birthMonth) {
      // birthMonthがない場合、最初のページにリダイレクト
      return res.redirect('/');
  }
  const monthFortunes = [
    ["新しい冒険が始まる予感", "素敵な出会いが待っているかも", "新たな挑戦が始まる時期"],
    ["幸運が舞い込む月", "新しいチャンスが訪れる予感", "ラッキーな出来事が待っている！"],
    ["努力が報われるとき", "忍耐力が試される時期", "努力が結果に繋がりやすい"],
    ["リラックスがテーマ", "休息を取りながら前進しよう", "ゆっくり進むことが成功に繋がる"],
    ["素敵な出会いがありそう", "新しい友人と出会う予感", "出会いに恵まれる月"],
    ["健康に注意してね", "体調を気遣いながら過ごす時期", "生活習慣に気を付けることが大切"],
    ["仕事運が絶好調", "仕事で大きな成果を上げる時期", "新しいプロジェクトに挑戦しよう"],
    ["新しい趣味を始めると吉", "今こそ新しいことに挑戦！", "新しい趣味が幸運を呼ぶ"],
    ["家族との時間を大切に", "家族と過ごす時間が運気を上げる", "家族との絆が深まる時期"],
    ["金運がアップ！", "お金に関する幸運がやってくる", "投資や貯金に良い時期"],
    ["心の癒しを見つけよう", "心の平和を大切に", "自分自身のケアを忘れずに"],
    ["挑戦がチャンスを呼ぶ", "今挑戦すべき時期", "新しい挑戦が成功を呼び込む"],
    ["素晴らしい成果が出る月", "新しい成果が期待できる", "成功の兆しが見えてくる"],
  ];

  let fortune = "";
  if (birthMonth) {
    const monthIndex = parseInt(birthMonth, 10) - 1; 
    if (monthIndex >= 0 && monthIndex < 12) {
      const randomIndex = Math.floor(Math.random() * monthFortunes[monthIndex].length);
      fortune = monthFortunes[monthIndex][randomIndex];
    } else {
      fortune = "正しい月を選んでください。";
    }
  }

  res.render("birthday", { birthMonth, fortune });
});






// サーバー起動
app.listen(8080, () => console.log("Example app listening on port 8080!"));