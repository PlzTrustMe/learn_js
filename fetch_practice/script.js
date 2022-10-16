'use strict'

const usersList = document.getElementById('users_list');
const getUserBtn = document.getElementById('users__get-user');

const state = {
    users: [],
}

const createUserPost = (user) => 
    `
    <div class="user">
        <div class="user_wrapper">
            <h1 class="wrapper_username">${user.name}</h1>
        </div>
    </div>
    `

const fillUserList = (user) => {
    usersList.innerHTML = '';

    if (user.length) {
        user.forEach((user) => usersList.innerHTML += createUserPost(user));
    }
};

getUserBtn.addEventListener('click', async () => {
    await getUserRequest()
    fillUserList(state.users)
});


const getUserRequest = async () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then((data) => data.json())
    .then((users) => state.users = state.users.concat(users))
};

