const headerEl = document.getElementById('header');
const dropdownMenu = document.querySelector('ul');

function updateHeaderText(item) {
  headerEl.innerHTML = `${item.innerText} <i class="fa-solid fa-chevron-${
    dropdownMenu.classList.contains('hidden') ? 'down' : 'up'
  }"></i>`;
}

function toggleDropdown() {
  const isHidden = dropdownMenu.classList.toggle('hidden');
  const activeItem = document.querySelector('.active');

  if (activeItem) {
    updateHeaderText(activeItem);
  } else {
    headerEl.innerHTML = `Select an Item <i class="fa-solid fa-chevron-${
      isHidden ? 'down' : 'up'
    }"></i>`;
  }
}

function selectItem(item) {
  removeCheck();

  const icon = document.createElement('i');
  icon.classList.add('fa-solid', 'fa-check');
  item.appendChild(icon);
  item.classList.add('active');

  if (!dropdownMenu.classList.contains('hidden')) {
    updateHeaderText(item);
  }
}

function removeCheck() {
  const activeItem = document.querySelector('.active');
  if (activeItem) {
    const checkIcon = activeItem.querySelector('.fa-check');
    if (checkIcon) checkIcon.remove();
    activeItem.classList.remove('active');
  }
}

headerEl.addEventListener('click', toggleDropdown);

dropdownMenu.addEventListener('click', (event) => {
  const clickedItem = event.target;

  if (clickedItem.tagName.toLowerCase() === 'li') {
    selectItem(clickedItem);
  }
});
