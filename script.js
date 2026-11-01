// 1. 資料設定區
const bookmarksData = [
    {
        category: "Most Used",
        items: [
            // 1. X (Twitter)
            { 
                name: "X (Twitter)", 
                desc: "突發新聞、娛樂、體育與政治的即時動態", 
                url: "https://x.com/home", 
                image: "images/twitter.webp", 
                bgColor: "#000000",
            },
            // 2. Steam
            { 
                name: "Steam", 
                desc: "Play, discuss, and create games.", 
                url: "https://store.steampowered.com/", 
                image: "images/steam.png", 
                bgColor: "#171a21", 
                padding: "15px"
            },
            // 3. Bangumi
            { 
                name: "Bangumi", 
                desc: "专注动漫、音乐、游戏的 ACG 同好社区", 
                url: "https://bangumi.tv/", 
                image: "images/bangumi.png",
                // 沒設定 bgColor 則使用 CSS 預設
            },
            // 4. Keylol
            { 
                name: "Keylol", 
                desc: "Steam 等正版 PC 玩家的游戏社区", 
                url: "https://keylol.com/", 
                image: "images/keylol.png" 
            },
            // 5. Pixiv
            { 
                name: "Pixiv", 
                desc: "全球最大的插畫、漫畫、小說創作社群", 
                url: "https://www.pixiv.net/", 
                image: "images/pixiv.png", 
                bgColor: "#0096fa", 
                padding: "10px"
            },
            // 6. Google Drive
            { 
                name: "Drive", 
                desc: "安全的個人雲端儲存與檔案共用", 
                url: "https://drive.google.com/drive/my-drive", 
                image: "images/googleDrive.png" 
            },
            // 7. Bilibili
            { 
                name: "Bilibili", 
                desc: "动漫新番、弹幕视频与创意 Up 主", 
                url: "https://www.bilibili.com/anime", 
                image: "images/bilibili.png", 
                bgColor: "#00A1D6", 
            },
            // 8. Folo
            { 
                name: "Folo", 
                desc: "AI RSS Reader for noise-free reading.", 
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
                desc: "Fast. Secure. Powerful.", 
                url: "https://web.telegram.org/", 
                image: "images/telegram.svg", 
                bgColor: "#ffffff", 
                padding: "20px"
            },
            // 11. Garmin Connect
            {
                name: "Garmin Connect",
                desc: "Record your active lifestyle.",
                url: "https://connect.garmin.com/modern/",
                image: "images/garmin.png",
                bgColor: "#1B5EA0",
                padding: "0px"
            },
            // 12. Koofr
            {
                name: "Koofr",
                desc: "Private European cloud storage.",
                url: "https://app.koofr.net/app/",
                image: "images/koofr.png",
                bgColor: "#1B5EA0",
                padding: "0px"
            },
            // 13. YouTube
            { 
                name: "YouTube", 
                desc: "觀看、上傳並分享喜愛的影片與音樂", 
                url: "https://www.youtube.com/",
                bgColor: "#FF0033",
                image: "images/youtube.svg"
            },
            // 14. YouTube Music
            { 
                name: "YT Music", 
                desc: "動動手指暢聽超過 1 億首歌曲", 
                url: "https://music.youtube.com/", 
                bgColor: "#F90114",
                image: "images/YT_Music.svg" 
            },
            // 15. Darmoshark
            { 
                name: "Darmoshark", 
                desc: "Key remapping, macros, and shortcuts.", 
                url: "https://www.darmoshark.cc/#/", 
                image: "images/darmoshark.jpg" 
            },
            // 16. Discord
            { 
                name: "Discord", 
                desc: "Your space to talk, play, and hang out.", 
                url: "https://discord.com/channels/506071363602219010/506071364071849996", 
                image: "images/discord.jpg", 
            },
            // 17. Charles Schwab
            { 
                name: "Charles Schwab", 
                desc: "$0 commission online brokerage.", 
                url: "https://client.schwab.com/Areas/Access/Login?SessionTimeOut=y&ReturnUrl=%2Fclientapps%2Faccounts%2Fsummary%2F&lang=zh-tw",
                bgColor: "#00A0DF", 
                image: "images/charlesSCHWAB.png" 
            },
            // 18. Interactive Brokers
            {
                name: "IBKR",
                desc: "Trade stocks, options & futures globally.",
                url: "https://www.interactivebrokers.com/sso/Login",
                bgColor: "#D81222",
                image: "images/ibkr.png"
            },
            // 19. Time.is
            { 
                name: "Time.is", 
                desc: "與原子鐘同步的精準世界時間", 
                url: "https://time.is/", 
                bgColor: "#CC3355",
                image: "images/timeis.png" 
            },
           // 20. Claude
            { 
                name: "Claude", 
                desc: "Claude is the AI assistant for work.", 
                url: "https://claude.ai", 
                bgColor: "#D77655",
                image: "images/Claude.svg" 
            },
            // 21. Gemini
            { 
                name: "Gemini", 
                desc: "Google AI 助理：寫作、規劃、腦力激盪", 
                url: "https://gemini.google.com/app", 
                image: "images/gemini.svg", 
                bgColor: "#F0F4F9", 
                padding: "20px"
            },
            // 22. Keep
            { 
                name: "Keep", 
                desc: "隨手記錄想法、清單、相片與語音", 
                url: "https://keep.google.com/", 
                image: "images/googlekeep.jpeg" 
            },
            // 23. Gmail
            {
                name: "Gmail",
                desc: "Gemini AI 加持的智慧安全收件匣",
                url: "https://mail.google.com/mail/u/0/",
                image: "images/gmail.svg",
                bgColor: "#ffffff",
                padding: "20px"
            }
        ]
    },
    {
        category: "OTT",
        items: [
            { name: "Netflix", desc: "線上觀賞 Netflix 電影與節目", url: "https://www.netflix.com/browse", image: "images/netflix.png", bgColor: "#24292e" },
            { name: "Disney+", desc: "迪士尼、皮克斯、漫威、星戰與國家地理", url: "https://www.disneyplus.com/zh-hant/select-profile", image: "images/disney+.png"},
            // 3. hami video
            { 
                name: "Hami Video", 
                desc: "台灣影視 No.1：電影、戲劇、新番動漫", 
                url: "https://hamivideo.hinet.net/%E5%BD%B1%E5%8A%87%E9%A4%A8%E2%81%BA/%E5%8B%95%E6%BC%AB/%E6%8E%A8%E8%96%A6.do", 
                image: "images/hamivideo.png",
                bgColor: "#FFFFFF", 
                padding: "20px"

            }
        ]
    },
    {
        category: "e-Shopping",
        items: [
            { 
                name: "PChome 24h", 
                desc: "台灣綜合網路購物", 
                url: "https://24h.pchome.com.tw/", 
                image: "images/pchome.png", 
                bgColor: "#FFFFFF"
            },
            { 
                name: "京東 (JD)", 
                desc: "正品低价的综合网上购物商城", 
                url: "https://www.jd.com/", 
                image: "images/jd.png", 
                bgColor: "#FF301A"
            },
            { 
                name: "淘寶", 
                desc: "面向全球的綜合性電商平台", 
                url: "https://world.taobao.com/", 
                image: "images/taobao.png", 
                bgColor: "#FF5000", 
            },
            { 
                name: "Amazon JP", 
                desc: "本 , ファッション , 家電から食品まで", 
                url: "https://www.amazon.co.jp/", 
                image: "images/amazon.png"            },
            { 
                name: "Mercari", 
                desc: "日本最大的フリマサービス", 
                url: "https://jp.mercari.com/", 
                image: "images/mercari.png", 
                bgColor: "#E32B36"
            },
            { 
                name: "蝦皮購物", 
                desc: "全台最懂你的一站式線上購物平台", 
                url: "https://shopee.tw/", 
                image: "images/shopee.png", 
                bgColor: "#EE4D2D"
            }
        ]
    }
];
// 2. 渲染邏輯

// 記住使用者上次瀏覽的分類
const CATEGORY_STORAGE_KEY = 'lastCategoryIndex';

function getSavedCategoryIndex() {
    const saved = parseInt(localStorage.getItem(CATEGORY_STORAGE_KEY), 10);
    return (!isNaN(saved) && saved >= 0 && saved < bookmarksData.length) ? saved : 0;
}

function renderBookmarks() {
    const container = document.getElementById('bookmark-container');
    const navContainer = document.getElementById('nav-links');
    
    // 清空容器
    container.innerHTML = '';
    navContainer.innerHTML = '';

    // 用來儲存所有的分類區塊 DOM，方便後續切換顯示
    const groupElements = [];
    const navButtons = [];
    const initialIndex = getSavedCategoryIndex();

    bookmarksData.forEach((group, index) => {
        // --- 1. 建立內容區塊 (Card Grid) ---
        const groupDiv = document.createElement('div');
        groupDiv.className = 'category-group';
        groupDiv.id = `category-${index}`;

        // 預設邏輯：只顯示上次瀏覽的分類（或第一個），其他隱藏
        if (index !== initialIndex) {
            groupDiv.style.display = 'none';
        }

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
        
        // 預設 active 狀態對應上次瀏覽的分類
        if (index === initialIndex) {
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

            // D. 記住這次瀏覽的分類
            localStorage.setItem(CATEGORY_STORAGE_KEY, index);
        });

        navContainer.appendChild(navBtn);
        navButtons.push(navBtn);
    });
}

// 3. 搜尋功能
document.addEventListener('DOMContentLoaded', function() {
    renderBookmarks();

    document.getElementById('searchInput').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
                window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            }
        }
    });
});

// 4. 滾輪全頁切換分類
(function initWheelSwitch() {
    let currentIndex = 0;
    let isThrottled = false;

    // 等 DOM 與 renderBookmarks 完成後再掛載
    document.addEventListener('DOMContentLoaded', function() {
        // renderBookmarks 已經根據上次瀏覽紀錄顯示了正確的分類，這裡同步起始索引
        currentIndex = getSavedCategoryIndex();

        // 取得所有分類區塊與側邊欄按鈕 (renderBookmarks 已產生)
        function getElements() {
            return {
                groups: Array.from(document.querySelectorAll('.category-group')),
                buttons: Array.from(document.querySelectorAll('.nav-btn'))
            };
        }

        function switchTo(index) {
            const { groups, buttons } = getElements();
            if (index < 0 || index >= groups.length) return;

            groups.forEach(el => el.style.display = 'none');
            groups[index].style.display = 'block';

            buttons.forEach(btn => btn.classList.remove('active'));
            if (buttons[index]) buttons[index].classList.add('active');

            currentIndex = index;
            localStorage.setItem(CATEGORY_STORAGE_KEY, index);
        }

        document.addEventListener('wheel', function(e) {
            // 若焦點在搜尋框，不攔截
            if (document.activeElement === document.getElementById('searchInput')) return;
            // 節流：切換動畫期間忽略連續滾動
            if (isThrottled) return;

            if (e.deltaY > 0) {
                switchTo(currentIndex + 1); // 向下 → 下一分類
            } else if (e.deltaY < 0) {
                switchTo(currentIndex - 1); // 向上 → 上一分類
            }

            isThrottled = true;
            setTimeout(() => { isThrottled = false; }, 700); // 700ms 冷卻
        }, { passive: true });
    });
})();