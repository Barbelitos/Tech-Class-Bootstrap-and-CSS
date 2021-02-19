// Function for alerts
function validateForm() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var success = document.getElementById('success');
    var fail = document.getElementById('failure');


    if (name.value == "" || email.value == "" ) {
        fail.classList.add('showalert');
        success.classList.remove('showalert');
        return false;
    } else {
        success.classList.add('showalert');
        fail.classList.remove('showalert');
        return false;
    }
}

//Function for deleting alert on refresh
function deleteOnRefresh() {
    var success = document.getElementById('success');
    var fail = document.getElementById('failure');

    fail.classList.remove('showalert');
    success.classList.remove('showalert');
}