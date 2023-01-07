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
            properties.forEach(function(propertie){
                alert('Dono: '+propertie.owner+'\n'
                +'Quartos: '+propertie.rooms+'\n'+
                'Banheiros: '+propertie.wcs+
                '\nTem garagem: '+propertie.garage
                )
            })
            break

        case "3":
            alert('Saindo agora, obrigado por usar nosso sistema')
            break
        default:
            alert("Entrada invalida, escolha uma dasopções listadas!")
    }
    
} while (choice!='3');