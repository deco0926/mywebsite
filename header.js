document.addEventListener("DOMContentLoaded", function () {
    // Add CSS for the header
    const style = document.createElement("style");
    style.textContent = `
        /* Default logo style for larger screens */
        .logo-container img.responsive-logo {
            height: 40px; /* 調整 Logo 的高度 */
            transition: transform 0.3s ease-in-out;
        }

        /* Move logo to the right when in mobile view */
        @media screen and (max-width: 992px) {
            .logo-container {
                position: absolute;
                right: 10px;
                top: 10px;
            }
        }
    `;
    document.head.appendChild(style);

    // Add HTML for the header
    const headerHTML = `
        <nav>
            <div class="nav-wrapper indigo darken-3" style="padding: 0 10px;">
                <!-- Logo -->
                <img src="logo.svg" alt="Logo" class="responsive-logo">
                <!-- Hamburger Menu Trigger -->
                <a href="#" data-target="mobile-nav" class="sidenav-trigger right">
                    <i class="material-icons">menu</i>
                </a>
                <!-- Desktop Navigation -->
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="index.html">首頁</a></li>
                    <li><a href="introduce.html">寶可夢介紹</a></li>
                    <li><a href="vote.html">人氣投票</a></li>
                    <li><a href="center.html">寶可夢中心</a></li>
                </ul>
            </div>
        </nav>

        <!-- Mobile Navigation -->
        <ul class="sidenav" id="mobile-nav">
            <li><a href="index.html">首頁</a></li>
            <li><a href="introduce.html">寶可夢介紹</a></li>
            <li><a href="vote.html">人氣投票</a></li>
            <li><a href="center.html">寶可夢中心</a></li>
        </ul>
    `;
    document.getElementById("header").innerHTML = headerHTML;

    // Initialize sidenav for mobile
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
});
