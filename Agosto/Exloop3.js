let valores = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

function numpar(){
    for (let valor of valores){
        if (valor % 2 == 0){
            console.log(valor)
        }
    }
}

numpar()
