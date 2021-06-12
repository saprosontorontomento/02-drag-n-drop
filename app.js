const item = document.querySelector('.item'),
      placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover) // над 
    placeholder.addEventListener('dragenter', dragenter) // заходим на территорию
    placeholder.addEventListener('dragleave', dragleave) // перетащили, но вышли оттуда
    placeholder.addEventListener('drop', dragdrop) // отпустили
}

function dragstart(e) {
    e.target.classList.add('hold');
    setTimeout(() => e.target.classList.add('hide'), 0)
}

function dragend(e) {
    e.target.classList.remove('hold', 'hide');
}

function dragover(e) {
    e.preventDefault();
}

function dragenter(e) {
    e.target.classList.add('hovered');
}

function dragleave(e) {
    e.target.classList.remove('hovered');
}

function dragdrop(e) {
    e.target.classList.remove('hovered');
    e.target.append(item);
}