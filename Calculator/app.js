const buttons=document.querySelectorAll('button');
const screen=document.getElementById('screen');


for(let button of buttons){
    button.addEventListener('click',(e)=>{
       const txt=e.target.innerText;
       if(txt==='C'){
        screen.value="";
       }
       else if(txt==='x'){
        screen.value+='*';
       }
       else if(txt==='='){
        try{
            screen.value=eval(screen.value);
        }
        catch(e){
            screen.value="Invalid Operation";
        }
       
       }
       else{
        screen.value+=txt;
       }
       
    });
}