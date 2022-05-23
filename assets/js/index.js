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

if (window.location.pathname == '/') {
    console.log("hello!")
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function() {
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:3000/api/users/${id}`,
            "method": "DELETE"
        }

        if (confirm("Do you really want to delete this item?")) {
            $.ajax(request).done(function(response){
                alert("Data deleted successfully!")
                location.reload()
            })
        }
    })
}