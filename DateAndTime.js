function dateTime()
{
    const dateObj = new Date();
    var month = dateObj.getMonth();
    const day = String(dateObj.getDate()).padStart(2,'0');
    const year = dateObj.getFullYear();
    month=month+1;
    var output;
    if(month>9)
    {
        output = day+'-'+month+'-'+ year;
    }
    else{
       output =  day+'-'+0+month+'-'+year;
    }
    var time = dateObj.getHours()+':'+dateObj.getMinutes()+':'+dateObj.getSeconds();
    return {output,time}
}
module.exports = dateTime