function initNavTab() {
    // Constants for DOM manipulation
    const navItem = document.querySelectorAll('[data-animation="nav-item"]');
    const navContent = document.querySelectorAll('[data-animation="nav-content"]');
    const navTitle = document.querySelectorAll('[data-animation="nav-title"]');

    // Constants to activate or desactivate classes
    const classContent = 'activeTabContent';
    const classItem = 'activeTabItem';

    // Adding classes for first item and content
    navContent[0].classList.add(classContent);
    navTitle[0].classList.add(classItem);

    // Function to activate click event
    function activeTab(index) {
        // Loop through content and items to remove the classes
        navContent.forEach((item) => {
            item.classList.remove(classContent);
        });

        navTitle.forEach((item) => {
            item.classList.remove(classItem);
        });

        // Adding classes to the item and content that was clicked
        navContent[index].classList.add(classContent);
        navTitle[index].classList.add(classItem);
    }

    // Event
    navItem.forEach((item, index) => {
        item.addEventListener('click', () => {
            activeTab(index);
        })
    })
}
initNavTab();