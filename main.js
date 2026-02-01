function mdw() {
  document.getElementById('menu-drop-down').style='display:grid;';
  adw_close()
}

function mdw_close() {
  document.getElementById('menu-drop-down').style = 'display:none;'
}

function adw() {
  mdw_close()
  document.getElementById('accounts-drop-down').style = 'display:grid;';
}

function adw_close() {
  document.getElementById('accounts-drop-down').style = 'display:none;'
}

function dark() {
  document.getElementById('body').style='background-color:#444444;';
  document.getElementById('view-btn').innerHTML='Light Mode';
  document.getElementById('view-btn').onclick=light;
}

function light() {
  document.getElementById('body').style = 'background-color:##B5B6C4;';
  document.getElementById('view-btn').innerHTML = 'Dark Mode';
  document.getElementById('view-btn').onclick = dark;
}