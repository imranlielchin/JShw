
class TodoApp {

    static addTodo(product){

        var textValue = document.getElementById('textValue').value,
        listNode = document.getElementById('list'),
        liNode = document.createElement("LI"),
        txtNode = document.createTextNode(textValue);

     liNode.appendChild(txtNode);
     listNode.appendChild(liNode);

     var count=document.getElementById("list").getElementsByTagName("li").length;
     document.getElementById("demo").innerHTML =  count;

    } 
}









