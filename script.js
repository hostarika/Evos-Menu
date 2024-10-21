




function Hisobla(nomi, narxi) {
    let count =+prompt(`Siz ${nomi} dan nechta zakaz qimoqchisiz?`)
    alert(`Sizning ${count} da ${nomi}ingiz narxi : ${count*narxi}`)
    let zakaz =confirm("Siz buyurtma bermoqchimisiz?")
    if (zakaz) {
        alert("Zakazingiz qabul qilindi")
        alert("!45 minut ichida yetkazib berilmasa zakaz tekin!")
    }
    else{
        alert("!Zakazingiz qabul qilinmadi!")
    }
}