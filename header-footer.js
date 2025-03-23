document.addEventListener("DOMContentLoaded", function () {
    function getBasePath() {
        const depth = window.location.pathname.split("/").length - 2;
        return depth > 0 ? "../".repeat(depth) : "./";
    }

    function loadComponent(tagName, filePath) {
        fetch(getBasePath() + filePath)
            .then(response => {
                if (!response.ok) throw new Error(`Ошибка загрузки ${filePath}: ${response.statusText}`);
                return response.text();
            })
            .then(html => {
                document.querySelector(tagName).innerHTML = html;
            })
            .catch(error => console.error(error));
    }

    const basePath = getBasePath();
    loadComponent("header", basePath + "header.html");
    loadComponent("footer", basePath + "footer.html");
});
