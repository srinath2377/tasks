
function add() {
    var values = {}
    values = {
        Id: GetRandom(),
        Name: myform.name.value,
        EMail: myform.email.value,
        DateOfBirth: myform.dateofbirth.value,
        Gender: myform.gender.value,
        MobileNumber: myform.phonenumber.value,
        Hobbies: getValue(),
        Address: myform.add.value
    }
    const out = JSON.stringify(values);
    document.getElementById("demo").innerHTML = out;
    console.log(out);
}
function getValue() {
    var checkboxes =
        document.getElementsByName('hobbies');
    var result = "";
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result += checkboxes[i].value + " ";
        }
    }
    return result;
}
function GetRandom() {
    var myElement = document.getElementById("hide")
    myElement.value = Math.floor(Math.random() * 1001);
    return myElement.value;
}
function validate() {

    var mname = document.myform.name.value;
    var email = document.myform.email;
    var dob = document.myform.dateofbirth;
    var gender = document.myform.gender;
    var phno = document.myform.phonenumber;
    var hobby = document.myform.hobbies;
    var address = document.myform.add;

    if (mname == "") {
        alert("Enter a name");
        document.myForm.name.focus();
        return false;
    }
    if (!/^[a-zA-Z" "]*$/g.test(mname.value)) {
        alert("Invalid characters");
        document.myForm.name.focus();
        return false;
    }
    if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g.test(email.value)) {
        alert("Email is Invalid");
        document.myForm.email.focus();
        return false;
    }
    if (dob.value.length <= 0) {
        alert("Date of Birth is required");
        document.myForm.dateofbirth.focus();
        return false;
    }
    if (gender.value.length <= 0) {
        alert("Gender is required");
        document.myForm.gender.focus();
        return false;
    }
    if (phno.value.length < 10) {
        alert("Invalid Phone Number");
        document.myForm.phonenumber.focus();
        return false;
    }
    if (!/^([0-9])+$/g.test(phno.value)) {
        alert("Phone Number is Invalid");
        document.myForm.phonenumber.focus();
        return false;
    }
    if (address.value.length <= 0) {
        alert("Address is required");
        document.myForm.add.focus();
        return false;
    }
    return false;
}
function execute() {
    validate();
    add();
}

function mySubmitFunction(e) {
    e.preventDefault();
    return false;
}

