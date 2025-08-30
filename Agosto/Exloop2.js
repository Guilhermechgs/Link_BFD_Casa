let estoque = [
    {nome : "Playstation", valor : 10},
    {nome : "Xbox", valor : 20},
    {nome : "NintendoSwitch", valor : 30},
]
estoque.forEach(item => {
        if (item.valor > 10)
        console.log(item.nome, item.valor);
    });