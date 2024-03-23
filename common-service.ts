export function convertDate(dt:string){
    var dt_formatted = new Date(dt)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return dt_formatted.getDate() + ' ' + months[dt_formatted.getMonth()] + ' ' + dt_formatted.getFullYear()
}