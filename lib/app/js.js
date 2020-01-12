
import {jJerryWidgets} from '../vendor/jjerry/jjerry-widgets.js';
for(var i = 0; i<1000000; i++) var tmp = i; tmp = null; // delay load

$(document).ready(function() {

    $('#closeModal').on("click", function() {
        jJerryWidgets("#modal", {
            wide: true,
            width: "800px"
        }).modalClose();
    });
     
     $('#txtCliente').keyup(function(e){
		if(e.keyCode == 13) {

			let search = $('#txtCliente').val();

			if(!search || search.length < 3) {return}

		    $.getJSON('sys/sql.php?cliente='+search, function(data){
		    	
                if(data.length == 0) {
                    alert("Nada Encontrado");
                    return;
                }

                jJerryWidgets("modal", {
                    timeout: 0,
                    wide: true,
                    loop: false,
                    width: "800px",
                    bgcolor: "#FFFFFF",
                    color: "#000000",
                    bordercolor: "#EEEEEE",
                    bgscreen: "#000000"
                }).modalOpen();

                /*jJerryWidgets("modal", {
                    timeout: 0
                }).fadeIn(1, {blocker:true});*/

                /*jJerryWidgets("modal", {
                    timeout: 0
                }).visible({blocker:true});*/

		    	$("#modal_ul").html("");
		    	
                $(data).each(function(key, value) {
		            var $random = [];
		            var $id     = Math.floor(Math.random() * 1000);
		            for(var x = 0; x <= $random.length; x++) {
		            	if($random.indexOf($id) == -1) {
		            		$random.push($id);
		            		break;
		            	} else {
		            		$id = Math.floor(Math.random() * 1000);
		            	}
		            }
		            $("#modal_ul").append("<li id='li_"+$id+"'>" + value.response + "</li>");
		            $("#li_"+$id).on("click", function(){
                        $("#txtCliente").val(value.response);
                        $('#idUnidade').val(data[0].unidade);
                        jJerryWidgets("#modal", {
                            wide: true,
                            width: "800px"
                        }).modalClose();

                        /*jJerryWidgets("modal", {
                            timeout: 0
                        }).fadeOut(1, {blocker:true});*/

                        /*jJerryWidgets("modal", {
                            timeout: 0
                        }).hidden({blocker:true});*/
		            });
		        });

		    });
		}
     });
     
     $('#txtUnidade').keyup(function(e){
        if(e.keyCode == 13) {

            let search = $('#txtUnidade').val();

            if(!search || search.length < 3) {return}

            if($('#idUnidade').val() == "" || !search || $('#txtCliente').val() == "") {
                alert("Primeiro informe um cliente");
                return;
            }

            $.getJSON('sys/sql.php?cliente='+$('#idUnidade').val()+'&unidade='+search, function(data){
                
                if(data.length == 0) {
                    alert("Nada Encontrado");
                    return;
                }

                jJerryWidgets("modal", {
                    timeout: 0,
                    wide: true,
                    width: "800px",
                    bgcolor: "#FFFFFF",
                    color: "#000000",
                    bordercolor: "#EEEEEE",
                    bgscreen: "#000000"
                }).modalOpen();

                $("#modal_ul").html("");
                
                $(data).each(function(key, value) {
                    var $random = [];
                    var $id     = Math.floor(Math.random() * 1000);
                    for(var x = 0; x <= $random.length; x++) {
                        if($random.indexOf($id) == -1) {
                            $random.push($id);
                            break;
                        } else {
                            $id = Math.floor(Math.random() * 1000);
                        }
                    }
                    $("#modal_ul").append("<li id='li_"+$id+"'>" + value.response + "</li>");
                    $("#li_"+$id).on("click", function(){
                        $("#txtUnidade").val(value.response);
                        jJerryWidgets("#modal", {
                            wide: true,
                            width: "800px"
                        }).modalClose();
                    });
                });

            });
        }
     });
});
