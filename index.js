var dispD = document.getElementById('display'),
    st1 = document.getElementById('st1'),
    st2 = document.getElementById('st2'),
    stS = null,
    stInp = document.getElementById('stickerUrl'),
    stC = document.getElementById('cursor'),
    stH = 100;

document.getElementById('bgcolor').addEventListener('change', function(){
    dispD.style.backgroundColor = this.value;
    /*  --> this <-- this is bg color, the element calling the function */
    
});

st1.addEventListener('click', function(){
    changeImage(this);
});

st2.addEventListener('click', function(){
    changeImage(this);
});

dispD.addEventListener('click', function(ev){
    
    if (stS != null)
        {
    var newImg = document.createElement('img');
    newImg.src = stS;
    newImg.className = 'displayStickers';
    newImg.style.height = stH+'px';
    dispD.appendChild(newImg);
    
    
    console.log(ev.pageX, ev.pageY);
    var imgwidth = newImg.clientWidth,
        Wcompensation = imgwidth*0.5,
        Hcompensation = stH*0.5;
    console.log(imgwidth);
    
    newImg.style.left = (ev.pageX-Wcompensation)+'px';
    newImg.style.top = (ev.pageY-Hcompensation)+'px';
    }
    /* to center on click, subtract half of width of img */
});


stInp.addEventListener('keyup', function(ev){
   if(ev.keyCode == 13) {
       document.getElementById('stickers').style.overflow = 'auto';
       var newSticker = document.createElement('img');
       newSticker.src = stInp.value;
       newSticker.className = 'stickers';
       document.getElementById('stickers').appendChild(newSticker);
       stInp.value = '';
       newSticker.addEventListener('click', function()
                                  {
            changeImage(this);
       });
   } 
});

dispD.addEventListener('mousemove', function(ev){
    var cWidth = stC.clientWidth,
        wCursorComp = cWidth*0.5;
    
    stC.style.top = (ev.pageY-25)+'px';
    stC.style.left = (ev.pageX-wCursorComp)+'px';
});


function changeImage(el){
    stS = el.src;
    stC.src = stS;
    dispD.style.cursor = 'none';
};

document.getElementById('stickerHeight').addEventListener('keyup', function(ev){
    if (ev.keyCode == 13) {
        stH = document.getElementById('stickerHeight').value;
        document.getElementById('stickerHeight').value = '';
        
                          }
});




