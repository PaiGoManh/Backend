fetch('https://jsonplaceholder.typicode.com/comments')

    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => {
        console.log(error);
    });