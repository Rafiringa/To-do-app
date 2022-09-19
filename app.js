$(document).ready(function(){

var btn_ajouter = $("#ajouter") ;
var input_ajouter = $("#input") ;
var myList = $("#myList") ;


btn_ajouter.click(function() {
    var valeur_input = input_ajouter.val() ;
    var structure = '<li class="list-group-item"><input class="checker" data-etat="off" type="checkbox"> <span class="text-muted">'+valeur_input+'</span><a href="#" class="btn btn-outline-danger float-right supprimer">Supprimer</a></li>' ;
    myList.append(structure) ;



    // Evenement boutton pour supprimer:
    // var suppr = $(".supprimer") ;
    // console.log(suppr);

        $(".supprimer").click(function(e) {
         e.stopImmediatePropagation();
            //console.log($(this));
            $(this).parent().css({
                'display' : 'none',
            }); 
        })


    // Evenement pour checkbox:
    // var checker = $(".checker") ;
        $(".checker").click(function(a) {
            a.stopImmediatePropagation() ;
            //console.log($(this));
            // var etat = this.val("data-etat") ;
            if($(this).attr("data-etat") == "off") {
                $(this).attr("data-etat","on") ;
                $(this).next().css({'textDecoration' : 'line-through'})
            }
            else if($(this).attr("data-etat") == "on") {
                $(this).attr("data-etat","off") ;
                $(this).next().css({'textDecoration' : 'none'}) 
            }
            
        })



})

})

// var fruits = ['poire','pomme','banane'] ;

// // Longueur d'un tableau:
// fruits.length -> 3

// fruits[0]
// fruits[2] 
// fruits[5]

// for(var i = 0; i < fruits.length; i++) {

// }

// stopImmediatePropagation() -> Arrete la propagation d'un evenement
// preventDefault -> enlever l'evenement par defaut d'une balise -> pour les boutons par exemple;