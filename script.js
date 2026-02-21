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
                desc: "終極線上遊戲平台", 
                url: "https://store.steampowered.com/", 
                image: "images/steam.png", 
                bgColor: "#171a21", 
                padding: "15px"
            },
            // 3. Bangumi
            { 
                name: "Bangumi", 
                desc: "番组计划 riff", 
                url: "https://bangumi.tv/", 
                image: "images/bangumi.png",
                // 沒設定 bgColor 則使用 CSS 預設
            },
            // 4. Keylol
            { 
                name: "Keylol", 
                desc: "驱动正版游戏的引擎！", 
                url: "https://keylol.com/", 
                image: "images/keylol.png" 
            },
            // 5. Pixiv
            { 
                name: "Pixiv", 
                desc: "毎日投稿されるイラストから素敵な作品を探そう！", 
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
                image: "images/googleDrive.png" 
            },
            // 7. Bilibili
            { 
                name: "Bilibili", 
                desc: "哔哩哔哩(゜-゜)つロ干杯~-", 
                url: "https://www.bilibili.com/anime", 
                image: "images/bilibili.png", 
                bgColor: "#00A1D6", 
            },
            // 8. Folo
            { 
                name: "Folo", 
                desc: "Folo 是你的 AI RSS 閱讀器", 
                url: "https://app.folo.is/timeline/articles/all/pending", 
                bgColor: "#FF5C00", 
                image: "images/folo.png" 
            },
            // 9. NGA
            { 
                name: "NGA", 
                desc: "菁英玩家俱樂部", 
                url: "https://bbs.nga.cn/", 
                bgColor: "#591804", 
                image: "images/nga.png" 
            },
            // 10. Telegram
            { 
                name: "Telegram", 
                desc: "Cloud-based messaging", 
                url: "https://web.telegram.org/", 
                image: "images/telegram.svg", 
                bgColor: "#ffffff", 
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
                bgColor: "#FF0033",
                image: "images/youtube.svg"
            },
            // 13. YouTube Music
            { 
                name: "YT Music", 
                desc: "Music streaming", 
                url: "https://music.youtube.com/", 
                bgColor: "#F90114",
                image: "images/YT_Music.svg" 
            },
            // 14. Darmoshark
            { 
                name: "Darmoshark", 
                desc: "Gaming peripherals", 
                url: "https://www.darmoshark.cc/#/", 
                image: "images/darmoshark.jpg" 
            },
            // 15. Discord
            { 
                name: "Discord", 
                desc: "Talk, chat, hang out", 
                url: "https://discord.com/channels/506071363602219010/506071364071849996", 
                image: "images/discord.jpg", 
            },
            // 16. Charles Schwab
            { 
                name: "Charles Schwab", 
                desc: "Financial services", 
                url: "https://client.schwab.com/Areas/Access/Login?SessionTimeOut=y&ReturnUrl=%2fclientapps%2faccounts%2fsummary%2f",
                bgColor: "#00A0DF", 
                image: "images/charlesSCHWAB.png" 
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
                image: "images/googlekeep.jpeg" 
            }
        ]
    },
    // --- 為了測試側邊欄跳轉，我加上了一個示範用的新分類 ---
    {
        category: "OTT",
        items: [
            { name: "Netflix", desc: "讓您在線上觀賞節目與電影", url: "https://www.netflix.com/browse", image: "images/netflix.png", bgColor: "#24292e" },
            { name: "Disney+", desc: "盡情觀賞電影、電視影集和原創作品", url: "https://www.disneyplus.com/zh-hant/select-profile", image: "images/disney+.png"},
            // 3. hami video
            { 
                name: "Hami Video", 
                desc: "懂你想看的 OTT 線上影視平台", 
                url: "https://hamivideo.hinet.net/%E5%BD%B1%E5%8A%87%E9%A4%A8%E2%81%BA/%E5%8B%95%E6%BC%AB/%E6%8E%A8%E8%96%A6.do", 
                image: "images/hamivideo.png",
                bgColor: "#FFFFFF", 
                padding: "20px"

            }
        ]
    }
];
// 2. 渲染邏輯
function renderBookmarks() {
    const container = document.getElementById('bookmark-container');
    const navContainer = document.getElementById('nav-links');
    
    // 清空容器
    container.innerHTML = '';
    navContainer.innerHTML = '';

    // 用來儲存所有的分類區塊 DOM，方便後續切換顯示
    const groupElements = [];
    const navButtons = [];

    bookmarksData.forEach((group, index) => {
        // --- 1. 建立內容區塊 (Card Grid) ---
        const groupDiv = document.createElement('div');
        groupDiv.className = 'category-group';
        groupDiv.id = `category-${index}`;
        
        // 預設邏輯：只有第 0 個分類 (Most Used) 顯示，其他隱藏
        if (index !== 0) {
            groupDiv.style.display = 'none';
        }

        /* 分類標題 (可選顯示)
        const title = document.createElement('h2');
        title.style.color = "var(--text-secondary)";
        title.style.marginBottom = "20px";
        title.style.fontSize = "1.2rem";
        title.textContent = group.category;
        groupDiv.appendChild(title);*/

        const grid = document.createElement('div');
        grid.className = 'grid';

        // 生成卡片 (維持原本邏輯)
        group.items.forEach(site => {
            const card = document.createElement('a');
            card.className = 'card';
            card.href = site.url;
            card.target = "_self"; 

            const imgWrapper = document.createElement('div');
            imgWrapper.className = 'card-img-wrapper';
            if (site.bgColor) imgWrapper.style.backgroundColor = site.bgColor;

            const img = document.createElement('img');
            img.className = 'card-img';
            img.src = site.image; 
            img.alt = site.name;
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

        groupDiv.appendChild(grid);
        container.appendChild(groupDiv);
        
        // 將建立好的區塊存入陣列
        groupElements.push(groupDiv);

        // --- 2. 建立側邊欄按鈕 ---
        const navBtn = document.createElement('button');
        navBtn.className = 'nav-btn';
        navBtn.textContent = group.category;
        
        // 預設第一個按鈕為 active 狀態
        if (index === 0) {
            navBtn.classList.add('active');
        }

        // --- 3. 點擊切換邏輯 (Tab Switching) ---
        navBtn.addEventListener('click', () => {
            // A. 隱藏所有內容區塊
            groupElements.forEach(el => el.style.display = 'none');
            
            // B. 顯示被點擊的那個區塊
            groupElements[index].style.display = 'block';

            // C. 更新按鈕狀態 (移除舊的 active，新增新的 active)
            navButtons.forEach(btn => btn.classList.remove('active'));
            navBtn.classList.add('active');
        });

        navContainer.appendChild(navBtn);
        navButtons.push(navBtn);
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

document.addEventListener('DOMContentLoaded', renderBookmarks);