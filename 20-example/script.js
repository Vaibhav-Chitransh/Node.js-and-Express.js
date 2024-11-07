document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');

    let cnt = 1;

    btn.addEventListener('click', () => {
        const elem = document.getElementById('text-area');
        elem.textContent = `You clicked button ${cnt++} times`;
    })
})