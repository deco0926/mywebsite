document.addEventListener("DOMContentLoaded", function () {
    const footerHTML = `
        <footer class="page-footer indigo darken-3">
            <div class="container" style="text-align: center;">
                <a href="https://www.youtube.com/channel/UCUsB9KTwSGgPlIARzdaKb_Q" target="_blank" style="margin: 0 10px;">
                    <img src="youtube.svg" alt="YouTube" style="width: 36px; height: 36px;">
                </a>
                <a href="https://www.facebook.com/Pokemon.Official.Taiwan/?locale=zh_TW" target="_blank" style="margin: 0 10px;">
                    <img src="facebook.svg" alt="Facebook" style="width: 36px; height: 36px;">
                </a>
                <a href="https://www.instagram.com/pokemon_taiwan/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" style="margin: 0 10px;">
                    <img src="instagram.svg" alt="Instagram" style="width: 36px; height: 36px;">
                </a>
                <p>@達達的寶可夢網站</p>
            </div>
        </footer>
    `;

    // 將 footer 插入到指定的容器中
    document.getElementById("footer").innerHTML = footerHTML;
});
