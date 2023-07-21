const base = `${location.protocol}//${location.host}`;
const route = document.getElementsByName("routeName")[0].getAttribute("content");
const csrftoken = document.getElementsByName("csrf-token")[0].getAttribute("content");

document.addEventListener('DOMContentLoaded', function() {
    var loader_action = document.getElementById('loader_action');
    var show_password = document.getElementsByClassName("show_password")
    if(show_password){
        for(var i= 0;i<show_password.length ;i++){
            show_password[i].addEventListener('click', function(e){
                e.preventDefault();
                show_password_fn(this.getAttribute('id'))
            });
        }
    }
});

// Loader action functio
function loader_action_status(status) {
    if(status === "show") {
        document.getElementsByTagName('body')[0].style.overflow = "hidden"
        loader_action.style.display = 'flex';
        loader_action.classList.remove('loader_action_animation_hide')
        loader_action.classList.add('loader_action_animation_show')
    }

    if (status === "hide") {
        document.getElementsByTagName('body')[0].style.removeProperty('overflow')
        loader_action.style.display = 'none';
        loader_action.classList.add('loader_action_animation_hide')
        loader_action.classList.remove('loader_action_animation_show')

    }
}

// Show password field function
function show_password_fn(activador) {
    var act  = document.getElementById(activador)

    target = act.getAttribute('data-target')
    estado = act.getAttribute('data-state')

    if(estado == "hide"){
        document.getElementById(target).setAttribute('type','text')
        act.setAttribute('data-state','show')
        act.innerHTML = lang['hide_password']
    }

    if(estado == "show") {
        document.getElementById(target).setAttribute('type','password')
        act.setAttribute('data-state','hide')
        act.innerHTML = lang['show_password']
    }
}

