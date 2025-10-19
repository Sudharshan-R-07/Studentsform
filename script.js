
    let sumbit = document.getElementById("submit")
   
    document.getElementById("studentform").addEventListener("submit", function(event) {

        event.preventDefault()

        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let Gender = document.querySelector('input[name ="Gender"]').value;
        let Course = document.getElementById("Course").value;
        let email = document.getElementById("email").value;
        let StudentTable = document.getElementById("Studenttable").getElementsByTagName('tbody')[0]
        let newRow = StudentTable.insertRow()

        newRow.insertCell(0).innerText = name;
        newRow.insertCell(1).innerText = age;
        newRow.insertCell(2).innerText = Gender;
        newRow.insertCell(3).innerText = Course;
        newRow.insertCell(4).innerText = email;
        newRow.insertCell(5).innerHTML=`<button class="delete" onclick="deleteRow(this)">Delete</button>`

        var studentform = document.getElementById("studentform").reset()
    })

    function deleteRow(button){
        let row=button.parentNode.parentNode
        row.parentNode.removeChild(row)
    }
