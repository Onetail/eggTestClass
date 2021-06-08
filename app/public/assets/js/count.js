function countQuery() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch('http://localhost:7001/user/totalCount/query', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
}
function countCache() {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch('http://localhost:7001/user/totalCount/cache', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
}
