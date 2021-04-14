function covid1()
{
  var request=new XMLHttpRequest();
  let country =document.getElementById("contry").value;
  console.log(country)
  let url = `https://api.covid19api.com/live/country/${country}`;
  request.open("GET",url,true)
  request.send();
  let table=document.createElement("TABLE")
  request.onload=function()
 {
    table.border=1
    let row=table.insertRow(-1);
    let sno=row.insertCell(-1);
    let province=row.insertCell(-1);
    let Activecases=row.insertCell(-1);
    let deaths=row.insertCell(-1)
    Activecases.innerHTML = "ActiveCases";
    deaths.innerHTML = "Deaths";
      province.innerHTML="Province";
      sno.innerHTML = "S.No";
      let result = JSON.parse(this.response);
      result.forEach(day=>{
          console.log(day);
          let row=table.insertRow(-1)
          let sno=row.insertCell(-1);
          let province=row.insertCell(-1);
          let Activecases=row.insertCell(-1);
          let deaths=row.insertCell(-1);
          sno.innerHTML = result.indexOf(day)+1
         province.innerHTML=day.Province;
         Activecases.innerHTML=day.Active;
         deaths.innerHTML=day.Deaths;
      })
 }
  dispTable = document.getElementById("display")
  dispTable.append(table)
}
