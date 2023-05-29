const inp=document.querySelector('#inp');
const btn=document.querySelector('#btn');
const list=document.querySelector('#list');


btn.addEventListener('click',()=>{
    const todo=inp.value;
    if(todo===""){
        alert('Empty List Please add items');
        return;
    }
    const li=document.createElement('li');
    li.innerText=todo;

 
    li.addEventListener('click',()=>{
        li.remove();
       
    })
    list.append(li);
    inp.value="";
})