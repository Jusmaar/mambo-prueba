$(function(){
	
var tabla = $('#tabla');
/*Plantilla*/
 var template = '<tbody>'+
        '<tr>'+
            '<td>campo1</td>'+
            '<td>campo2</td>'+
            '<td>campo3</td>'+
            '<td>campo4</td>'+
            '<td>campo5</td>'+
            '<td><img src="campo6" height="40"></img></td>'+
        '</tr>'+
    '</tbody>';

/*Entramos a trabjar con el DOM*/
  	$("#tabla tbody tr").each(function (index) 
        {

        	/* Guardamos los campos de cada usuario*/
            var campo1, campo2, campo3, campo4, campo5, campo6;
            $(this).children("td").each(function (index2) 
            {

                switch (index2) 
                {
                    case 0: campo1 = $(this).text();
                            break;
                    case 1: campo2 = $(this).text();
                            break;
                    case 2: campo3 = $(this).text();
                            break;
                    case 3: campo4 = $(this).text();
                            break;
                    case 4: campo5 = $(this).text();
                            break;
                     /* Inicio del Modal */
                    case 5: campo6 = $(this).find('img').click(function(){
                    	$(this).addClass('modal');
                    }).attr('src') 
                           break;        
                  	
                }

            })
            /* Fin_Guardamos los campos de cada usuario*/

            /*Realizamos el filtro por nombre*/
            	$('form')
					.submit(function(ev){
						ev.preventDefault()
						var busqueda = $(this)
							.find('input[type="text"]')
							.val()
						if(campo1 == busqueda){
							$('#tabla').find('tbody').remove()
							var find_nombre = template
											.replace('campo1',campo1)
											.replace('campo2',campo2)
											.replace('campo3',campo3)
											.replace('campo4',campo4)
											.replace('campo5',campo5)
											.replace('campo6',campo6)
											
							var $find_nombre = $(find_nombre)
							$('#tabla').append($find_nombre)
						}

					})
			/*Fin_/Realizamos el filtro por nombre*/

			/*Ordenar Ascendente*/
				



			/*Fin_Ordernar Ascendente*/
			           
        })

		  

})

function modal(){
		  	alert('Hola')
}
