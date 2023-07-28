const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')




    document.querySelector('#create_button').onclick = function () {
        if (document.querySelector('input').value.length === 0){
            alert('ggg')
        } else {
            const  createTodo = () => {

                const div = document.createElement('div')
                const p = document.createElement('p')
                const text = document.createElement('h3')
                const divButtons = document.createElement('div')
                const deleteButton = document.createElement('button')
                const editButton = document.createElement('button')



                div.setAttribute('class', 'block_text')
                divButtons.setAttribute('class', 'div_buttons')
                deleteButton.setAttribute('class', 'delete_button')
                editButton.setAttribute('class', 'edit_button')
                text.setAttribute('class', 'line')
                p.setAttribute('class', 'p')

                deleteButton.innerHTML = 'delete'
                editButton.innerHTML = 'edit'

                deleteButton.onclick = ()=> div.remove()

                editButton.onclick = () => {
                    const editText = prompt(`EDIT ${text.innerHTML}`).trim()
                    editText === '' ? alert('нельзя менять на пустоту'): text.innerHTML = editText
                }

                p.innerHTML = input.value
                div.append(p)
                divButtons.append(deleteButton, editButton)
                div.append(text, divButtons)
                todoList.prepend(div)
            // document.querySelector('#todo_list').innerHTML

                let line = document.querySelectorAll('.p')
                for (let i = 0; i < line.length; i++){
                    line[i].onclick = function () {
                        this.classList.toggle('strikethrough')
                    }
                }
            }
            createButton.onclick = () => createTodo()
            window.onkeydown = (event) => {
                console.log(event.keyCode)
                if (event.keyCode === 13){
                    createTodo()
                }
            }

    }





}






// ontoggle(  )