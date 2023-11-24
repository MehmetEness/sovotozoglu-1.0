src="https://code.jquery.com/jquery-3.6.0.min.js"
       
       
    icon = document.querySelector('.icon');
    search = document.querySelector('.search');
    icon.onclick = function(){
          search.classList.toggle('active')
      }
function clearSearch() {
    const input = document.getElementById('mysearch');
    input.value = '';
    searchTable(); // Temizle dÃ¼ÄŸmesine basÄ±ldÄ±ÄŸÄ±nda tabloyu sÄ±fÄ±rla
}
function searchTable() {
    const input = document.getElementById('mysearch');
    const filter = input.value.toUpperCase();
    const table = document.getElementById('table');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let found = false;

        for (let j = 0; j < cells.length; j++) {
            const cell = cells[j];

            if (cell) {
                const textValue = cell.textContent || cell.innerText;

                if (textValue.toUpperCase().indexOf(filter) > -1) {
                    found = true;
                    break; // Tek bir eÅŸleÅŸme yeterli
                }
            }
        }

        if (found) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}

function modalAc(){

}

//-------------------
document.getElementById("gelir-ac").addEventListener("click", function(){
    document.querySelector(".gelirWindow").style.display = "flex";
    if(document.querySelector(".giderWindow").style.display == "flex"){
        document.querySelector(".giderWindow").style.display = "none";
    }
    if(document.querySelector(".projeBaslatWindow").style.display == "flex"){
        document.querySelector(".projeBaslatWindow").style.display = "none";
    }
    if(document.querySelector(".isWindow").style.display == "flex"){
        document.querySelector(".isWindow").style.display = "none";
    }
});
document.getElementById("gelir-modal").addEventListener("click", function(){
    document.querySelector(".gelirWindow").style.display = "none";
});


document.getElementById("gider-ac").addEventListener("click", function(){
    document.querySelector(".giderWindow").style.display = "flex";
    if(document.querySelector(".gelirWindow").style.display == "flex"){
        document.querySelector(".gelirWindow").style.display = "none";
    }
    if(document.querySelector(".projeBaslatWindow").style.display == "flex"){
        document.querySelector(".projeBaslatWindow").style.display = "none";
    }
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
        document.querySelector(".giderWindow").style.display = "none";modal
    }
    if(document.querySelector(".projeBaslatWindow").style.display == "flex"){
        document.querySelector(".projeBaslatWindow").style.display = "none";
    }
    if(document.querySelector(".gelirWindow").style.display == "flex"){
        document.querySelector(".gelirWindow").style.display = "none";
    }
});
document.getElementById("is-modal").addEventListener("click", function(){
    document.querySelector(".isWindow").style.display = "none";
});


document.getElementById("project-ac").addEventListener("click", function(){
    document.querySelector(".projeBaslatWindow").style.display = "flex";
    if(document.querySelector(".giderWindow").style.display == "flex"){
        document.querySelector(".giderWindow").style.display = "none";
    }
    if(document.querySelector(".gelirWindow").style.display == "flex"){
        document.querySelector(".gelirWindow").style.display = "none";
    }
    if(document.querySelector(".isWindow").style.display == "flex"){
        document.querySelector(".isWindow").style.display = "none";
    }
});
document.getElementById("project-modal").addEventListener("click", function(){
    document.querySelector(".projeBaslatWindow").style.display = "none";
});
document.getElementById("payingFirmaAdd-modal").addEventListener("click", function(){
    document.querySelector(".payingFirmaAddWindow").style.display = "none";
    
});
document.getElementById("firma-add-btn").addEventListener("click", function () {
    document.querySelector(".payingFirmaAddWindow").style.display = "flex";
  });
document.getElementById("paying-firma-add-btn").addEventListener("click", function () {
    document.querySelector(".payingFirmaAddWindow").style.display = "flex";
  });
  document.getElementById("paying-firma-add-btn-2").addEventListener("click", function () {
    document.querySelector(".payingFirmaAddWindow").style.display = "flex";    
  });
 
  document.getElementById("last-date-add-btn").addEventListener("click", function () {
    document.querySelector(".chek-last-date-box").style.display = "block";
  });
//--------------------------------------------//


// Tablo scroll bar
const table = document.getElementById("table");

function checkTableHeight() {
  const tableContainer = document.querySelector(".lists");

  if (tableContainer.scrollHeight > tableContainer.clientHeight) {
    tableContainer.style.overflowY = "scroll";
  } else {
    tableContainer.style.overflowY = "hidden";
  }
}
window.addEventListener("load", checkTableHeight);
table.addEventListener("input", checkTableHeight);


function addUnit(inputId) {
    var inputElement = document.getElementById(inputId);
    var inputValue = inputElement.value;

    // Eğer değer boş değilse ve "kW" içermiyorsa, "kW" ekleyin
    if (inputValue !== "" && !inputValue.includes("kW")) {
        inputElement.value = inputValue + " kW";
    }
}