let inputText = document.getElementById ('title');
console.log (inputText)
let btnSubmit = document.getElementById ('create')
console.log (btnSubmit);
let lil = document.getElementById ('list')
console.log (lil);


btnSubmit.onclick = function (){
    if (inputText.value == 0){
        alert ('Введите текст заметки...')
        return;
    }
    else{
    lil.insertAdjacentHTML ('beforeend',`<li class="list-group-item d-flex justify-content-between align-items-center" id="liList">
    <span>${inputText.value}</span>
    <span>
        <span class="btn btn-small btn-success">&check;</span>
        
        <span class="btn btn-small btn-danger"> &ltimes;</span>
    </span>
</li>` )
    }
    inputText.value = '';
};
function edit (){
    
}
