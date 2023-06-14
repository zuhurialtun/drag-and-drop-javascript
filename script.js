// Müşteri öğelerini yakalama
var customers = document.querySelectorAll(".customer");

// Sürükleme olayı dinleyicilerini ekleme
customers.forEach(function (customer) {
    customer.addEventListener("dragstart", dragStart);
});

// Sürükleme olayı başladığında yapılacaklar
function dragStart(event) {
    // Veri transferi yapısını ayarlama
    event.dataTransfer.setData("text/plain", event.target.id);
}

// Masa öğelerini yakalama
var tables = document.querySelectorAll(".table");

// Bırakma olayı dinleyicilerini ekleme
tables.forEach(function (table) {
    table.addEventListener("dragenter", dragEnter);
    table.addEventListener("dragover", dragOver);
    table.addEventListener("dragleave", dragLeave);
    table.addEventListener("drop", drop);
});

// Öğe bırakıldığında yapılacaklar
function drop(event) {
    // Öğenin varsayılan davranışını engelleme
    event.preventDefault();

    // Bırakılan öğenin kimliğini alır
    var data = event.dataTransfer.getData("text/plain");

    // Bırakılan müşteri öğesinin adını alır
    var customerName = document.getElementById(data).innerHTML;
    
    
    // Masa öğesinin ve müşteri öğesinin rengini değiştirme
    event.target.style.backgroundColor = "green";
    document.getElementById(data).style.backgroundColor = "green";
    event.target.innerHTML = customerName;
}

// İçeriğin bırakma hedefine sürüklendiğinde yapılacaklar
function dragEnter(event) {

}

// İçerik bırakma hedefi üzerindeyken yapılacaklar
function dragOver(event) {
    // Varsayılan davranışı engelleme
    event.preventDefault();
}

// İçerik bırakma hedefinden çıktığında yapılacaklar
function dragLeave(event) {
    // Arka plan rengini geri yükleme (isteğe bağlı)
    event.target.style.opacity = "1";
}
