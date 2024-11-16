const searchBar = document.querySelector('.search-bar');
const dropdown = document.querySelector('.recent-searches-dropdown-div');

searchBar.addEventListener('focus', () => {
    dropdown.classList.remove('hidden'); // 
});

document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target) && !searchBar.contains(event.target)) {
        dropdown.classList.add('hidden');
    }
});
