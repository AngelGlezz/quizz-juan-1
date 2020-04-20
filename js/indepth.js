var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;

function countMaxValue(array_elements) {

	var maxValue = 0;
	var maxNum = -1;

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                
                if(cnt > maxValue ){
                	maxValue = cnt;
                	maxNum = current;
                }
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        if(cnt > maxValue ){
           maxNum = current;
        }
    }

    return maxNum;

}

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {
				  "preguntas": [
				    {
				      "pregunta": "1",
				      "respuestas": [
				        {
				          "respuesta": "Menos de 3",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Más de 3",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "2",
				      "respuestas": [
				        {
				          "respuesta": "Tus profesores",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Tus compañeros",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "3",
				      "respuestas": [
				        {
				          "respuesta": "Pasabas desapercibido",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Eras muy popular",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "4",
				      "respuestas": [
				        {
				          "respuesta": "Sin internet",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Online",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "5",
				      "respuestas": [
				        {
				          "respuesta": "Sí",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "No",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "6",
				      "respuestas": [
				        {
				          "respuesta": "Drama",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Acción",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "7",
				      "respuestas": [
				        {
				          "respuesta": "Quedarte tranquilo en casa",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Salir y conocer nuevos lugares",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "8",
				      "respuestas": [
				        {
				          "respuesta": "Cumbias",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Reggaeton",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "9",
				      "respuestas": [
				        {
				          "respuesta": "Adidas",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Nike",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "10",
				      "respuestas": [
				        {
				          "respuesta": "Crear oportunidades",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Finalizar una jugada con gol",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "11",
				      "respuestas": [
				        {
				          "respuesta": "Sí",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "No",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "12",
				      "respuestas": [
				        {
				          "respuesta": "Esquiar en la nieve",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "La playa",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "13",
				      "respuestas": [
				        {
				          "respuesta": "Azul",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Rojo",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "14",
				      "respuestas": [
				        {
				          "respuesta": "Con barba",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Sin barba",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "15",
				      "respuestas": [
				        {
				          "respuesta": "Sí",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "No",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "16",
				      "respuestas": [
				        {
				          "respuesta": "Zurda",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Ambos",
				          "tipo": "false"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.png" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000); 
		var respuesta = new Array();
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			$(this).addClass("select");
			respuesta.push(respuesta_num);
			console.log(respuesta);
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
				
				if(respuesta.length == preguntas.length){
					var total = countMaxValue(respuesta);
					console.log(total);
					window.setTimeout(function(){
						console.log(total);
						finish_test(total);
					});
				}
			return respuesta;
		});
		
		
		
});

var totalfb = "";
function finish_test(total){

	console.log("time2");
	console.log(total);
	
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	var img = total;
	console.log(total);

	if (img == 0) {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='images/respuestas/0.png'>");
		totalfb = "Messi"
	} else if (img == 1) {
		$("#indepth_resultados").css({
			"visibility": "visible",
			"position":"fixed",
			"top": 0,
			"left": -ventana_ancho
		});
		$(".inner").append("<img src='images/respuestas/1.png'>");
		totalfb = "Bicho";
	}

	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$("#indepth_twittear").click(function(){
  		var text = "";
		if (total == 0) {
			text = encodeURIComponent("¡Eres un D10S como Messi!");
		} else if (total == 1) {
			text = encodeURIComponent("¡Siuuuuu! ¡Eres como 'El Comandante'!");
		}
		
		var url = encodeURIComponent("http://juanfutbol.com/indepth/xxx");
		window.open("https://twitter.com/share?text="+text+"&hashtags=JFQuizz&url="+url,"","width=500, height=300");
	});

	$("#indepth_facebook").click(function(){
		var url = encodeURIComponent("http://juanfutbol.com/indepth/xxx?m="+totalfb);
		window.open("https://www.facebook.com/sharer/sharer.php?u="+url,"","width=500, height=300");
	});
}

var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	/*$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});*/
});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    /*$("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});*/
});


