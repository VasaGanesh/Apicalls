// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCURYxQAW97RRpis2tEpl4xP5JNuaWwAt8",
    authDomain: "database-f58e8.firebaseapp.com",
    projectId: "database-f58e8",
    storageBucket: "database-f58e8.appspot.com",
    messagingSenderId: "516185288645",
    appId: "1:516185288645:web:7a53d9aeb8ad45b972a5ac",
    measurementId: "G-L1NX84JGJR"
  };
  firebase.initializeApp(firebaseConfig);
  var data=firebase.database().ref().child("Students");
  data.on('child_added',function(snap){
    console.log(snap.key)
})
  function InsertData()
  {
      console.log("Data is inserting....");
      var name=document.getElementById("sid").value;
      var rollno=document.getElementById("roll").value;
      data.child(rollno).set({
          sname:name,
          rollno:rollno
      })

  }
  function deleteUsers()
  {
      let id = window.prompt("Enter rollno");
        let ref = data.child(id);
       ref.remove();
       console.log("deleting....")
  }
function updateUsers()
{
    var name=document.getElementById("sid").value;
    var rollno=document.getElementById("roll").value;
    data.child(rollno).update({
        sname:name
    })
}
  function LoadUsers(){

    table=document.createElement("TABLE")
    row=table.insertRow(-1);
    var name=row.insertCell(-1);
    var rollno=row.insertCell(-1);
    name.innerHTML="<center>NAME</center>";
    rollno.innerHTML="<center>ROLL_NO</center>"
    table.border=1;
      data.on('child_added',function(snap){
        //   console.log(snap.key)x
        row=table.insertRow(-1);
        var name=row.insertCell(-1);
        var rollno=row.insertCell(-1);
          console.log(snap.val().sname)
          name.innerHTML=`<center>${snap.val().sname}</center>`
          rollno.innerHTML=`<center>${snap.val().rollno}</center>`
          console.log(snap.val().rollno)
      })
    //   table.style.width = 100

      document.getElementById("datatable").append(table)
  }