//toto je tvoje máma comand kdyby jsi nevěděl 

let jokes = ["Tvoje máti je tak tlustá, že když jí doktor diagnostikoval masožravou bakterii, dal jí 5 let života","Tvoje máma se jmenuje Harry a je v celé zoo jednoznačně nejchlupatější","Tvoje máma je tak tlustá, že jsem si ji minulé Vánoce vyfotil, ale fotka se pořád ještě tiskne!","Tvoje máma je tak hnusná, že když hodí bumerangem, tak se ten bumerang odmítá vrátit!","Tvoje máma je tak tlustá, že když skočila do moře, tak se celé vylilo.","Tvoje máma je tak chudá, že se ovívá nanukem a říká tomu klimatizace","Tvoje máma je tak tlustá, že když si sedne na uhlí, prdí diamanty.","Tvoje máma je tak tlustá, že když se chtěla vyfotit na občanku, tak ji museli fotit z letadla.","Tvoje máma je tak ošklivá, že když se narodila, doktor nevěděl, z které strany ji poplácat.","tvoje máma je tak tlustá, že viditelné ohýbá světlo gravitací."]

module.exports = function (prikaz,msg){
    index = Math.floor(Math.random()*jokes.length);
    msg.reply(jokes[index]);
}