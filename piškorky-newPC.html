    //variabli co si ukradnu z DOMu
    let okynka = document.getElementsByClassName("jjh");
    let rady = document.getElementsByClassName("rady")

//tady si beru tu tabulku na statistiky
    let tabulka = document.getElementById("tabulka")
    let KdoHraje = document.getElementById("kdohraje");
    let PocetKol = document.getElementById("kolo")
    let Pocitadlo = document.getElementById("vyhry")

//Tady vytvářím tu tabulku na hru

    //další variably
    let hraciPlocha = 4
    let PocetHer = 0;
    let zmizeni = 0;
    let txt; 
    let kolo = 0;
    let konec = false;
    let vydrz = 8;
    //kdo je kdo a kdo kolikrát podváděl
    let hrac = ["O","X",0,0];
    //kolik kterýmu políčku zbývá času na hrací ploše
   //tohle slouží k tomu abych zaznamenábal pozice v tabulce do arraye a mohl je potom čeknout kdo vyhrál 
    let Arr = new Array(hraciPlocha+1)

for (var i = 0; i < Arr.length; i++) {
  Arr[i] = new Array(hraciPlocha+1);
}
for(let i of Arr){  
    for(let j=0;j<hraciPlocha+1;j++){
        i[j]=[" ", NaN]
    }
}


let vyhry = [0,0];


//plnění mizecího arry

class hra{
    //existence
    constructor(tr,td,poradi){
        this.tr=tr;
        this.td=td;
        this.poradi = poradi;
        this.souradnice = rady[this.tr].getElementsByClassName("jjh")[this.td]
        this.Arr = Arr[this.tr][this.td];
    } 
    play(){
        //tohle je defakto celá hra...

        this.souradnice.innerHTML=hrac[kolo%2]
        this.Arr[0]=hrac[kolo%2];

        kolo++;
  
    }
    check(){
        //haloo haloo je tam někdo?
        if (this.souradnice.innerHTML=="X" || this.souradnice.innerHTML=="O"){
        console.log(this.td,this.tr, this.poradi,hraciPlocha, okynka[this.poradi])
        kolo++;
            if(kolo%2==0){
            hrac[2]++;
            }
            else {
            hrac[3]++;
            }
        }
        else{
            return true;
        }
            //kolikrát kdo podváděl
        for(let i=2;i<4;i++){
        if(hrac[i]==3){
        console.log("vyhral " + (kolo%2) + ". hráč protože ten druhej retard podávděl");
            }
        }
    }
    odeber(){
        //tady nastavím kolik kol to vydrží
       this.Arr[1]=vydrz;
       console.log('něco')
        for(let h=0;h<okynka.length;h++){
            console.log('tvoje máma')
            let temp = rady[Math.floor(h/(hraciPlocha+1))].getElementsByClassName("jjh")[h%(hraciPlocha+1)]
            let Arrtemp = Arr[Math.floor(h/(hraciPlocha+1))][h%(hraciPlocha+1)]

            //tady se mění ta barva podle toho jak dlouho tam bude
            switch(Arrtemp[1]){
                case 8:temp.style.color="black";
                    Arrtemp[1]--
                break;

                case 7:temp.style.color="rgba(50,0,0,0.9)";
                    Arrtemp[1]--
                break;

                case 6:
                    temp.style.color="rgba(75,0,0,0.8)"
                    Arrtemp[1]--;
                break;

                case 5:
                    temp.style.color="rgba(125,0,0,0.75)"
                    Arrtemp[1]--;
                break;

                case 4:
                    temp.style.color="rgba(150,0,0,0.7)"
                    Arrtemp[1]--;
                break;

                case 3:
                    temp.style.color="rgba(175,0,0,0.65)"
                    Arrtemp[1]--;
                break;

                case 2:
                    temp.style.color="rgba(220,0,0,0.5)"
                    Arrtemp[1]--;
                break;

                case 1:
                    temp.style.color="rgba(255,0,0,0.45)"
                    Arrtemp[1]--;
                break;

                case 0:
                    temp.style.color="white"
                    temp.innerHTML=" ";
                    Arrtemp[1]=NaN;
                    //tady se podle toho celkového pořadí vypočítá kde to je v tom array a tam se to odebere,
                    Arrtemp[0]="";
                    zmizeni++;
                break;
                
                case NaN: 
                temp.innerHTML=" ";
                Arrtemp[0]="";
                    break;
            }
            console.log(Arr)
        }
    }
    pocitadla(){
        //tady jsou jen takový ty zbytečnosti ale přibidou i super věěci
        KdoHraje.value=hrac[(kolo)%2];
        PocetKol.innerHTML=kolo+". kolo";
        Pocitadlo.innerHTML=vyhry[0]+":"+vyhry[1];
    }
    tabulka(){
        PocetHer++
        let rada = document.createElement("tr")
        tabulka.appendChild(rada)

        for(let i=0;i<4;i++){
            let td = document.createElement("td")
            rada.appendChild(td)

            switch(i){
                case 0: txt = PocetHer;
                break;
                case 1: txt = kolo;
                break;
                case 2: txt = zmizeni;
                break;
                case 3: txt = hrac[(kolo-1)%2]
                break;
            }
            let text = document.createTextNode(txt)
            td.appendChild(text)
        }
    }
    checkTheWinner(){
        //tahle funkce bude chtít hodně předělat, ale myslím, že by to mělo jít. budu schopnej se vždycky podívat na čtyři na každou stranu a nenarazím na konec protože, to ještě předtím než se na to podívám rozšířím tak aby to sedělo.
    }
        clear(){
        for(let el=0; el<okynka.length;el++){
        //čištění hrací plochy
           okynka[el].innerHTML=" ";
        //čištění kol
        kolo=0;
        }
        //čištění pozic v tom kdo vyhrál
        for(let i of Arr){  
            for(let j=0;j<hraciPlocha+1;j++){
                i[j]=[" ", 0]
            }
        }
        //čištění toho kolikrát jsi podváděl
        hrac = ["O","X",0,0];
        konec=false;
        zmizeni = 0
    }
    posunuti(){
        if(this.td<2 || (hraciPlocha-this.td)<2){
            let zbytek = 1
            //tady se přidává novej sloupec
            for(let i=0;i<zbytek;i++){
                let rr = document.createElement("tr")
                tt.appendChild(rr)
                rr.id=(hraciPlocha+1).toString()
                rr.className="rady"

                //tady se ten nový řádek plní
                for(let j=0;j<=hraciPlocha;j++){
                    let sloupec = document.createElement("td")
                    rr.appendChild(sloupec)
                    sloupec.className="jjh"
                    sloupec.innerHTML=rady.length;
                    
                }
            }
            //tady se přidávají nové
            for(let pp of rady){
                let sloupec = document.createElement("td")
                sloupec.className="jjh"
                pp.appendChild(sloupec)
            }

            //tady se zvětšuje ten array o jedno míst (ten velkej)
            for(let j=0;j<zbytek;j++){
                Arr.push(new Array())

                for(let k=0;k<=hraciPlocha;k++){
                    Arr[Arr.length-1].push([" ", 0])
                }
            }

            for(let i of Arr){
                    i.push([" ",0])
            }

           hraciPlocha++
        }
           
        if(this.tr<2 || (hraciPlocha-this.tr)<2){
            //console.log('prdel')
        }
    }
}
    

let tt = document.getElementById("tt")

    for(let i=0;i<=hraciPlocha;i++){
        i=i.toString()
        let rr = document.createElement("tr")

        tt.appendChild(rr)
        rr.id= i.toString()
        rr.className="rady"

        for(let j=0;j<=hraciPlocha;j++){
            j=j.toString()
            let sloupec = document.createElement("td")
            rr.appendChild(sloupec)

            sloupec.className="jjh"
            sloupec.innerHTML=" ";

            let poradi = i*hraciPlocha+parseInt(j)+parseInt(i)
            sloupec.onclick =     function hraj (){
                let hraj = new hra(i,j,poradi); 
                if (hraj.check()==true){
                    hraj.play();
                    hraj.posunuti()
                };
            
                //tady se počítá kolik má jaká kostička ještě zůstat na herním pláně
                
                hraj.odeber();
                //kdo vyhrál? zatím docela amatérská metoda koukání se na to kdo vyhrál to by chtělo zlepšit
                
                //hraj.checkTheWinner();
                if(konec==true){
                    //tady se přidá novej záznam do tabulky
                    hraj.tabulka()
            
                    //tady se to čistí aby potom mohlo být počítadlo výher 
                    hraj.clear();
                }
                //tady jsou takový ty ukzatele
                hraj.pocitadla();
                }
            
        }
    }

