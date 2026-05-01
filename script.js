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
            // 11. YouTube
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
           // 18. Claude
            { 
                name: "Claude", 
                desc: "Claude is Anthropic's AI, built for problem solvers. ", 
                url: "https://claude.ai", 
                bgColor: "#D77655",
                image: "images/Claude.svg" 
            },
            // 19. Gemini
            { 
                name: "Gemini", 
                desc: "Google AI assistant", 
                url: "https://gemini.google.com/app", 
                image: "images/gemini.svg", 
                bgColor: "#F0F4F9", 
                padding: "20px"
            },
            // 20. Keep
            { 
                name: "Keep", 
                desc: "Note taking", 
                url: "https://keep.google.com/", 
                image: "images/googlekeep.jpeg" 
            }
        ]
    },
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
                desc: "多快好省", 
                url: "https://www.jd.com/", 
                image: "images/jd.png", 
                bgColor: "#FF301A"
            },
            { 
                name: "淘寶", 
                desc: "淘到心儀好物", 
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
                desc: "日本最大のフリマサービス", 
                url: "https://jp.mercari.com/", 
                image: "images/mercari.png", 
                bgColor: "#E32B36"
            },
            { 
                name: "蝦皮購物", 
                desc: "台灣最大電商平台，享受超值購物", 
                url: "https://shopee.tw/", 
                image: "images/shopee.png", 
                bgColor: "#EE4D2D"
            }
        ]
    }
];
// 2. 渲染邏輯
// 2. 渲染邏輯與互動控制
function renderBookmarks() {
    const container = document.getElementById('bookmark-container');
    const navContainer = document.getElementById('nav-links');
    
    // 清空容器
    container.innerHTML = '';
    navContainer.innerHTML = '';

    const groupElements = [];
    const navButtons = [];
    
    // 新增：狀態追蹤變數
    let currentCategoryIndex = 0; 
    let isScrolling = false; // 滾輪防抖冷卻鎖

    // --- 新增：獨立出來的共用切換邏輯 ---
    function switchCategory(newIndex) {
        // 邊界防護：如果索引超出範圍，或是跟目前一樣，則不動作
        if (newIndex < 0 || newIndex >= bookmarksData.length || newIndex === currentCategoryIndex) return;
        
        // A. 隱藏所有內容區塊
        groupElements.forEach(el => el.style.display = 'none');
        
        // B. 顯示目標區塊
        groupElements[newIndex].style.display = 'block';

        // C. 更新按鈕狀態
        navButtons.forEach(btn => btn.classList.remove('active'));
        navButtons[newIndex].classList.add('active');

        // 更新當前索引
        currentCategoryIndex = newIndex;
    }

    bookmarksData.forEach((group, index) => {
        // --- 1. 建立內容區塊 ---
        const groupDiv = document.createElement('div');
        groupDiv.className = 'category-group';
        groupDiv.id = `category-${index}`;
        
        if (index !== 0) {
            groupDiv.style.display = 'none';
        }

<<<<<<< HEAD
=======
        const title = document.createElement('h2');
        title.style.color = "var(--text-secondary)";
        title.style.marginBottom = "20px";
        title.style.fontSize = "1.2rem";
        title.textContent = group.category;
        groupDiv.appendChild(title);

>>>>>>> a241fdbbccef823d3f5222860fcb46802ac16291
        const grid = document.createElement('div');
        grid.className = 'grid';

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
        groupElements.push(groupDiv);

        // --- 2. 建立側邊欄按鈕 ---
        const navBtn = document.createElement('button');
        navBtn.className = 'nav-btn';
        navBtn.textContent = group.category;
        
        if (index === 0) {
            navBtn.classList.add('active');
        }

        // --- 3. 點擊切換事件 (改呼叫共用邏輯) ---
        navBtn.addEventListener('click', () => {
            switchCategory(index);
        });

        navContainer.appendChild(navBtn);
        navButtons.push(navBtn);
    });

    // --- 4. 新增：全域滑鼠滾輪事件監聽 ---
    window.addEventListener('wheel', (event) => {
        // 如果還在冷卻時間內，無視滾輪操作
        if (isScrolling) return;

        if (event.deltaY > 0) {
            // 向下滾動 -> 切換到下一個分類
            if (currentCategoryIndex < bookmarksData.length - 1) {
                switchCategory(currentCategoryIndex + 1);
                triggerCooldown();
            }
        } else if (event.deltaY < 0) {
            // 向上滾動 -> 切換到上一個分類
            if (currentCategoryIndex > 0) {
                switchCategory(currentCategoryIndex - 1);
                triggerCooldown();
            }
        }
    });

    // 冷卻時間控制函數 (避免一次滾動跳躍太多分類)
    function triggerCooldown() {
        isScrolling = true;
        setTimeout(() => {
            isScrolling = false;
        }, 400); // 400 毫秒的冷卻時間，配合 CSS 的淡入動畫長度最自然
    }
}

<<<<<<< HEAD
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
            setTimeout(() => { isThrottled = false; }, 300); // 300ms 冷卻
        }, { passive: true });
    });
})();
=======
document.addEventListener('DOMContentLoaded', renderBookmarks);
>>>>>>> a241fdbbccef823d3f5222860fcb46802ac16291
