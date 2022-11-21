module.exports = `
<html>
<head></head>
<body>
<h2>this is a client-test page</h2>
<script>var sendRequest = function () {
  var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:3030/jobs", requestOptions)
  .then(response => response.text())
  .then(result => {
    document.getElementById("main").innerHTML = result;
    console.log(result);
  })
  .catch(error => console.log('error', error));
}</script>
<button onclick="sendRequest()">send request</button>
<h3>result:</h3>
<p id="main"></p>
</body>
</html>
`;
