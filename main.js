var submitBtn = document.querySelector('.submitBtn');

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();    
    var newTaskValue = document.querySelector('.inputText').value;
    var error = document.querySelector('.error');
    
    if(newTaskValue) {                
        error.style.display = "none";
        
        var newList = document.createElement('li');
        var editableTask = document.createElement('textarea');
        editableTask.setAttribute("disabled", "true");
        editableTask.value = newTaskValue;

        var removeBtn = document.createElement('span');
        removeBtn.className = "remove";
        removeBtn.textContent = "Remove";
        removeBtn.onclick = remove;

        var editBtn = document.createElement('span');
        editBtn.className = "edit";
        editBtn.textContent = "edit";
        editBtn.onclick = edit;

        document.querySelector('ul')
        .appendChild(newList).appendChild(editableTask)
        .insertAdjacentElement("afterend", editBtn).insertAdjacentElement("afterend", removeBtn);                     
    } 
    else {
        error.style.display = "block";
    }    

    document.querySelector('.inputText').value = "";        
    return false;
});

function remove(e) {
    e.preventDefault();
    e.target.parentNode.style.display = "none";
}

function edit(e) {
    e.preventDefault();    
    var inputTask = e.target.previousElementSibling;    
    if(inputTask.hasAttribute('disabled')) {
        e.target.textContent = "Save";
        inputTask.removeAttribute('disabled')          
    } else {
        inputTask.setAttribute("disabled", "true");
        e.target.textContent = "Edit";
    }
}