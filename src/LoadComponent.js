function loadComponent(componentId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

loadComponent('navbar', 'template/navbar.html');
loadComponent('sidemenu', 'template/sidemenu.html');
