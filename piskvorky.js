    //variabli co si ukradnu z DOMu
    let okynka = document.getElementsByClassName("HraciPlocha");
    let KdoHraje = document.getElementById("kdohraje");
    let PocetKol = document.getElementById("kolo")


    //další variably
    let kolo = 0;
    let konec = false;
    let hrac = ["O","X",0,0];
    let mizeni = [];
    let Arr = [
        ["","","",""],
        ["","","",""],
        ["","","",""],
        ["","","",""],
    ]


    for(let i of okynka){
mizeni[i]=0;
    }

    //udělat to všechno do dvou souřadnic přepsat ty argumenty a předělat to do dvou dimenzí.
    class hra{
    constructor(tr,td,poradi){
    this.tr=tr;
    this.td=td;
    this.poradi = poradi;
    } 
    play(){
        okynka[this.poradi].innerHTML=hrac[kolo%2];
        okynka[this.poradi].style.color="black";
        Arr[this.tr][this.td]=hrac[kolo%2];
        kolo++;
    }
    check(){
        if (okynka[this.poradi].innerHTML!=" "){
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
    
        for(let i=2;i<4;i++){
        if(hrac[i]==3){
        console.log("vyhral " + (kolo%2) + ". hráč protože ten druhej retard podávděl");
            }
        }
    }
    odeber(){

        for(let i = 0;i<okynka.length;i++){
            if(mizeni[i]!=0){
                mizeni[i]--;
            }
            if(mizeni[i]==0){
            okynka[i].innerHTML=" ";
            mizeni[i]=NaN;
            }
        }
            mizeni[this.poradi]=9;
    }
    pocitadla(){
        KdoHraje.value=hrac[(kolo)%2];
        PocetKol.innerHTML=kolo+". kolo";

    }
    checkTheWinner(){
       //řady
       for (let i = 0;i<4;i++){
           if(Arr[i][0]==Arr[i][1]&&Arr[i][2]==Arr[i][3]&&Arr[i][0]!=""&&Arr[i][3]!==""){
            konec=true;
        }
       }
       //ta druhá věc
       for (let j = 0;j<4;j++){
        if(Arr[0][j]==Arr[1][j]&&Arr[2][j]==Arr[3][j]&&Arr[0][j]!=""&&Arr[3][j]!=""){
            konec=true;
            }
        }


        //diagonály
        if(Arr[0][0]==Arr[1][1]&&Arr[2][2]==Arr[3][3]&&Arr[0][0]!=""&&Arr[3][3]!=""){
            konec=true;
            }
        if(Arr[0][3]==Arr[1][2]&&Arr[2][1]==Arr[3][0]&&Arr[0][3]!=""&&Arr[3][0]!=""){
            konec=true;
            }

        }
    clear(){
    if(konec==true){
        for(let el of okynka){
           el.innerHTML=" ";
            }
        }
    }
}
    
    function hraj (tr,td,poradi){
    let hraj = new hra(tr,td,poradi);
    if (hraj.check()==true){
        hraj.play();
    };
    hraj.odeber();
    hraj.pocitadla();
    hraj.checkTheWinner();
    hraj.clear();
    }
    
    