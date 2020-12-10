const pitanja = [
{
    pitanje:"Ko je osnivac kompanije APPLE",
    odgovori:{
        a:"Bil Gejts",
        b:"Ilon Mask",
        c:"Stiv Dzobs"
    },
    tacanOdgovor:"c",
},
{
    pitanje:"Kako se zvala prva programerka? Jedan programski jezik nosi njeno ime.",
    odgovori:{
        a:"Ada Bajron",
        b:"Karmen Elektra",
        c:"Java Script",
    },
    tacanOdgovor:"a"
},
{
    pitanje:"Kako se zove cuveni naucnik o kome govori film The Immitation Game",
    odgovori:{
        a:"Nikola Tesla",
        b:"Alen Tjuring",
        c:"Tomas Edison"
    },
    tacanOdgovor:"b"
},
{
    pitanje:"Koji je najstariji od sledecih programskih jezika",
    odgovori:{
        a:"C",
        b:"C++",
        c:"Pascal"
    },
    tacanOdgovor:"c"
},
{
    pitanje:"Kako se nazivao JavaScript prije nego je dobio trenutno ime",
    odgovori:{ a:"Java",
    b:"Mocha",
    c:"W3"
},
tacanOdgovor:"b",
}
];

const kvizDiv  =document.getElementById('kviz');
const rezultatDiv = document.getElementById('rezultat');
const zavrsiBtn = document.getElementById('zavrsi');

function pokreniKviz(){
    const output = [];
    pitanja.forEach(function(trenutnoPitanje,pitanjeInd){
        const odgovori = [];
        for(slovo in trenutnoPitanje.odgovori){
            odgovori.push(
                `<label>
                  <input type="radio" name="odgovor${pitanjeInd}" value="${slovo}" >
                  ${slovo} : ${trenutnoPitanje.odgovori[slovo]}
                  </label>`
              );
        }
        output.push(
            `
              <div class="pitanje">${trenutnoPitanje.pitanje}</div>
              <div class="odgovori"> ${odgovori.join('')} </div>
            `
          );
    });
    kvizDiv.innerHTML = output.join('');
}

function prikaziRezultat(){
    const odgovriDiv = kvizDiv.querySelectorAll('.odgovori');

  let brTacnih = 0;
 pitanja.forEach(function(trenutnoPitanje, pitanjeInd){
     const selektor = `input[name=odgovor${pitanjeInd}]:checked`;
     const odgovoreno = (document.querySelector(selektor) || {} ).value;
     if(odgovoreno === trenutnoPitanje.tacanOdgovor){
        brTacnih++;
        odgovriDiv[pitanjeInd].style.background = 'lightgreen';
      }else{
        odgovriDiv[pitanjeInd].style.background = 'red'; 
      }
    });
   rezultatDiv.innerHTML = `rezultat: <h3>${brTacnih} od ${pitanja.length}</h3>`;
     document.getElementById("time").style.display="none";
  }
  
pokreniKviz();
zavrsiBtn.addEventListener('click', prikaziRezultat);
  
  function startTimer(duration, display) {
      var timer = duration, minutes, seconds;
      setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);
  
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
  
          display.textContent = minutes + ":" + seconds;

          if(timer==0){
           prikaziRezultat();
          }
  
          if (--timer < 0) {
              timer = duration;
          }
      }, 1000);
  }

        pokreniKviz();
        window.onload = function () {
            var TFMinutes = 60,
                display = document.querySelector('#time');
            startTimer(TFMinutes, display);
        };  
     


  
