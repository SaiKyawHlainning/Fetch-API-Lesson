// Get from text file
document.getElementById('button1').addEventListener('click', getText);

function getText() {
  fetch('text.txt')
    .then((res) => res.text())
    .then((data) => (document.getElementById('output1').innerHTML = data))
    .catch((error) => console.log(error));
}

// Get from   the JSON file
document.getElementById('button2').addEventListener('click', getJson);

function getJson() {
  fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let output = '';

      data.forEach(function (user) {
        output += `<ul>
          <li>${user.name}</li>
        </ul>`;
      });

      document.getElementById('output2').innerHTML = output;
    })
    .catch((error) => console.log(error));
}

// Get from External API
document.getElementById('button3').addEventListener('click', getExternal);

function getExternal() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let output = '';

      data.forEach(function (user) {
        output += `
        <ul>
        <li>${user.name}</li>
      </ul>
        `;
      });

      document.getElementById('output3').innerHTML = output;
    })
    .catch((error) => console.log(error));
}
