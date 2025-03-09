document.addEventListener("DOMContentLoaded", function () {
    // Загружаем header
    fetch("assets/header-footer/header.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка загрузки: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector("header").innerHTML = data;

            // Подключаем header.css, если он еще не подключен
            if (!document.querySelector("link[href='assets/header-footer/header.css']")) {
                let link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = "assets/header-footer/header.css";
                document.head.appendChild(link);
            }
        })
        .catch(error => console.error("Ошибка загрузки header:", error));

    // Загружаем footer
    fetch("assets/header-footer/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка загрузки: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector("footer").innerHTML = data;

            // Подключаем footer.css, если он еще не подключен
            if (!document.querySelector("link[href='assets/header-footer/footer.css']")) {
                let link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = "assets/header-footer/footer.css";
                document.head.appendChild(link);
            }
        })
        .catch(error => console.error("Ошибка загрузки footer:", error));
});
