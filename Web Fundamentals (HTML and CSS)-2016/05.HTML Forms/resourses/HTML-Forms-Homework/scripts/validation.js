function registerValidation() {
    let user = $('#username').val();
    if (user.length < 10) {
        alert("orpai si usera");
        return;

    }
    let email = $('#email').val();
    let emailValidator = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    if (!emailValidator.test(email)) {
        alert("not valid email")
        return false;
    }
    let pass = $('#pass').val();
    if (pass.length < 5) {
        alert("orpai si parolata");
        return;
    }
    if ($('#confirm-pass').val() !== pass) {
        alert("ne savpadat parolite!");
    }
}
