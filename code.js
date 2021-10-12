/*--------------------- Menu*/

let openmenu = document.getElementById('aparecemenu');
let menu = document.getElementById('secjef');
let closemenu = document.getElementById('close')

/*----------------------- Pantallas de carga jefes*/
let gargola = document.getElementById('jefe1');
let tauro = document.getElementById('jefe2');
let manus = document.getElementById('jefe3');
let ornstein = document.getElementById('jefe4');
let cuatroreyes = document.getElementById('jefe5');
let artorias = document.getElementById('jefe6');
let demonio = document.getElementById('jefe7');
let gwyn = document.getElementById('jefe8');

/*------------------------ Info Jefes*/

let descgar = document.getElementById('sobregargola');
let desctauro = document.getElementById('sobretauro');
let descmanus = document.getElementById('sobremanus');
let descorns = document.getElementById('sobreorns');
let descreyes= document.getElementById('sobrereyes');
let descartorias = document.getElementById('sobreartorias');
let descdemonio = document.getElementById('sobredemon');
let descgwyn = document.getElementById('sobregwyn');

/*--------------------- Botones pantalla de carga jefes*/
let cargaGargola = document.getElementById('gargola');
let cargaTauro = document.getElementById('tauro');
let cargaManus = document.getElementById('manus');
let cargaOrnysmo = document.getElementById('ornysmo');
let cargaCuatroreyes = document.getElementById('cuatroreyes');
let cargaArtorias = document.getElementById('artorias');
let cargaDemon = document.getElementById('demon');
let cargaGwyn = document.getElementById('gwyn');

openmenu.addEventListener('click',(e)=>{
        menu.style.display='flex';
        setTimeout(()=>{
            menu.style.opacity="100%"
        },410)
});
closemenu.addEventListener('click',(e)=>{
    menu.style.opacity='0';
        setTimeout(()=>{
            menu.style.display="none"
        },410)
})
cargaGargola.addEventListener('click',(e)=>{
    menu.style.opacity='0';
        setTimeout(()=>{
            menu.style.display="none"
        },310)

    gargola.style.display='flex';
        setTimeout(()=>{
            gargola.style.opacity="100%"
        },10)

    gargola.style.opacity='0';
        setTimeout(()=>{
            gargola.style.display="none"
        },6010)

    descgar.style.display='flex';
        setTimeout(()=>{
            descgar.style.opacity="100%"
        },1910)
})
cargaTauro.addEventListener('click',(e)=>{
    menu.style.opacity='0';
        setTimeout(()=>{
            menu.style.display="none"
        },310)

    tauro.style.display='flex';
        setTimeout(()=>{
            tauro.style.opacity="100%"
        },10)

    tauro.style.opacity='0';
        setTimeout(()=>{
            tauro.style.display="none"
        },6010)

    desctauro.style.display='flex';
        setTimeout(()=>{
            desctauro.style.opacity="100%"
        },1910)
})
cargaManus.addEventListener('click',(e)=>{
    menu.style.opacity='0';
        setTimeout(()=>{
            menu.style.display="none"
        },310)

    manus.style.display='flex';
        setTimeout(()=>{
            manus.style.opacity="100%"
        },10)

    manus.style.opacity='0';
        setTimeout(()=>{
            manus.style.display="none"
        },6010)

    descmanus.style.display='flex';
        setTimeout(()=>{
            descmanus.style.opacity="100%"
        },1910)
})
cargaOrnysmo.addEventListener('click',(e)=>{
    menu.style.opacity='0';
        setTimeout(()=>{
            menu.style.display="none"
        },310)

    ornstein.style.display='flex';
        setTimeout(()=>{
            ornstein.style.opacity="100%"
        },10)

    ornstein.style.opacity='0';
        setTimeout(()=>{
            ornstein.style.display="none"
        },6010)
    
    descorns.style.display='flex';
        setTimeout(()=>{
            descorns.style.opacity="100%"
        },1910)
})
cargaCuatroreyes.addEventListener('click',(e)=>{
    menu.style.opacity='0';
        setTimeout(()=>{
            menu.style.display="none"
        },310)

    cuatroreyes.style.display='flex';
        setTimeout(()=>{
            cuatroreyes.style.opacity="100%"
        },10)

    cuatroreyes.style.opacity='0';
        setTimeout(()=>{
            cuatroreyes.style.display="none"
        },6010)
    
    descreyes.style.display='flex';
        setTimeout(()=>{
            descreyes.style.opacity="100%"
        },1910)
})
cargaArtorias.addEventListener('click',(e)=>{
    menu.style.opacity='0';
        setTimeout(()=>{
            menu.style.display="none"
        },310)

    artorias.style.display='flex';
        setTimeout(()=>{
            artorias.style.opacity="100%"
        },10)

    artorias.style.opacity='0';
        setTimeout(()=>{
            artorias.style.display="none"
        },6010)

    descartorias.style.display='flex';
        setTimeout(()=>{
            descartorias.style.opacity="100%"
        },1910)
})
cargaDemon.addEventListener('click',(e)=>{
    menu.style.opacity='0';
        setTimeout(()=>{
            menu.style.display="none"
        },310)

    demonio.style.display='flex';
        setTimeout(()=>{
            demonio.style.opacity="100%"
        },10)

    demonio.style.opacity='0';
        setTimeout(()=>{
            demonio.style.display="none"
        },6010)
    
    descdemonio.style.display='flex';
        setTimeout(()=>{
            descdemonio.style.opacity="100%"
        },1910)
})
cargaGwyn.addEventListener('click',(e)=>{
    menu.style.opacity='0';
        setTimeout(()=>{
            menu.style.display="none"
        },310)

    gwyn.style.display='flex';
        setTimeout(()=>{
            gwyn.style.opacity="100%"
        },10)

    gwyn.style.opacity='0';
        setTimeout(()=>{
            gwyn.style.display="none"
        },6010)
    
    descgwyn.style.display='flex';
        setTimeout(()=>{
            descgwyn.style.opacity="100%"
        },1910)
})