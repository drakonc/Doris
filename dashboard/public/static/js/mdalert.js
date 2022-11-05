document.addEventListener('DOMContentLoaded', function() {

    md_alert_btn_close = document.getElementById('md_alert_btn_close');
    if(md_alert_btn_close) {
        md_alert_btn_close.addEventListener('click', function(e) {
            e.preventDefault();
            md_alert_status('hide');
        });
    }

});

function callback_alert(params1,params2) {
    alert(params1);
}

function mdalert(data) {
    md_alert_content.innerHTML = "";
    if(data){
        if(data.title) {
            title = data.title
        }else{
            title = 'Md Alert'
        }

        content = '';
        content += `<h2>${title}</h2>`

        if(data.type) {
            content += `<div class="icon"><img src="${base}/static/images/${data.type}.png"/></div>`
        }

        if(data.msg) {
            msg = data.msg
        } else {
            msg = 'Error Desconocido'
        }

        content += `<h5>${msg}</h5>`

        if(data.msgs) {
            msgs = JSON.parse(data.msgs)
            if(msgs.length > 0){
                content += `<ul>`
                msgs.forEach(function(element, index) {
                    content += `<li><i class="bi bi-bullseye"></i> ${element}</li>`
                })
                content += `</ul>`
            }
        } else {
            msgs = 'Error Desconocido'
        }

        action_btn = '';
        if(data.action){
            action = JSON.parse(data.action)
            if(action.length > 0){
                action.forEach(function(element, index) {
                    console.log(element)
                    if(element.url){
                        action_btn += `<a href=${element.url} class="btn btn-${element.type}">${element.name}</a>`
                    }
                    else{
                        action_btn += `<a href="#" onclick="${element.callback}(${element.params}); return false;" class="btn btn-${element.type}">${element.name}</a>`
                    }
                })
            }
        }

        if(data.additional) {
            additional = JSON.parse(data.additional);
            if(additional.hideclose) {
                document.getElementById('md_alert_btn_close').style.display = 'none';
            }
            else {
                document.getElementById('md_alert_btn_close').style.display = 'block';
            }
         }

        md_alert_footer_other_btns.innerHTML = action_btn;
        md_alert_content.innerHTML = content;

        md_alert_status('show')
    }
}

function md_alert_status(status) {
    if(status === "show") {
        document.getElementsByTagName('body')[0].style.overflow = "hidden"
        md_alert_dom.style.display = 'flex';
        md_alert_dom.classList.remove('md_alert_animation_hide')
        md_alert_dom.classList.add('md_alert_animation_show')
    }

    if (status === "hide") {
        document.getElementsByTagName('body')[0].style.removeProperty('overflow')
        md_alert_dom.style.display = 'none';
        md_alert_dom.classList.add('md_alert_animation_hide')
        md_alert_dom.classList.remove('md_alert_animation_show')

    }
}
