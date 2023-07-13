    let input = document.getElementById ('title');
    console.log (input);

    let ul = document.getElementById ('list')
    console.log (ul)

    let btn = document.getElementById ('create')
    console.log(btn)


    const notes =[ 'учиться', 'kushat' ]
    notes.push ('asd')
    console.log (notes)

    
    function getNote(title){
        return `<li class="list-group-item d-flex justify-content-between align-items-center" id="liList">
            <span>${title}</span>
            <span>
                <span class="btn btn-small btn-success">&check;</span>
                <span class="btn btn-small btn-danger"> &ltimes;</span>
            </span>
        </li>`
    };

    function render (){
        for ( let i = 0; i < notes.length; i++){
            ul.insertAdjacentHTML ('beforeend', 
        getNote(notes[i]))
        }
    }
    render ();

    btn.onclick = function (){
        if ( input.value == 0 ){
            alert ('Введите заметку...')
            return;
        }
        else{
            ul.insertAdjacentHTML ('beforeend', getNote (input.value))
        }
        input.value = ' ';
    }

    

