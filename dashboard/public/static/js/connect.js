document.addEventListener('DOMContentLoaded', function(){

    form_connect_login = document.getElementById('form_connect_login');

    if(form_connect_login) {
        form_connect_login.addEventListener('submit', function(e){
            e.preventDefault();
            connect_user_login();
        });
    }

});

function connect_user_login(){
    const url = `${base}/api-js/connect/login`;
    console.log(url)
}
