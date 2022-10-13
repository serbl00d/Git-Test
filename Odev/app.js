let username = document.getElementById("myName")
username.innerHTML = prompt("Lütfen İsminizi Giriniz")

let clock = document.querySelector("#saat")     //ID'si saat olan ilk öğeyi seçer


setInterval(() => {     //setInterval  aşağıdaki kod dizimlerini içeren Callback fonksiyon.(Belirli aralıklarla işlemleri yapar)
    let d = new Date(); //d değişkenine Date fonksiyonunu ata
    let hours = d.getHours();       //
    let mins = d.getMinutes();      //herşeyi yerinden alıp kısayol yap
    let secs = d.getSeconds();      //
    hours = hours < 10 ? "0" + hours : hours        //
    mins = mins < 10 ? "0" + mins : mins            //  Eğer saat , dakika , saniye 10'dan küçükse başına 0 koyar
    secs = secs < 10 ? "0" + secs : secs            //
    clock.innerHTML = `${hours} : ${mins} : ${secs}`//  clock olarak seçtiğimiz elementin innerHTML'ini düzenler

}, 1000);