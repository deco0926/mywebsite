document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <nav>
            <div class="nav-wrapper indigo darken-3">
                <a href="#" class="brand-logo">寶可夢介紹</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="main.html">首頁</a></li>
                    <li><a href="main.html">寶可夢介紹</a></li>
                    <li><a href="main.html">人氣投票</a></li>
                    <li><a href="main.html">寶可夢中心</a></li>
                </ul>
            </div>
        </nav>
    `;

    document.getElementById("header").innerHTML = headerHTML;
});
