const base = `${location.protocol}//${location.host}`;
const route = document.getElementsByName("routeName")[0].getAttribute("content");
const csrftoken = document.getElementsByName("csrf-token")[0].getAttribute("content");

document.addEventListener('DOMContentLoaded', function() {
    var loader_action = document.getElementById('loader_action');
    loader_action_status('show');
    setTimeout(()=>{
        loader_action_status('hide');
    }, 500)
});

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

