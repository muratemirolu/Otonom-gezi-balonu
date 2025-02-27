var sorular = {
	soru1: {
		soru: "Kapadokya'da balon turları ne zaman yapılır?",
		cevap: "Balon turları genellikle sabahın erken saatlerinde yapılır."
	},
	soru2: {
		soru: "Balon gezileri ne kadar sürer?",
		cevap: "Balon gezileri yaklaşık 1 saat sürer."
	},
    soru3: {
		soru: "Balon turları nereden başlar?",
		cevap: "Balon turları genellikle Göreme'deki kalkış alanından başlar."
	},
    soru4: {
		soru: "Balon gezileri kaç kişilik gruplar halinde yapılır?",
		cevap: "Balon gezileri ortalama 16 kişilik gruplar halinde yapılır."
	},
    soru5: {
		soru: "Kapadokya bölgesindeki peri bacalarının oluşumu nasıl gerçekleşti?",
		cevap: "Peri bacalarının oluşumu, yüzyıllar boyunca erozyon, volkanik aktiviteler ve toprak yapısının etkileşimi sonucu gerçekleşti."
	},
    soru6: {
		soru: "Kapadokya'nın tarihi hakkında bilgi verebilir misiniz?",
		cevap: "Kapadokya, tarih boyunca pek çok medeniyete ev sahipliği yapmış bir bölgedir. Hititler, Persler, Roma İmparatorluğu, Bizans İmparatorluğu ve Osmanlı İmparatorluğu gibi birçok medeniyet bu bölgede yerleşim kurmuştur."
	},
    soru7: {
		soru: "Kapadokya bölgesindeki yeraltı şehirleri hakkında bilgi verebilir misiniz?",
		cevap: "Kapadokya bölgesinde yeraltı şehirleri, İlkçağ'dan itibaren savaşlardan kaçmak ve farklı sebeplerle kullanılmıştır. Derinkuyu ve Kaymaklı Yeraltı Şehirleri, en ünlü ve büyük olanlarıdır."
	},
    soru8: {
		soru: "Kapadokya bölgesindeki kiliseler hakkında bilgi verebilir misiniz?",
		cevap: "Kapadokya bölgesinde yer alan kiliseler, Bizans dönemine ait önemli yapılar arasında yer alır. Göreme Açık Hava Müzesi'nde yer alan Elmalı Kilise, Karanlık Kilise ve Tokalı Kilise, bölgenin en ünlü kiliselerindendir."
	},
    soru9: {
		soru: "Kapadokya'nın tarihi yapıları hakkında bilgi verebilir misiniz?",
		cevap: "Kapadokya, tarihi yapılarıyla ünlü bir bölgedir. Ürgüp'teki Temenni Tepesi, Uçhisar Kalesi, Göreme'deki Aşıklar Tepesi, Paşabağı ve Zelve Vadisi'ndeki tarihi yapılar, bölgenin en önemli turistik yerleri arasındadır."
	},
    soru10: {
		soru: "Kapadokya'nın coğrafi özellikleri hakkında bilgi verebilir misiniz?",
		cevap: "Kapadokya bölgesi, volkanik patlamalar, rüzgar ve su erozyonu sonucu oluşan peribacaları, vadiler ve kayalık oluşumlarıyla ünlüdür. Ayrıca, bölgede yer alan Ihlara Vadisi ve Kızılırmak Nehri de önemli doğal güzellikleri arasındadır."
	},
    soru11: {
		soru: "Kapadokya bölgesindeki tarihi yollar hakkında bilgi verebilir misiniz?",
		cevap: "Kapadokya, tarihi İpek Yolu'nun da geçtiği önemli bir bölgedir. Bölgede yer alan Kervansaraylar, İpek Yolu'nun önemli durakları arasındadır."
	},
    soru12: {
		soru: "Kapadokya'da yer alan tarihi müzeler hakkında bilgi verebilir misiniz?",
		cevap: "Kapadokya bölgesinde yer alan tarihi müzeler arasında Nevşehir Müzesi, Ürgüp Müzesi ve Göreme Açık Hava Müzesi gibi önemli müzeler bulunmaktadır. Bu müzelerde Kapadokya'nın tarihine ve kültürüne ilişkin pek çok eser sergilenmektedir."
	},
    soru22: {
		soru: "TURA BAŞLA",
		cevap: ""
	},
    
};

function soruGoster() {
	var id = this.id;
	var soru = sorular[id].soru;
	var cevap = sorular[id].cevap;
	var speech = new SpeechSynthesisUtterance(cevap);
	window.speechSynthesis.speak(speech);
}


document.getElementById("soru1").addEventListener("click", soruGoster);
document.getElementById("soru2").addEventListener("click", soruGoster);
document.getElementById("soru3").addEventListener("click", soruGoster);
document.getElementById("soru4").addEventListener("click", soruGoster);
document.getElementById("soru5").addEventListener("click", soruGoster);
document.getElementById("soru6").addEventListener("click", soruGoster);
document.getElementById("soru7").addEventListener("click", soruGoster);
document.getElementById("soru8").addEventListener("click", soruGoster);
document.getElementById("soru9").addEventListener("click", soruGoster);
document.getElementById("soru10").addEventListener("click", soruGoster);
document.getElementById("soru11").addEventListener("click", soruGoster);
document.getElementById("soru12").addEventListener("click", soruGoster);

document.getElementById("soru22").addEventListener("click", soruGoster);

var button = document.getElementById("soru22");
var video = document.getElementById("video");

button.addEventListener("click", function() {
  video.play();
});
