    let input = document.getElementById ('title');
    console.log (input);

    let ul = document.getElementById ('list')
    console.log (ul)

    let btn = document.getElementById ('create')
    console.log(btn)


    const notes =[ {
       title: 'учиться',
       completed: true,
        },
        {
        title: 'кушать',
        completed: false,
        }
    ];

    function getNote(title, index){
        return `<li class="list-group-item d-flex justify-content-between align-items-center" id="liList">
            <span class=" ${ title.completed ? 'text-decoration-line-through' : ''}">${title.title}</span>
            <span>
                <span class="btn btn-small
                 btn-${ title.completed ? 'warning' : 'success' }" 
                 data-index="${index}" data-type="toggle">&check;</span>
                <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove"> &ltimes;</span>
            </span>
        </li>`
    };

    function render (){
        ul.innerHTML = '';
        if ( notes == 0 ){
            ul.innerHTML = '<p>Здесь ничего нет</p>'
        }
        for ( let i = 0; i < notes.length; i++){
            ul.insertAdjacentHTML ('beforeend', 
        getNote(notes[i], i))
        }
    }
    render ();
    
    btn.onclick = function (){
        if ( input.value == 0 ){
            alert ('Введите заметку...')
            return;
        }
            const newNote = {
                    title: input.value,
                    completed: true,
            }
                notes.push (newNote),
                render(newNote);
        input.value = ' ';
        console.log (notes)
    };

    ul.onclick = function (event){
        console.log (event.target.dataset.index);
        if (event.target.dataset.index){
            const index = parseInt(event.target.dataset.index)
            const type = event.target.dataset.type
                if ( type == 'toggle'){
                    notes[index].completed = !notes[index].completed
                }
                else if ( type == 'remove'){
                    notes.splice(index, 1)
                }
        }
         render();
    }
    
    
