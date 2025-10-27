// 'User Strict'

// async function getUsers(){
//     const url = 'https://randomuser.me/api/';
//     const response = await fetch(url);
//     console.log(response);
// }

// function loadUsers(){
//     const users = getUsers()
//     console.log(users)
// }
// loadUsers()

// 'User Strict'

// async function getUsers(){
//     const url = 'https://randomuser.me/api/';
//     const response = await fetch(url);
//     const data = await response.json()
//     console.log(await data.results);
// }

// function loadUsers(){
//     const users = getUsers()
//     console.log(users)
// }
// loadUsers()

// 'User Strict'

// async function getUsers(){
//     const url = 'https://randomuser.me/api/';
//     const response = await fetch(url);
//     const data = await response.json()
//     return data.results;
// }

// async function loadUsers(){
//     const users = await getUsers()
//     console.log(users)
// }
// loadUsers()


//Requesting Multiple Users

// 'User Strict'

// async function getUsers(){
//     const url = 'https://randomuser.me/api/?results=10&nat=BR&gender=female';
//     const response = await fetch(url);
//     const data = await response.json()
//     return data.results;
// }

// async function loadUsers(){
//     const users = await getUsers()
//     console.log(users)
// }
// loadUsers()


'User Strict'

async function getUsers(){
    const url = 'https://randomuser.me/api/?results=6&nat=BR';
    const response = await fetch(url);
    const data = await response.json()
    return data.results;
}

async function loadUsers(){
    const users = await getUsers()
    const userContainer = document.getElementById('user-container')
    users.forEach(user => {
    const card = document.createElement('article')
    card.className = 'user-card'
    card.innerHTML = `
    <img
    src= "${user.picture.large}"
    alt="foto de ${user.name.first}"
    clallName = "user-image"
    >
    <h2 class="user-name">${user.name.first} ${user.name.last}</h2>
    <p>${user.email}</p>
    <p>${user.cell}</p>
   

    `

   
    userContainer.appendChild(card)

    console.log(user)
    });
}
loadUsers()