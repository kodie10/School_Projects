//Citation for the following page
//Date: 11/2/2022
//Adapted From:
//Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app

function deleteLearnedAttack(pokemonID) {
    // Put our data we want to send in a javascript object
    let data = {
        learned_attacks_id: pokemonID
    };
    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "/delete-Learned_Attack-ajax", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4 && xhttp.status == 204) {
            // Add the new data to the table
            deleteRow(pokemonID);
        } else if (xhttp.readyState == 4 && xhttp.status != 204) {
            console.log("There was an error with the input.")
        }
    }
    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));
};


function deleteRow(pokemonID){
    let table = document.getElementById("Learned_Attacks-table");
    for (let i = 0, row; row = table.rows[i]; i++) {
        //iterate through rows
        //rows would be accessed using the "row" variable assigned in the for loop
        if (table.rows[i].getAttribute("data-value") == pokemonID) {
             table.deleteRow(i);
             deleteDropDownMenu(pokemonID);
             break;
        }
    }   
};
