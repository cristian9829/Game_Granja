$(document).ready(function(){/*Inicializacion de JQuery*/
	
	$("#btn-vaca").click(function(){ /*Evento Vaca*/
		$("body").removeClass("cursorCorte");
  		$("body").removeClass("cursorConstruir");
  		$("#mensaje").hide("fast");

		$("#vaca").toggle("slow",function(){
			$("#mensaje").text("La vaca hace muuuu");
		})
	})

	$("#btn-cerdo").click(function(){/*Evento cerdo*/
		$("body").removeClass("cursorCorte");
  		$("body").removeClass("cursorConstruir");
  		$("#mensaje").hide("fast");
		$("#cerdo").toggle("slow",function(){
			$("#mensaje").text("El cerdo hace Oink!!!");
		})
	})

	$("#btn-gallina").click(function(){/*Evento gallina*/
		$("body").removeClass("cursorCorte");
  		$("body").removeClass("cursorConstruir");
  		$("#mensaje").hide("fast");

		$("#gallina").toggle("slow",function(){
			$("#mensaje").text("La gallina hace cloack");
		})
	})

	$("#btn-oveja").click(function(){/*Evento oveja con velocidad FAST*/
		$("body").removeClass("cursorCorte");
  		$("body").removeClass("cursorConstruir");
  		$("#mensaje").hide("fast");

		$("#oveja").toggle("fast",function(){
			$("#mensaje").text("La oveja hace beee!!");
		})
	})

	$("#bCorte").click(function(){ /*Cursor icono tijera*/
		$(".animal, #mensaje").hide("fast","linear");
		$("body").removeClass("cursorConstruir");
		$("body").addClass("cursorCorte");
		$(".arbusto").hover(function(){
			$(this).hide();
		})
	})

	$("#bConstruir").click(function(){/*Cursor icono herramienta*/
		$(".animal, #mensaje").hide("fast","linear");
    	$("body").removeClass("cursorCorte");
		$("body").addClass("cursorConstruir");

		$(".cerca").show("slow",function(){
			$(".animalP").show("fast",function(){
				$("h1").text("Construye una cerca");
			})
		})
	})

	//Función que activa el movimiento de los objetos del corral al hacer click en ellos
  $(".cerca, .animalP").mousedown(function(){
    var self = $(this); //Declarando la variable
    $(this).on('dragstart', function(event) {/*Incocando el evento dragstart*/
      event.preventDefault();
    });
    //Función anidada que cambia la posición del elemento si se presiona el click y se mueve
    $("body").mousemove(function(event){
      self.css("left", function(){/*para determinar la ubicacion que va quedar*/
        var newLeft = event.pageX;
        return newLeft+"px";
      });
      self.css("top", function(){/*para determinar la ubicacion que va quedar*/
        var newLeft = event.pageY;
        return newLeft+"px";
      });
    });
  });

  //Función que posiciona el elemento en la ubicación en que el mouse se levanta
  $("body").mouseup(function(event){
    $(this).off("mousemove");/*No ejecutar la funcion creada anteriormente*/
    var x = $(event.target).css("left");
    var y = $(event.target).css("top");
    $(event.target).css("left",x);
    $(event.target).css("top",y);
  });


  //Acción que termina el juego con el mensaje Muy Bien
  $("#bCursor").on("click", function(){
   	$("body").removeClass("cursorCorte");
  	$("body").removeClass("cursorConstruir");
    $("#mensaje").hide("fast");

    $(".cerca, .animalP, .animal, #mensaje").hide(1000, function(){
      $("h1").text("Muy Bien!");
    })
  });

  $("#bCursor").on("click",function(){
  	$(".cerca, .animalP").hide(1000,function(){
  		$("#mensaje").hide();
  		$("h1").text("Muy Bien!!");
  	})
  	alert("Ha terminado el juego Felicidades");
  })

})