const btn = document.querySelector('#btn');
const container = document.querySelector('.container');

btn.addEventListener('click',()=>{
    createNotification();
})

const createNotification = () => {
    const node = document.createElement('div');
    node.textContent = 'This is test notification!';
    node.classList.add('toast');
    container.appendChild(node);

    setTimeout(() => {
        node.remove()
    },3000);
}