// 1. 資料設定區
const bookmarksData = [
    {
        category: "Most Used",
        items: [
            // 1. X (Twitter)
            { 
                name: "X (Twitter)", 
                desc: "What's happening?", 
                url: "https://x.com/home", 
                image: "images/twitter.webp", 
                bgColor: "#000000",
            },
            // 2. Steam
            { 
                name: "Steam", 
                desc: "Ultimate gaming platform", 
                url: "https://store.steampowered.com/", 
                image: "images/steam.png", 
                bgColor: "#171a21", 
                padding: "15px"
            },
            // 3. Bangumi
            { 
                name: "Bangumi", 
                desc: "Anime & manga tracker", 
                url: "https://bangumi.tv/", 
                image: "images/bangumi.png",
                // 沒設定 bgColor 則使用 CSS 預設
            },
            // 4. Keylol
            { 
                name: "Keylol", 
                desc: "Game community", 
                url: "https://keylol.com/", 
                image: "images/keylol.png" 
            },
            // 5. Pixiv
            { 
                name: "Pixiv", 
                desc: "Illustration community", 
                url: "https://www.pixiv.net/", 
                image: "images/pixiv.png", 
                bgColor: "#0096fa", 
                padding: "10px"
            },
            // 6. Google Drive
            { 
                name: "Drive", 
                desc: "Google Drive storage", 
                url: "https://drive.google.com/drive/my-drive", 
                image: "images/drive.png" 
            },
            // 7. Bilibili
            { 
                name: "Bilibili", 
                desc: "Anime streaming", 
                url: "https://www.bilibili.com/anime", 
                image: "images/bilibili.png", 
                bgColor: "#00A1D6", 
                padding: "15px"
            },
            // 8. Folo
            { 
                name: "Folo", 
                desc: "Information hub", 
                url: "https://app.folo.is/timeline/articles/all/pending", 
                bgColor: "#FF5C00", 
                image: "images/folo.png" 
            },
            // 9. NGA
            { 
                name: "NGA", 
                desc: "Elite gamer forum", 
                url: "https://bbs.nga.cn/", 
                bgColor: "#591804", 
                image: "images/nga.png" 
            },
            // 10. Telegram
            { 
                name: "Telegram", 
                desc: "Cloud-based messaging", 
                url: "https://web.telegram.org/", 
                image: "images/telegram.png", 
                bgColor: "#2481CC", 
                padding: "20px"
            },
            // 11. Notion
            { 
                name: "Notion", 
                desc: "All-in-one workspace", 
                url: "https://www.notion.so/", 
                image: "images/notion.png", 
                bgColor: "#FFFFFF", 
                padding: "15px"
            },
            // 12. YouTube
            { 
                name: "YouTube", 
                desc: "Broadcast Yourself", 
                url: "https://www.youtube.com/", 
                image: "images/youtube.png", 
                bgColor: "#FFFFFF", 
                padding: "20px"
            },
            // 13. YouTube Music
            { 
                name: "YT Music", 
                desc: "Music streaming", 
                url: "https://music.youtube.com/", 
                image: "images/ytmusic.png" 
            },
            // 14. Darmoshark
            { 
                name: "Darmoshark", 
                desc: "Gaming peripherals", 
                url: "https://www.darmoshark.cc/#/", 
                image: "images/darmoshark.png" 
            },
            // 15. Discord
            { 
                name: "Discord", 
                desc: "Talk, chat, hang out", 
                url: "https://discord.com/channels/506071363602219010/506071364071849996", 
                image: "images/discord.png", 
                bgColor: "#00A0DF", 
                padding: "20px"
            },
            // 16. Schwab
            { 
                name: "Charles Schwab", 
                desc: "Financial services", 
                url: "https://client.schwab.com/Areas/Access/Login?SessionTimeOut=y&ReturnUrl=%2fclientapps%2faccounts%2fsummary%2f",
                bgColor: "#00A0DF", 
                image: "images/charlesschwab.png" 
            },
            // 17. Time.is
            { 
                name: "Time.is", 
                desc: "Exact time now", 
                url: "https://time.is/", 
                bgColor: "#CC3355",
                image: "images/timeis.png" 
            },
            // 18. Gemini
            { 
                name: "Gemini", 
                desc: "Google AI assistant", 
                url: "https://gemini.google.com/app", 
                image: "images/gemini.svg", 
                bgColor: "#F0F4F9", 
                padding: "20px"
            },
            // 19. Keep
            { 
                name: "Keep", 
                desc: "Note taking", 
                url: "https://keep.google.com/", 
                image: "images/keep.png" 
            }
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

            // 左側圖片區
            const imgWrapper = document.createElement('div');
            imgWrapper.className = 'card-img-wrapper';

            // 設定底色
            if (site.bgColor) {
                imgWrapper.style.backgroundColor = site.bgColor;
            }

            // 圖片本體
            const img = document.createElement('img');
            img.className = 'card-img';
            img.src = site.image; 
            img.alt = site.name;
            
            // 設定內距與縮放
            if (site.padding) {
                img.style.padding = site.padding;
                img.style.objectFit = "contain"; 
            }

            img.onerror = function() {
                this.style.display = 'none';
                imgWrapper.style.display = 'flex';
                imgWrapper.style.alignItems = 'center';
                imgWrapper.style.justifyContent = 'center';
                imgWrapper.style.backgroundColor = '#333';
                imgWrapper.innerText = site.name[0];
                imgWrapper.style.color = '#fff';
                imgWrapper.style.fontSize = '2rem';
                imgWrapper.style.fontWeight = 'bold';
            };

            imgWrapper.appendChild(img);

            // 右側文字區
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