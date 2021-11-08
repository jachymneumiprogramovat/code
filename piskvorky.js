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
    //kdo je kdo a kdo kolikrát podváděl
    let hrac = ["O","X",0,0];
    //kolik kterýmu políčku zbývá času na hrací ploše
    let mizeni = [];
   //tohle slouží k tomu abych zaznamenábal pozice v tabulce do arraye a mohl je potom čeknout kdo vyhrál 
    let Arr = new Array(hraciPlocha+1)
for (var i = 0; i < Arr.length; i++) {
  Arr[i] = new Array(hraciPlocha+1);
}
for(let i of Arr){  
    for(let j=0;j<hraciPlocha+1;j++){
        i[j]=" "
    }
}


let vyhry = [0,0];


//plnění mizecího arry
    for(let i of okynka){
mizeni[i]=NaN ;
    }

class hra{
    //existence
    constructor(tr,td,poradi){
        this.tr=tr;
        this.td=td;
        this.poradi = poradi;
    } 
    play(){
        //tohle je defakto celá hra...

        rady[this.tr].getElementsByClassName("jjh")[this.td].innerHTML=hrac[kolo%2]
        Arr[this.tr][this.td]=hrac[kolo%2];

        console.log(this.td,this.tr, this.poradi,hraciPlocha, Arr)
        kolo++;
  
    }
    check(){
        //haloo haloo je tam někdo?
        if (okynka[this.poradi].innerHTML=="X" || okynka[this.poradi].innerHTML=="O"){
        console.log("tak jsi úplněj retard? a podvádět se nemá...");
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
        mizeni[this.poradi]=8;
        for(let i = 0;i<mizeni.length;i++){
            //tady se mění ta barva podle toho jak dlouho tam bude
            switch(mizeni[i]){
                case 8:okynka[i].style.color="black";
                    mizeni[i]--
                break;

                case 7:okynka[i].style.color="rgba(50,0,0,0.9)";
                    mizeni[i]--
                break;

                case 6:
                    okynka[i].style.color="rgba(75,0,0,0.8)"
                    mizeni[i]--;
                break;

                case 5:
                    okynka[i].style.color="rgba(125,0,0,0.75)"
                    mizeni[i]--;
                break;

                case 4:
                    okynka[i].style.color="rgba(150,0,0,0.7)"
                    mizeni[i]--;
                break;

                case 3:
                    okynka[i].style.color="rgba(175,0,0,0.65)"
                    mizeni[i]--;
                break;

                case 2:
                    okynka[i].style.color="rgba(220,0,0,0.5)"
                    mizeni[i]--;
                break;

                case 1:
                    okynka[i].style.color="rgba(255,0,0,0.45)"
                    mizeni[i]--;
                break;

                case 0:
                    okynka[i].style.color="white"
                    okynka[i].innerHTML=" ";
                    mizeni[i]=NaN;
                    //tady se podle toho celkového pořadí vypočítá kde to je v tom array a tam se to odebere,
                    Arr[Math.floor(i/(hraciPlocha+1))][i%(hraciPlocha+1)]="";
                    zmizeni++;
                break;
                
                case NaN: 
                okynka[i].innerHTML=" ";
                Arr[Math.floor(i/(hraciPlocha+1))][i%(hraciPlocha+1)]="";
                    break;
            }
        //okynka[i].style.padding=`${100/(hraciPlocha/2)}px`
        //okynka[i].style.fontSize = `${50/(hraciPlocha/3)}px`
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
        //čištění mizení
           mizeni[el]=NaN;
        //čištění kol
        kolo=0;
        }
        //čištění pozic v tom kdo vyhrál
        for(let i of Arr){  
            for(let j=0;j<hraciPlocha+1;j++){
                i[j]=" "
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
                    Arr[Arr.length-1].push(" ")
                }
            }

            for(let i of Arr){
                    i.push(" ")
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
                    hraj.posunuti()
                    hraj.play();
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

