document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
        <nav>
            <div class="nav-wrapper indigo darken-3" style="display: flex; align-items: center; padding: 0 10px;">
                <img src="logo.svg" alt="Logo" style="height: 50px; margin-right: 10px;">
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="index.html">首頁</a></li>
                    <li><a href="introduce.html">寶可夢介紹</a></li>
                    <li><a href="vote.html">人氣投票</a></li>
                    <li><a href="center.html">寶可夢中心</a></li>
                </ul>
            </div>
        </nav>
    `;
    document.getElementById("header").innerHTML = headerHTML;
});
