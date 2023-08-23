const color=()=>{ 
    const random=Math.floor(Math.random()*16777215).toString(16);
    const randomCode= `#${random}`;
    document.body.style.background=randomCode;

    const colortext=document.getElementById('code-Gene');
    colortext.innerHTML=randomCode;
    
    
    
   
}


//after click color
const click=document.getElementById('btn'); 
click.addEventListener('click' ,color);


color()//initial color
