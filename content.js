// Створюємо панель
const panel = document.createElement('div');
panel.id = 'my-extension-panel';
panel.innerHTML = `
  <div class="panel-header">Керування</div>
  <div class="panel-body">
    <button id="btn-action-1">Дія 1</button><br>
    <button id="btn-action-2">Дія 2</button><br>
    <button id="btn-minimize">Згорнути</button>
  </div>
`;
document.body.appendChild(panel);

// Обробники кнопок
document.getElementById('btn-action-1').addEventListener('click', () => {
  console.log('Натиснуто Дія 1');
  alert('Дія 1 виконана');
});

document.getElementById('btn-action-2').addEventListener('click', () => {
  console.log('Натиснуто Дія 2');
  alert('Дія 2 виконана');
});

// Згорнути панель
document.getElementById('btn-minimize').addEventListener('click', () => {
  const body = document.querySelector('#my-extension-panel .panel-body');
  body.style.display = body.style.display === 'none' ? 'block' : 'none';
});
