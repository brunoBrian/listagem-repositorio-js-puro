const minhaPromisse = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK');
  }, 2000);
});

// Chamada normal com then
minhaPromisse()
  .then( response => {
    console.log(response);
  });

// Chamada com async await
const executaPromisse = async () => {
  console.log(await minhaPromisse());
  console.log(await minhaPromisse());
}

executaPromisse();