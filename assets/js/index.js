$(document).ready(function(){

$(".favorito-btn").click(function(){

let producto = $(this).closest(".producto");
let nombre = producto.find("h5").text();
let img = $(this).data("img");

if(producto.hasClass("favorito")){

producto.removeClass("favorito");

$("#listaFavoritos .favorito-item").filter(function(){
return $(this).data("nombre") === nombre;
}).remove();

}else{

producto.addClass("favorito");

let item = `
<div class="list-group-item favorito-item" data-nombre="${nombre}">

<div class="favorito-info">
<img src="${img}" class="favorito-img">
<span>${nombre}</span>
</div>

<button class="btn btn-danger btn-sm eliminar-favorito">
❌
</button>

</div>
`;

$("#listaFavoritos").append(item);

}

});


/* eliminar desde la lista */

$(document).on("click",".eliminar-favorito",function(){

let item = $(this).closest(".favorito-item");
let nombre = item.data("nombre");

item.remove();

/* quitar marca del producto */

$(".producto").each(function(){

let nombreProducto = $(this).find("h5").text();

if(nombreProducto === nombre){

$(this).removeClass("favorito");

}

});

});

});