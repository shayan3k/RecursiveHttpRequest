const express = require("express");
var request = require("request");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);

  const recursiveHttpRequest = (url, index = 0) => {
    return new Promise((resolve) => {
      const httpRequest = request(url, function (error, response, body) {
        // console.log("error = ", error);
        // console.log("response = ", response);
        // console.log('body = ' , body);
        if (index < 3) {
          console.log("index number: " + error);
          return resolve(recursiveHttpRequest(url, ++index));
        } else {
          console.log(response);
          return resolve();
        }
      });
    });
  };

  recursiveHttpRequest("http://www.varzesh3.com/").then(() =>
    console.log("done")
  );
});
