const state = {};

function init() {
  state.field = Array(10).fill().map(() => Array(10));
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      state.field[i][j] = { data: `${i}=${j}` };
    }
  }
}

function app() {
  init();

  const appElem = document.querySelector('.app');

  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  for (let i = 0; i < 10; i += 1) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 10; j += 1) {
      const td = document.createElement('td');
      td.innerText = state.field[i][j].data;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);

  appElem.appendChild(table);
}

app();
