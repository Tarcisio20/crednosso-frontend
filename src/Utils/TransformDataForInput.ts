export const TransformDataForInput = (element : string) => {
    const dt = new Date(element)
    let day = dt.getDate()
    let mounth = dt.getMonth()+1
    let year = dt.getFullYear()
    if(day < 10) day = '0'+day
    if(mounth < 10) mounth = '0'+mounth

    return `${year}-${mounth}-${day}`
}