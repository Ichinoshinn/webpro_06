# webpro_06



## このプログラムについて

##　　ファイル一覧

ファイル名 | 説明
-|-
app5.js | プログラム本体
public/janken.html | ジャンケンの開始画面 
public/index.html | 誕生月選択画面
public/form.html | 名前と年齢入力画面
views/birthday.ejs | 占い結果画面
views/result.ejs | 結果画面




```javascript
console.log('Hello');
```

```mermaid
flowchart TD;
開始 --> 終了;
```

```mermaid
flowchart TD;

start["開始"];
end1["終了"]
if{"条件に合うか"}
win["勝ち"]
lose["負け"]

start --> if
if -->|yes| win
win --> end1
if -->|no| lose
lose -->end1
```

---

# 追加した2つの機能について

## 1.誕生月占い
#### 使用方法 
1. node app5.jsを起動する
1. Webブラウザでlocalhost:8080/birthdayにアクセスする
1. 誕生月の選択をし、占うをクリックする




#### index.html , birthday.ejs
```mermaid
flowchart TD;
    Start[誕生月占いページを表示] --> Check[誕生月が選択されたか確認]
    Check -->|選択された| ShowResult[選択された誕生月を表示]
    ShowResult --> DisplayFortune[占い結果を表示]
    DisplayFortune --> End[戻るリンクを表示]

    Check -->|選択されていない| ShowError[エラーメッセージを表示]
    ShowError --> End
    End --> Start
```

## 機能
1.	誕生月の選択
	•	ユーザーがフォーム内で自分の誕生月を選択する
	•	月ごとに占いの結果が異なるため,選択された誕生月に対応する占いが表示される
2.	占い結果の表示
	•	サーバーが,選択された誕生月に対応する占いの結果を提供する
	•	各月には複数の占い結果が設定されており,その中からランダムに1つが選ばれ、表示される


タグ | 説明
-|-
select | ドロップダウンメニューの表示
strong | 文字の強調
button(submit) | フォームの送信を行う

## 2.名前と年齢の入力
#### 使用方法 
1. node app6.jsを起動する
1. Webブラウザでlocalhost:8080/formにアクセスする
1. 自分の名前と年齢を入力し,送信をクリックする

#### form.html , result.ejs
```mermaid
graph TD
    Start[情報入力ページを表示] --> DisplayForm[フォームを表示]
    DisplayForm --> UserInput[ユーザーが名前と年齢を入力]
    UserInput --> Submit[送信ボタンをクリック]
    Submit --> ServerProcessing[サーバーが情報を処理]
    ServerProcessing --> ResultPage[結果ページを表示]
    ResultPage --> End[終了]

    UserInput -->|情報が未入力| Error[エラーメッセージを表示]
    Error --> End
```

## 機能
データがサーバーに送信されると,サーバーは /result というルートでそのデータを受け取る.サーバーサイドでは,次のような処理が行われます：
1. 受け取った名前と年齢に基づいて,EJSテンプレート (result.ejs) にデータを渡して結果を表示する
1. 年齢に応じて異なるメッセージを表示します。
・20歳未満: 若いですね！というメッセージ
・20歳以上50歳未満: 大人の時間を楽しんでいるメッセージ
・50歳以上: 人生経験が豊富なメッセージ


---


### Gitでの管理
Githubに修正・追加したファイルをアップロードする
1. ターミナル上で編集したファイルのあるディレクトリに移動する
1. $ git add .
1. $ git commit -am 'コメント'
1. $ git push
この３つのコマンドを実行することでアップロードすることができる
### サーバーの立ち上げ方法
1. ターミナル上でターミナル上で適切なディレクトリに移動する
1. node app~.js を入力する
1. 終了する時は, control + c を押す



##　終わりに
app5.jsに３つ目のプログラムを追加したが,実行することがでできなかったため,新たにapp6.jsを作った.それにより実行することができたが,課題としてはapp5.jsに追加する形式なので,指示通りできなくてすみません.




### 参考資料
[JavaScript入門](https://www.javadrive.jp/javascript/#google_vignette)
[Qiita Markdown 書き方 まとめ](https://qiita.com/shizuma/items/8616bbe3ebe8ab0b6ca1)