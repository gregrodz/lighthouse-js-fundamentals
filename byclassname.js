let names = [];
names = document.getElementsByClassName('name');
for (let i = 0; i < names.length; i++) {
  alert(names[i].textContent);
}
