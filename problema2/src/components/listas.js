function listas(){              // função que armazena a lista dada


    const orgaos = [
        {id: 1, nome: 'INSS', produtos: [1, 2, 3]},
        {id: 2, nome: 'FGTS', produtos: [1]},
        ]

    const produtos = [
        {id: 1, nome: 'Novo', bancos: [1, 3]},
        {id: 2, nome: 'Refinanciamento', bancos: [1]},
        {id: 3, nome: 'Portabilidade', bancos: [1, 2, 3]},
        ]

    const bancos = [
            {id: 1, nome: 'Banco do Brasil', codigo: '001'},
            {id: 2, nome: 'Nubank', codigo: '260'},
            {id: 3, nome: 'C6', codigo: '336'},
            ]




    return [orgaos, produtos,bancos ]        
}               //permitindo que a lista seja usada facilmente em outros arquivos
export default listas