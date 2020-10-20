// action can be "element" 動態
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
// 靜態 element選取
var ul = document.querySelector("ul");
var delbut = document.getElementsByClassName("delete");
var todolist = document.getElementsByTagName("li")
// var todolist = ul.getElementsByTagName("li")

// to check about the event
// for (i=0; i < todolist.length; i++){
//     delbut[i].addEventListener("click",function(event){console.log(event.target.parentNode)})
// }

///////////////////original items////////////////////////

// delete the first 6 elements while clicking the "delete" button
function remove(){
for (i=0; i < todolist.length; i++){
        delbut[i].addEventListener("click",removeParent)
    }
}


// Remove Parents (parents of button is <li>!!!!!!!
function removeParent(evt) {
    evt.target.parentNode.remove();
  }

// click to strikethrough the text
function line(){
for (i=0; i < todolist.length; i++){
        todolist[i].addEventListener("click",strike)
    }
}

function strike(event){
	event.target.classList.toggle("done");
}

// Codding below creates the same effect as the one above
// for (i=0; i < todolist.length; i++){
//     todolist[i].onclick=strike
// }


////////////////// Add new items to the list////////////////////

 function textlength(){
     return input.value.length;
 }

 function addnewitem(){

    //add new li 
    var li = document.createElement("li");
    ul.appendChild(li);

    //add delete button before the new items
    var delbutton = document.createElement("button");
    var textonbutton = document.createTextNode("X");
    delbutton.appendChild(textonbutton);
    delbutton.classList.add("delete"); //add " class="delete" " to the new buttons, so the new buttons will have the same attributes as the old ones
    li.appendChild(delbutton); //
    
    //add new items
    var text = document.createTextNode(input.value);
    li.appendChild(text);
    
     

    

    remove();
    line();
    input.value= "";
 }


//original item
remove();
line();

//input after clicking enter
 button.addEventListener("click", function(){
    if(textlength() > 0 ){
    addnewitem();
     }
})


//input after pressing "enter" on keyboard
 input.addEventListener("keypress", function(event){
    if(textlength() > 0 && event.keyCode === 13){
        addnewitem();
    }
})