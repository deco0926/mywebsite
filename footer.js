document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
        <footer class="page-footer indigo darken-3">
            <div class="container">
                © 2021 Copyright Text
            </div>
        </footer>
    `;

    // 將 footer 插入到指定的容器中
    document.getElementById("footer").innerHTML = footerHTML;
});
