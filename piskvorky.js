    //variabli co si ukradnu z DOMu
    let okynka = document.getElementsByClassName("jjh");
    let KdoHraje = document.getElementById("kdohraje");
    let PocetKol = document.getElementById("kolo")
    let Pocitadlo = document.getElementById("vyhry")

    let tabulka = document.getElementById("tabulka")

    //další variably
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
    let Arr = [
        ["","","",""],
        ["","","",""],
        ["","","",""],
        ["","","",""],
    ]
let vyhry = [0,0];


//plnění mizecího arry
    for(let i of okynka){
mizeni[i]=0;
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
        okynka[this.poradi].innerHTML=hrac[kolo%2];
        Arr[this.tr][this.td]=hrac[kolo%2];
        kolo++;
    }
    check(){
        //haloo haloo je tam někdo?
        if (okynka[this.poradi].innerHTML!=""){
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
        for(let i = 0;i<okynka.length;i++){
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
                    Arr[Math.floor(i/4)][i%4]="";
                    zmizeni++;
                break;
            }
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
        let cP = (kolo-1)%2
       //řady
       for (let i = 0;i<4;i++){
           if(Arr[i][0]==Arr[i][1]&&Arr[i][2]==Arr[i][3]&&Arr[i][0]!=""&&Arr[i][3]!==""){
            konec=true;
            vyhry[cP]++;
            }
        }
       //ta druhá věc
       for (let j = 0;j<4;j++){
        if(Arr[0][j]==Arr[1][j]&&Arr[2][j]==Arr[3][j]&&Arr[0][j]!=""&&Arr[3][j]!=""){
            konec=true;
            vyhry[cP]++;
            }
        }


        //diagonály
        if(Arr[0][0]==Arr[1][1]&&Arr[2][2]==Arr[3][3]&&Arr[0][0]!=""&&Arr[3][3]!=""){
            konec=true;
            vyhry[cP]++;
            }
        if(Arr[0][3]==Arr[1][2]&&Arr[2][1]==Arr[3][0]&&Arr[0][3]!=""&&Arr[3][0]!=""){
            konec=true;
            vyhry[cP]++;
            }
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
        Arr = [
        ["","","",""],
        ["","","",""],
        ["","","",""],
        ["","","",""],
        ]
        //čištění toho kolikrát jsi podváděl
        hrac = ["O","X",0,0];
        konec=false;
        zmizeni = 0
    }
}
    


    let tt = document.getElementById("tt")
    for(let i=0;i<4;i++){
        i=i.toString()
        let rr = document.createElement("tr")
        tt.appendChild(rr)
        rr.id= i.toString()

        for(let j=0;j<4;j++){
            j=j.toString()
            let sloupec = document.createElement("td")
            rr.appendChild(sloupec)
            sloupec.className="jjh"
            
            let poradi = i*3+parseInt(j)+parseInt(i)

            sloupec.onclick =     function hraj (){
                let hraj = new hra(i,j,poradi);
                console.log(i,j,poradi)
                if (hraj.check()==true){
                    hraj.play();
                };
            
                //tady se počítá kolik má jaká kostička ještě zůstat na herním pláně
                hraj.odeber();
                //kdo vyhrál? zatím docela amatérská metoda koukání se na to kdo vyhrál to by chtělo zlepšit
                hraj.checkTheWinner();
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
