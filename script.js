// DropDwon Menu
const mainMenu = document.querySelector('ul.top-nav-menu');

// Get Li item with class has-child
const hasChild = mainMenu.querySelectorAll('li.has-child');

// Loop through each li item with class has-child
hasChild.forEach(item => {
    // Get anchortag
    // const anchor = item.querySelector('a');
    // Add event listener to each li item
    item.addEventListener('mouseover', function(e) {
        // Prevent default behaviour
        e.preventDefault();
        // Get the parent li item
        const dropdwon = this.querySelector('ul.dropdown-menu');
        // Toggle the child ul item
        dropdwon.classList.add('active');
    });

    // Add event lister on Mouse out
    item.addEventListener('mouseout', function(e) {
                // Prevent default behaviour
        e.preventDefault();
        // Get the parent li item
        const dropdwon = this.querySelector('ul.dropdown-menu');
        // Toggle the child ul item
        dropdwon.classList.remove('active');

    });
});