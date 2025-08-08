// Tab system for mind maps
function openTab(evt, tabName) {
  let tabs = document.getElementsByClassName("tab-content");
  for (let tab of tabs) tab.style.display = "none";
  
  let buttons = document.getElementsByClassName("tab");
  for (let btn of buttons) btn.classList.remove("active");
  
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Dark mode toggle (add to index.html)
function toggleDarkMode() {
  document.body.classList.toggle('dark');
}
