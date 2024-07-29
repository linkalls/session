# cookieとsession
cookieはクライアントサイドでsessionはサーバーサイド
### cookieの問題
セキュリティ面でクライアントサイドに保存されてるから改ざんできちゃう
4096byteが基本だから少ない

### session
データストア(dbとは限らない)のidをサーバーからcookieに入れて返す
session idがわかるとサーバー側でデータとれる

```bash
$ npm i express-session
```