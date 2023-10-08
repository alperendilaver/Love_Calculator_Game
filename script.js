var showText = function (target, message, index, interval) {   
if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
}
}
//n1 ve n2 değerlerinin kontroldeki isimleri girerek kullanabilirsiniz
var namecheck = function(n1, n2){
  if((n1=="1.isim" && n2=="2.isim")||(n1=="2.isim" && n2=="1.isim")){
    return true;
  }
  return false;
}
$(document).ready(function() {
      $(function () {
        showText(".welcome", "Merhaba! Oyunumuza hoş geldin. Oyun çok basit, aşağıdaki alanlara 2 tane isim girdikten sonra 'test et!' butonuna basman gerekiyor. Ardından sistem iki kişi arasındaki sevgi oranını gösteriyor.", 0, 120);   
      });
          
      $("#checkButton").click(function(){
      $(".spotifyDirect").hide();
       
      $(".result").hide();
      var random = parseInt( Math.random()*100);
      var n1= $(".n1").val().toLowerCase();
      var n2= $(".n2").val().toLowerCase();
      if(namecheck(n1,n2)){
        var sesElementi = document.getElementById("sesDosyasi");
        if(sesElementi.played){
          sesElementi.pause();
          sesElementi.currentTime=0;
        }
        $(".result").fadeIn(3000);
        $(".card-text").text(n1+" ile "+n2+" arasındaki"+"\n"+"sevgi oranı %100");
        $(".resultCard").css({"background-color":" #C850C0","color":"white"});
        $(".spotifyDirect").show();
        sesElementi.play()
      }
      else{
        $(".result").fadeIn(3000);
        $(".card-text").text(n1+" ile "+n2+" arasındaki"+"\n"+"sevgi oranı %"+random);
      $(".resultCard").css({"background-color":" white","color":"black"});
        
      }  
    });


})
