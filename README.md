# Prerequisites 

```
phantomjs --version
2.1.1
```

```
node --version
v4.4.7
```

# How to test

```
npm i
node index.js
phantomjs phantomjs.js
```

At first time you might not see the error, but run phantomjs again, and you will see (along with some stupid errors but anyway)

```
Opening the page now..
2016-09-30T15:53:15 [CRITICAL] QNetworkReplyImpl: backend error: caching was enabled after some bytes had been written
```