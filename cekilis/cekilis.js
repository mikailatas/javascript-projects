var kisiler = new Array();
var kazananlar = new Array();
function diziyeEklemeYap() {
  var eleman=prompt("Yeni Ders Ekle");

  kisiler.push(eleman);
  tabloyudoldur();
}

function tabloyudoldur() {
 
  var deger = "";
  for (var i = 0; i < kisiler.length; i++) {
    deger += "<tr><td>" + kisiler[i] + "</td></tr>";
  }
  document.getElementById("tablo").innerHTML = deger;
}
function kazanandoldur() {
 
  var deger1 = "";
  for (var i = 0; i < kazananlar.length; i++) {
    deger1 += "<tr><td>" + kazananlar[i] + "</td></tr>";
  }
  document.getElementById("kazanantablo").innerHTML = deger1;
}
var sayi=0;
var timer;
function basla(){
  sayi++;
  var rastgele=Math.floor(Math.random()*kisiler.length);
  kazananlar.push(kisiler[rastgele]);
  kisiler.splice(rastgele,1);
  kazanandoldur();
  tabloyudoldur();
  if(sayi==3){
    clearInterval(timer);
    sayi=0;
  }
}
function cekilis(){
  timer=setInterval(basla, 3000);
}
function cekilisSifirla(){
  for(var i=0;i<kazananlar.length;i++){
    kisiler.push(kazananlar[i]);
  }
  kazananlar.splice(0,kazananlar.length+1)
  kazanandoldur();
  tabloyudoldur();
}

function cekilisiptal(){
 
  kazananlar.splice(0,kazananlar.length+1)
  kisiler.splice(0,kisiler.length+1)
  kazanandoldur();
  tabloyudoldur();
}