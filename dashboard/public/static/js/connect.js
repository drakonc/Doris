document.addEventListener('DOMContentLoaded', function(){

    form_connect_login = document.getElementById('form_connect_login');

    if(form_connect_login) {
        form_connect_login.addEventListener('submit', function(e) {
            e.preventDefault();
            connect_user_login();
        });
    }

});

function connect_user_login() {
    loader_action_status('show');
    const url = `${base}/api-js/connect/login`;
    var http = new XMLHttpRequest();
    http.open('POST',url,true);
    http.setRequestHeader('X-CSRF-TOKEN',csrftoken)
    http.onreadystatechange = function() {
        if(this.readyState == '4' && this.status == "200") {

        }

        if(this.status != 200) {
            loader_action_status('hide');
            var data = {
                title: "Doris App",
                type: 'Error',
                msg: 'Ha Ocurrido Un error desconocido',
            }
            mdalert(data)
            console.log('Error desconocido');
        }
    }

    http.send(new FormData(document.getElementById('form_connect_login')));
}
