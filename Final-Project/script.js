const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const regis = document.getElementById('regis')
const form = document.getElementById('form')
const error = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []

    if (name.value.length < 3 ) {
        messages.push('Minimal 3 karakter')
    }
    if(!email.value.contains('@')){
        messages.push('harus ada @')
    }
    errorElement.innerText = messages.join(',')
}
)