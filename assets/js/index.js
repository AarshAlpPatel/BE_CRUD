$("#add_user").submit(function(event) {
    alert("Data Inserted Successfully");
})

$("#update_user").submit(function(event) {
    event.preventDefault();

    var unindex_array = $("#update_user").serializeArray();
    var data = {}
    console.log(unindex_array)

    $.map(unindex_array, function(n,i) {
        data[n['name']] = n['value']
    })

    console.log(data)

    var request = {
        "url": `http://localhost:3000/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Data updated successfully!")
    })



})