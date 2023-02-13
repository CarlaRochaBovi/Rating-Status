const button = document.getElementById('button');
const outputP = document.getElementById('output');


button.addEventListener('click', () => {
    const input = document.querySelector('input[name="num"]:checked').value
    console.log(input)

    outputP.innerHTML = input
    let before = document.getElementById('before')
    let after = document.getElementById('after')
    before.style.display = 'none'
    after.style.display = 'flex'
})