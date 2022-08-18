const consoleArea = document.querySelector('.console-section')
const codeArea = document.querySelector('.code-section')
const themeButton = document.querySelector('.theme')
const navbar = document.querySelector('.nav') 

// override the orignal console.log funtion
console.log = (x) => {
        consoleArea.innerHTML = consoleArea.innerHTML+`<br />${x}`
}
// run logic 
function run(){
        try {
                eval(document.getElementsByClassName('code-section')[0].value)
        } catch (e) {
                consoleArea.innerHTML = consoleArea.innerHTML+`<span><br />${e}<span>`
        }
}
// theme controller
themeButton.addEventListener('click', () => {
        themeButton.classList.toggle('light')// dark is the default 
        consoleArea.classList.toggle('light')
        codeArea.classList.toggle('light') 
        navbar.classList.toggle('light')      


})
window.onload = ()=> {
        codeArea.innerHTML = "console.log('hello world')"
        run()
}