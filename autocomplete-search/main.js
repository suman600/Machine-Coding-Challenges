const searchInput = document.getElementById('searchInput');
const suggestionBox = document.getElementById('suggestionBox'); // fixed typo: "suggesionBox" ➜ "suggestionBox"

const list = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

searchInput.addEventListener('input', (event) => {
  let inputVal = event.target.value.toLowerCase();
  suggestionBox.innerHTML = '';

  if (inputVal === '') return;

  const filteredItems = list.filter(item => item.toLowerCase().includes(inputVal));
  filteredItems.forEach(item => {
    let ele = document.createElement('div');
    ele.textContent = item;
    ele.classList.add('suggestion-list');
    ele.addEventListener('click', () => {
      searchInput.value = item;
      suggestionBox.innerHTML = '';
    });
    suggestionBox.appendChild(ele);
  });

  console.log(filteredItems);
});

document.addEventListener('click', (e) => {
  if (!suggestionBox.contains(e.target) && e.target !== searchInput) {
    suggestionBox.innerHTML = '';
  }
});
