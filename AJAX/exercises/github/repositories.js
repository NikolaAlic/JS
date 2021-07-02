const tableBody = $('tbody')
const errorElement = $('.alert');
$(document).ready(function() {
    var repo = localStorage.getItem("user_repo");
    $.ajax({
        url: repo,
        method: 'GET',
        
    }).done(function (response) {
       
        if (response.length == 0) {
            errorElement.text("No results");
            return;
        }

        response.forEach(function (item) {
            var row = $(`<tr><td>${item.name}</td><td>${item.description}</td><td>${item.language}</td>
            <td>${item.watchers_count}</td><td><a href='${item.html_url}' target='_blank' class='btn btn-primary'>Go to repo</a>
            </td></tr>`)
           
            tableBody.append(row);
        })

    }).fail(function () {
        errorElement.text("Network error!");
        errorElement.toggle();
    })
})