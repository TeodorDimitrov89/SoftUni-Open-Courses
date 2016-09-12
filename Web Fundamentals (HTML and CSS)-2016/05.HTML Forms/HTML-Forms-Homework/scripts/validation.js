function registerValidation() {
    let user = $('#username').val();
    if (user.length <= 10) {
        alert("username must be at least 10 symbols");
        return;

    }
    let email = $('#email').val();
    let emailValidator = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    if (!emailValidator.test(email)) {
        alert("email is not valid");
        return false;
    }
    let pass = $('#password').val();
    if (pass.length <= 5) {
        alert("password must be at least 5 symbols");
        return;
    }
    if ($('#confPass').val() !== pass) {
        alert("password do not match");
    }
}
