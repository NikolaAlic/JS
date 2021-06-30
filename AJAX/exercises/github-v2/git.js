document.getElementById('button').addEventListener('click', loadUsers);
document.getElementById('search').addEventListener('search', loadUsers);


function loadUsers(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users");
    xhr.onload = function(){
        if(this.status == 200){
            var users = JSON.parse(this.responseText);
            //console.log(users);
            var output = '';
            //var user = document.getElementById('search').value;
            //console.log(user);
            for(var i in users){
                //if(users[i].login == user){
                    output +=
                    '<div class="user">' + 
                    '<img src="' +users[i].avatar_url+'" width="170" height="170" class="rounded-3">' +
                    '<ul>' +
                    '<li>ID: '+users[i].id+'</li>' +
                    '<li>Login: '+users[i].login+'</li>' +
                    '</ul>' + 
                    '</div>';
                //}
            }
            document.getElementById('users').innerHTML = output;
        }
    }
    xhr.send();
}
