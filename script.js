// 1. 資料設定區
const bookmarksData = [
    {
        category: "Most Used",
        items: [
            // 注意：圖片 Placeholder 已更新為 120x120
            { name: "Twitter", desc: "What's happening?", url: "https://x.com/home", image: "images/twitter.webp" },
            { name: "Steam", desc: "Ultimate gaming platform", url: "https://store.steampowered.com/", image: "images/steam.jpg" },
            { name: "Bangumi", desc: "Anime & manga tracker", url: "https://bangumi.tv/", image: "https://placehold.co/120x120/f09199/ffffff?text=Bgm" },
            { name: "Keylol", desc: "Game community", url: "https://keylol.com/", image: "https://placehold.co/120x120/333/fff?text=Key" },
            { name: "Pixiv", desc: "Illustration community", url: "https://www.pixiv.net/", image: "https://placehold.co/120x120/0096fa/fff?text=Pixiv" },
            { name: "Drive", desc: "Google Drive storage", url: "https://drive.google.com/drive/my-drive", image: "https://placehold.co/120x120/1FA463/fff?text=Drive" },
            { name: "Bilibili", desc: "Anime streaming", url: "https://www.bilibili.com/anime", image: "https://placehold.co/120x120/00A1D6/fff?text=Bili" },
            { name: "Folo", desc: "Information hub", url: "https://app.folo.is/timeline/articles/all/pending", image: "https://placehold.co/120x120/333/fff?text=Folo" },
            { name: "NGA", desc: "Elite gamer forum", url: "https://bbs.nga.cn/", image: "https://placehold.co/120x120/5C0D0E/fff?text=NGA" },
            { name: "Telegram", desc: "Cloud-based messaging", url: "https://web.telegram.org/", image: "https://placehold.co/120x120/2481CC/fff?text=TG" },
            { name: "Notion", desc: "All-in-one workspace", url: "https://www.notion.so/", image: "https://placehold.co/120x120/000/fff?text=Notion" },
            { name: "YouTube", desc: "Broadcast Yourself", url: "https://www.youtube.com/", image: "https://placehold.co/120x120/FF0000/fff?text=YT" },
            { name: "YT Music", desc: "Music streaming", url: "https://music.youtube.com/", image: "https://placehold.co/120x120/FF0000/fff?text=Music" },
            { name: "Darmoshark", desc: "Gaming peripherals", url: "https://www.darmoshark.cc/#/" , image: "https://placehold.co/120x120/333/fff?text=Darmo" },
            { name: "Discord", desc: "Talk, chat, hang out", url: "https://discord.com/channels/506071363602219010/506071364071849996", image: "https://placehold.co/120x120/5865F2/fff?text=Discord" },
            { name: "Schwab", desc: "Financial services", url: "https://client.schwab.com/Areas/Access/Login?SessionTimeOut=y&ReturnUrl=%2fclientapps%2faccounts%2fsummary%2f", image: "https://placehold.co/120x120/00a0dd/fff?text=Schwab" },
            { name: "Time.is", desc: "Exact time now", url: "https://time.is/", image: "https://placehold.co/120x120/333/fff?text=Time" },
            { name: "Gemini", desc: "Google AI assistant", url: "https://gemini.google.com/app", image: "images/gemini.svg" },
            { name: "Keep", desc: "Note taking", url: "https://keep.google.com/", image: "https://placehold.co/120x120/FFBB00/fff?text=Keep" }
        ]
    }
];

// 2. 渲染邏輯
function renderBookmarks() {
    const container = document.getElementById('bookmark-container');
    container.innerHTML = '';

    bookmarksData.forEach(group => {
        const grid = document.createElement('div');
        grid.className = 'grid';

        group.items.forEach(site => {
            const card = document.createElement('a');
            card.className = 'card';
            card.href = site.url;
            card.target = "_self"; 

            // 左側圖片區 (120x120)
            const imgWrapper = document.createElement('div');
            imgWrapper.className = 'card-img-wrapper';

            const img = document.createElement('img');
            img.className = 'card-img';
            // 使用新尺寸的 placeholder 或自訂圖片
            img.src = site.image || `https://placehold.co/120x120/333/fff?text=${site.name[0]}`;
            img.alt = site.name;
            img.loading = "lazy";

            imgWrapper.appendChild(img);

            // 右側資訊區
            const infoDiv = document.createElement('div');
            infoDiv.className = 'card-info';

            const titleSpan = document.createElement('div');
            titleSpan.className = 'card-title';
            titleSpan.textContent = site.name;

            const descSpan = document.createElement('div');
            descSpan.className = 'card-desc';
            descSpan.textContent = site.desc || (new URL(site.url)).hostname;

            infoDiv.appendChild(titleSpan);
            infoDiv.appendChild(descSpan);

            card.appendChild(imgWrapper);
            card.appendChild(infoDiv);
            grid.appendChild(card);
        });

        container.appendChild(grid);
    });
}

// 3. 搜尋功能
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const query = this.value;
        if (query) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    }
});

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderBookmarks();
});