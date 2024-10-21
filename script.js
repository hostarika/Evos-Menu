




function Hisobla(nomi, narxi) {
    let count =+prompt(`Siz ${nomi} dan nechta zakaz qimoqchisiz?`)
    alert(`Sizning ${count} da ${nomi}ingiz narxi : ${count*narxi}`)
    let zakaz =confirm("Siz buyurtma bermoqchimisiz?")
    if (zakaz) {
        alert("Zakazingiz qabul qilindi")
    }
    else{
        alert("!Zakazingiz qabul qilinmadi!")
    }
}