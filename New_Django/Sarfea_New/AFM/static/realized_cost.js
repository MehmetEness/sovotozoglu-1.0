
let view1 = document.querySelectorAll(".view-1");
let view2 = document.querySelectorAll(".view-1"); 


/*  Search Box  */
document.querySelector('.icon').onclick = function(){
document.querySelector('.search').classList.toggle('active')
}

function modalAc(){

}

//-------------------
document.getElementById("firma-add-btn").addEventListener("click", function () {
  console.log("firma add");
  document.querySelector(".payingFirmaAddWindow").style.display = "flex";
});
document.getElementById("firma-add-btn2").addEventListener("click", function () {
  console.log("firma add2");
  document.querySelector(".payingFirmaAddWindow").style.display = "flex";
});
document.getElementById("payingFirmaAdd-modal").addEventListener("click", function () {
  document.querySelector(".payingFirmaAddWindow").style.display = "none";
});





document.getElementById("gider-ac").addEventListener("click", function(){
    document.querySelector(".giderWindow").style.display = "flex";
   
    if(document.querySelector(".isWindow").style.display == "flex"){
        document.querySelector(".isWindow").style.display = "none";
    }
});
document.getElementById("gider-modal").addEventListener("click", function(){
    document.querySelector(".giderWindow").style.display = "none";
});


document.getElementById("is-ac").addEventListener("click", function(){
    document.querySelector(".isWindow").style.display = "flex";
    if(document.querySelector(".giderWindow").style.display == "flex"){
        document.querySelector(".giderWindow").style.display = "none";
    }
});
document.getElementById("is-modal").addEventListener("click", function(){
    document.querySelector(".isWindow").style.display = "none";
});


//-----
document.getElementById("head-gider-ac").addEventListener("click", function(){
document.querySelector(".giderWindow").style.display = "flex";

if(document.querySelector(".isWindow").style.display == "flex"){
    document.querySelector(".isWindow").style.display = "none";
}
});
document.getElementById("gider-modal").addEventListener("click", function(){
document.querySelector(".giderWindow").style.display = "none";
});


document.getElementById("tablotr-is-ac").addEventListener("click", function(){
document.querySelector(".isWindow").style.display = "flex";
if(document.querySelector(".giderWindow").style.display == "flex"){
    document.querySelector(".giderWindow").style.display = "none";
}
});
document.getElementById("is-modal").addEventListener("click", function(){
document.querySelector(".isWindow").style.display = "none";
});
//-----
document.getElementById("gider-modal").addEventListener("click", function(){
document.querySelector(".giderWindow").style.display = "none";
});


document.getElementById("head-is-ac").addEventListener("click", function(){
document.querySelector(".isWindow").style.display = "flex";
if(document.querySelector(".giderWindow").style.display == "flex"){
    document.querySelector(".giderWindow").style.display = "none";
}
});
document.getElementById("is-modal").addEventListener("click", function(){
document.querySelector(".isWindow").style.display = "none";
});

/*  Total Maliyet Tablosu   */
/*document.getElementById("toplam-maliyet").addEventListener("click", function(){       
for(let index of view1){
    index.style.display ='none';
}
for(let index of view2){
    index.style.display ='block';
}
});*/



// // Liste elemanlarını seçin
// var liste = document.querySelectorAll('#firmaUl li');

// // Yalnızca farklı olanları saklayacak bir nesne oluştur
// var farkliElemanlar = {};

// // Her liste elemanını işleyin
// for (var i = 0; i < liste.length; i++) {
//   var element = liste[i];
//   var companyName = element.querySelector('a').textContent.trim();

//   // companyName daha önce farkliElemanlar içinde oluşturulmadıysa, bu elemanı saklayın
//   if (!farkliElemanlar[companyName]) {
//     farkliElemanlar[companyName] = true;
//   } else {
//     // companyName daha önce eklenmişse, bu elemanı listeden kaldırın
//     element.parentNode.removeChild(element);
//   }
// }

  //Tabloları toplama

document.addEventListener('DOMContentLoaded', function() {
  let columnView = document.querySelector("#c1");
    const totalTL = document.getElementById("solTableToplamTL");
    const totalUSD = document.getElementById("solTableToplamUSD"); 
    let tableSol = document.querySelector("#table");
    const sagTotalTL = document.getElementById("sagTableToplamTL");
    const sagTotalUSD = document.getElementById("sagTableToplamUSD");    
    let tableSag = document.querySelector("#table-2");
    let tbody2 = document.querySelector("#tbody-2");
  // Sayfa yüklendiğinde çalışacak kodlar buraya
  solTableSonuc = tableTopla(tableSol);       
       totalTL.textContent = "₺" + solTableSonuc.totalTLFunction; 
       totalUSD.textContent = "$" + solTableSonuc.totalUSDFunction; 
       totalUSDFunction=0;       
       totalTLFunction=0;
       sagTableSonuc = tableTopla(tableSag);       
      totalTL.textContent = "₺" + sagTableSonuc.totalTLFunction; 
      totalUSD.textContent = "$" + sagTableSonuc.totalUSDFunction; 
      document.querySelector("#genelToplamTL").textContent = "₺" + (solTableSonuc.totalTLFunction - sagTableSonuc.totalTLFunction);
                                                      
      document.querySelector("#genelToplamUSD").textContent = "$" + (solTableSonuc.totalTLFunction - sagTableSonuc.totalTLFunction);
      totalUSDFunction=0;       
      totalTLFunction=0;

  // Tıklamalarda çalışacak fonksiyonu buraya ekleyebilirsiniz
  document.addEventListener('click', function() {
    console.log("tıklanıdı");
    solTableSonuc = tableTopla(tableSol);       
       totalTL.textContent = "₺" + solTableSonuc.totalTLFunction; 
       totalUSD.textContent = "$" + solTableSonuc.totalUSDFunction; 
       totalUSDFunction=0;       
       totalTLFunction=0;
       sagTableSonuc = tableTopla(tableSag);       
      totalTL.textContent = "₺" + sagTableSonuc.totalTLFunction; 
      totalUSD.textContent = "$" + sagTableSonuc.totalUSDFunction; 
      document.querySelector("#genelToplamTL").textContent = "₺" + (solTableSonuc.totalTLFunction - sagTableSonuc.totalTLFunction);
                                                      
      document.querySelector("#genelToplamUSD").textContent = "$" + (solTableSonuc.totalTLFunction - sagTableSonuc.totalTLFunction);
      totalUSDFunction=0;       
      totalTLFunction=0;
  });
});

   /* Toplama İşlemi */
   let totalTLFunction=0.0;
   let totalUSDFunction=0.0;

function tableTopla(table){
   const columnIndex1 = 3;
   const columnIndex2 = 5;

   const dataRows = table.querySelectorAll("tbody tr");
   dataRows.forEach(row => {
       const cells = row.querySelectorAll("td"); 
       totalUSDFunction += birimSil(cells[columnIndex2].textContent); 
       totalTLFunction += birimSil(cells[columnIndex1].textContent);
   });
   
   return { totalTLFunction, totalUSDFunction };
}
/* Gelen verinin birimini silip int veren fonksiyon */

function birimSil(inputString) {
   const withoutSymbols = inputString.replace(/₺|\$|\./g, "");
   const number = parseFloat(withoutSymbols.replace(",", "."));
   return number;
}

