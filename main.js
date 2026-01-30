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