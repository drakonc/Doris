var data = {
    title: "¿Deseas Eliminar?",
    type: 'Delete',
    msg: 'Si Elimina Este Elemento ya no lo podra recuperar',
    msgs: JSON.stringify(['Mensaje #1','Mensaje #2','Mensaje #3','Mensaje #1','Mensaje #2','Mensaje #3'])
 }

var data1 = {
	title: "¿Deseas Eliminar?",
    type: 'Delete',
    msg: 'Si Elimina Este Elemento ya no lo podra recuperar',
    action: JSON.stringify([{url:base+'/delete',name:'Si, Eliminar', type:'danger' },{url:base+'/delete',name:'Si, Eliminar', type:'primary' }])
}

var data2 = {
	title: "¿Deseas Eliminar?",
	type: 'Delete',
	msg: 'Si Elimina Este Elemento ya no lo podra recuperar',
	msgs: JSON.stringify(['Mensaje #1','Mensaje #2','Mensaje #3','Mensaje #1','Mensaje #2','Mensaje #3']),
	action: JSON.stringify([{url:base+'/delete',name:'Si, Eliminar', type:'danger' }])
}

var data3 = {
	title: "¿Deseas Eliminar?",
    type: 'Delete',
    msg: 'Si Elimina Este Elemento ya no lo podra recuperar',
    action: JSON.stringify([{callback:'callback_alert',params:"'params1', 'params2'",name:'Si, Eliminar', type:'danger' }])
}

var data4 = {
	title: "¿Deseas Eliminar?",
	type: 'Delete',
	msg: 'Si Elimina Este Elemento ya no lo podra recuperar',
	action: JSON.stringify([{callback:'callback_alert',params:"'params1', 'params2'",name:'Si, Eliminar', type:'danger' }]),
	additional: JSON.stringify({hideclose: true})
}