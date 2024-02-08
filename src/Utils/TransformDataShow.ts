export const TransformDataShow = (element : string) => {
    const dt = new Date(element)
    let day = dt.getDate()
    let mounth = dt.getMonth()
    let year = dt.getFullYear()

    if(day < 10) day = '0'+day
    if(mounth < 10) mounth = '0'+mounth

    return `${day}/${mounth}/${year}`
}