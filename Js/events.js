//option 1 directly added to html element
//<button onclick="document.body.style.backgroundColor='yellow'">Make me

//option 2 add function on html element
//<button onclick="makeRed()">Make me red</button>
function makeRed(){
    document.body.style.backgroundColor='red'
}

//option 3 added by id 
const findBlue=document.getElementById('makeBlue')
       findBlue.onclick=blue
       function blue() {
        document.body.style.backgroundColor='blue'
       }

//option 3 another
const findPurple=document.getElementById('makePurple')
       findPurple.onclick=function() {
        document.body.style.backgroundColor='purple'
       }

 //option 4 
 const findPink=document.getElementById('makePink')
 findPink.addEventListener('click',pink)
 function pink() {
  document.body.style.backgroundColor='pink'
 }   
 
 //option 4 another
 const findGreen=document.getElementById('makeGreen')
 findGreen.addEventListener('click',function(){
  document.body.style.backgroundColor='green'
 } )

 //option 5 final IMPORTANT
 document.getElementById('makeOrange').addEventListener('click', function(){
  document.body.style.backgroundColor='orange'
 } )
 

  