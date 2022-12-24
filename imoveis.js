let choice=""
let properties=[]

do {
    choice=prompt("Imoveis cadastrados: "+properties.length+
    "\n1- Acrescentar um novo imóvel"+
    "\n2- Listar imóveis"+
    "\n3- Sair"
    )
    switch(choice){
        case "1":
            let propertie={}
            propertie.owner=prompt("Digite o nome do dono do imóvel")
            propertie.rooms=prompt("Digite quantos quartos o imóvel tem")
            propertie.wcs=prompt("Digite o número de banheiros do imóvel")
            propertie.garage=prompt("O Imóvel possui garagem? (Sim-Não)")
            properties.push(propertie)
            break
        case "2":
            for (i=0; i<properties.length;i++){
                alert("imóvel "+(i+1)+
                "\n\nDono do ímovel: "+properties[i].owner+
                "\nQuartos: "+properties[i].rooms+
                "\nBanheiros: "+properties[i].wcs+
                "\nGaragem: "+properties[i].garage
                )
            }
            break
        default:
            alert("Entrada invalida, escolha uma dasopções listadas!")
    }
    
} while (choice!=3);