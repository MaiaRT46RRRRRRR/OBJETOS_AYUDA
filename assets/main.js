
var enviar = document.getElementById("enviar");
var records= document.getElementById("records");
var students=[];

 

enviar.addEventListener("click",function(){
var nombre=document.getElementById("nombre").value;
var apellido=document.getElementById("apellido").value;
var edad=document.getElementById("edad").value;
//var opcion= document.getElementsbyTagName("opcion").value;
var pais=document.getElementById("pais").value ;

 var student =[nombre,apellido,edad,pais];
 console.log(student);
  //student.push[name,techPoints,lifePoints,status];
  students.push(student);
 records.innerHTML= "<div>" + todos(nombre,apellido,edad,pais)+"</div>";
  
});

function printStudent(nombre,apellido,edad,pais){
  return "Nombre :" + nombre + " " + apellido +"<br>"+"edad :" + edad +
         "<br>" +"Pais:" + pais + "<br>" ;
};

function todos(){
  var lines = "";
  students.forEach(function(e){
  var line = printStudent(e[0],e[1],e[2],e[3]);
  lines += line +"<br><br>";
  });
  records.innerHTML= lines; 
};

