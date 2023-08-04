const root = document.querySelector(':root');


function setDarkTheme(){
    root.style.setProperty('--bg-color','rgb(7, 7, 7)')
    root.style.setProperty('--text-color','rgb(243, 243, 243)')
            root.style.setProperty('--shadow-color','rgba(240,240,240,0.3)')
            console.log('Dark Theme Applied')
}

function setLightTheme(){
    root.style.setProperty('--bg-color','rgb(243, 243, 243)')
    root.style.setProperty('--text-color','rgb(7, 7, 7)')
    root.style.setProperty('--shadow-color','rgba(0,0,0,0.3)')
    console.log('Light Theme Applied')
}

function checkOperator(string){
    if((string.endsWith('/')) || (string.endsWith('*')) || (string.endsWith('-')) || (string.endsWith('+'))){
        return true
    }else{
        return false
    }
}


document.addEventListener('DOMContentLoaded',function(){
    let themeBtn = document.querySelector('#theme-input')
    if(themeBtn.checked){
        setDarkTheme();
    }else{
        setLightTheme();
    }
    themeBtn.addEventListener('click', function(){
        if(themeBtn.checked){
            setDarkTheme();
        }else{
            setLightTheme();
        }
    })

    let buttons = document.querySelectorAll('.btn');
    let textBox = document.querySelector('#input-text-box');
    let data = '';
    textBox.value = data;
    let answer = false;

    buttons.forEach(button => {
        button.addEventListener('click',()=>{
            if(button.innerText === 'C'){
                textBox.value = ''
                data = ''
            }else if(button.innerText === '='){
                textBox.value = eval(data);
                data = textBox.value
                answer = true
            }else if(answer){
                if(((button.innerText >= 0)&&(button.innerText <= 9))||(button.innerText === '.') || (button.innerText == '(') || (button.innerText == ')') ){
                    textBox.value = ''
                    data = ''
                    data += button.innerText
                    textBox.value = data
                    answer = false
                }else{
                    data += button.innerText
                    textBox.value = data
                    answer = false
                }
            }else if ((checkOperator(data)) && (checkOperator(button.innerText))) {
                alert('Invalid input! The system cannot accept two operators simultaneously.')
            }else{
                data += button.innerText
                textBox.value = data
            }
        })
    });
})
