export const GenereateIndividualValuesCassetesInReal = (type : number, value : number) => {
    const v = type * value
    return v.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'} )
    
}