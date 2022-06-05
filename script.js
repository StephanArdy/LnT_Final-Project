// function validate(){
//     const name = document.getElementById('name').value
//     const email = document.getElementById('email').value
//     const phone = document.getElementById('phone').value
//     const regis = document.getElementById('regis').value
//     const form = document.getElementById('form').value
//     const error = document.getElementById('error').value
    
//     if (email != "@"){
//         alert('email harus mengandung @')
//     }
//     if (name.length < 3){
//         alert('Nama minimal mengandung 3 karakter')
//     }
//     if (phone.length > 14){
//         alert ('Angka tidak boleh lebih dari 14 digit')
//     }
// }

$("#form").validate({
    rules:{
        email:{
            required: '@',
            email: true
        },
        name:{
            minlength: 3
        },
        phone:{
            maxlength: 14
        }
    },
    messages:{
        email:{
            required: "Harus mengandung '@'"
        },
        name:{
            minlength: "Minimal mengandung 3 karakter"
        },
        phone:{
            maxlength: "Maksimal mengandung 14 digit"
        }
    },

    submitHandler: function(form) {
      form.submit();
    }
   })