export const TransformData = (data : string) => {
    const partesData = data.split('-') 
    const americanDt = `${partesData[2]}/${partesData[1]}/${partesData[0]}` 

    return americanDt
}