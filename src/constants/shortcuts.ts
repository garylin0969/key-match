// 快捷鍵接口
export interface ShortcutItem {
    mainCategory: string; // 主分類：SYSTEM, OFFICE, VSCODE 等
    subCategory: string; // 子分類：系統操作, 檔案管理 等
    description: string;
    key: string;
}

export enum SYSTEM_ENUM {
    WINDOWS = 'Windows',
    MACOS = 'macOS',
}

// 主分類定義
export const MAIN_CATEGORIES = {
    SYSTEM: 'SYSTEM',
    // 未來擴展：
    // OFFICE: 'OFFICE',
    // VSCODE: 'VSCODE',
    // BROWSER: 'BROWSER',
} as const;

// 分類配置
export const CATEGORY_CONFIG = {
    [MAIN_CATEGORIES.SYSTEM]: {
        name: '系統操作',
        subCategories: ['系統操作', '文字編輯', '檔案管理', '視窗管理', '瀏覽器', '截圖'],
    },
} as const;

// 快捷鍵數據結構
export const SYSTEM_SHORTCUTS: {
    windows: ShortcutItem[];
    mac: ShortcutItem[];
} = {
    windows: [
        // 系統操作
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '複製',
            key: 'Ctrl + C',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '貼上',
            key: 'Ctrl + V',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '剪下',
            key: 'Ctrl + X',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '復原',
            key: 'Ctrl + Z',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '重做',
            key: 'Ctrl + Y',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '全選',
            key: 'Ctrl + A',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '搜尋',
            key: 'Ctrl + F',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '列印',
            key: 'Ctrl + P',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '儲存',
            key: 'Ctrl + S',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '另存新檔',
            key: 'Ctrl + Shift + S',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '開啟',
            key: 'Ctrl + O',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '新建',
            key: 'Ctrl + N',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '關閉',
            key: 'Ctrl + W',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '強制退出應用程式',
            key: 'Ctrl + Shift + Esc',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '系統搜尋',
            key: 'Win + S',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '鎖定電腦',
            key: 'Win + L',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '工作管理員',
            key: 'Ctrl + Alt + Delete',
        },

        // 文字編輯
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '粗體',
            key: 'Ctrl + B',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '斜體',
            key: 'Ctrl + I',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '底線',
            key: 'Ctrl + U',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '移動到行首',
            key: 'Home',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '移動到行尾',
            key: 'End',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '移動到文件開頭',
            key: 'Ctrl + Home',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '移動到文件結尾',
            key: 'Ctrl + End',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '選取到行首',
            key: 'Shift + Home',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '選取到行尾',
            key: 'Shift + End',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '按字移動（左）',
            key: 'Ctrl + Left',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '按字移動（右）',
            key: 'Ctrl + Right',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '刪除前一個字',
            key: 'Ctrl + Backspace',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '刪除後一個字',
            key: 'Ctrl + Delete',
        },

        // 檔案管理
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '開啟檔案總管',
            key: 'Win + E',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '新增資料夾',
            key: 'Ctrl + Shift + N',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '重新命名',
            key: 'F2',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '刪除到資源回收筒',
            key: 'Delete',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '永久刪除',
            key: 'Shift + Delete',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '重新整理',
            key: 'F5',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '返回上一層',
            key: 'Alt + Up',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '檔案屬性',
            key: 'Alt + Enter',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '選取多個檔案',
            key: 'Ctrl + Click',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '顯示隱藏檔案',
            key: 'Ctrl + H',
        },

        // 視窗管理
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: '最小化視窗',
            key: 'Win + M',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: '最大化視窗',
            key: 'Win + Up',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: '還原視窗',
            key: 'Win + Down',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: '視窗左半邊',
            key: 'Win + Left',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: '視窗右半邊',
            key: 'Win + Right',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: '切換應用程式',
            key: 'Alt + Tab',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: '切換同應用程式視窗',
            key: 'Alt + `',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: '關閉視窗',
            key: 'Alt + F4',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: '顯示桌面',
            key: 'Win + D',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: '任務檢視',
            key: 'Win + Tab',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: '虛擬桌面切換',
            key: 'Win + Ctrl + Left/Right',
        },

        // 瀏覽器
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '新分頁',
            key: 'Ctrl + T',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '關閉分頁',
            key: 'Ctrl + W',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '重新開啟分頁',
            key: 'Ctrl + Shift + T',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '切換分頁（右）',
            key: 'Ctrl + Tab',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '切換分頁（左）',
            key: 'Ctrl + Shift + Tab',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '重新載入',
            key: 'Ctrl + R',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '強制重新載入',
            key: 'Ctrl + F5',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '回上一頁',
            key: 'Alt + Left',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '前往下一頁',
            key: 'Alt + Right',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '網址列',
            key: 'Ctrl + L',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '書籤欄',
            key: 'Ctrl + Shift + B',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '無痕模式',
            key: 'Ctrl + Shift + N',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '開發者工具',
            key: 'F12',
        },

        // 截圖
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '截圖',
            description: '全螢幕截圖',
            key: 'Win + PrtScn',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '截圖',
            description: '區域截圖',
            key: 'Win + Shift + S',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '截圖',
            description: '視窗截圖',
            key: 'Alt + PrtScn',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '截圖',
            description: '截圖工具',
            key: 'Win + Shift + S',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '截圖',
            description: '複製到剪貼簿',
            key: 'PrtScn',
        },
    ],
    mac: [
        // 系統操作
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '複製',
            key: 'Cmd + C',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '貼上',
            key: 'Cmd + V',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '剪下',
            key: 'Cmd + X',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '復原',
            key: 'Cmd + Z',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '重做',
            key: 'Cmd + Shift + Z',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '全選',
            key: 'Cmd + A',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '搜尋',
            key: 'Cmd + F',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '列印',
            key: 'Cmd + P',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '儲存',
            key: 'Cmd + S',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '另存新檔',
            key: 'Cmd + Shift + S',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '開啟',
            key: 'Cmd + O',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '新建',
            key: 'Cmd + N',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '關閉',
            key: 'Cmd + W',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '強制退出應用程式',
            key: 'Cmd + Option + Esc',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: 'Spotlight 搜尋',
            key: 'Cmd + Space',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '鎖定螢幕',
            key: 'Cmd + Ctrl + Q',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '系統操作',
            description: '活動監視器',
            key: 'Cmd + Space → Activity Monitor',
        },

        // 文字編輯
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '粗體',
            key: 'Cmd + B',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '斜體',
            key: 'Cmd + I',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '底線',
            key: 'Cmd + U',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '移動到行首',
            key: 'Cmd + Left',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '移動到行尾',
            key: 'Cmd + Right',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '移動到文件開頭',
            key: 'Cmd + Up',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '移動到文件結尾',
            key: 'Cmd + Down',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '選取到行首',
            key: 'Cmd + Shift + Left',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '選取到行尾',
            key: 'Cmd + Shift + Right',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '按字移動（左）',
            key: 'Option + Left',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '按字移動（右）',
            key: 'Option + Right',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '刪除前一個字',
            key: 'Option + Delete',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '文字編輯',
            description: '刪除後一個字',
            key: 'Option + Fn + Delete',
        },

        // 檔案管理
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '開啟 Finder',
            key: 'Cmd + Space → Finder',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '新增資料夾',
            key: 'Cmd + Shift + N',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '重新命名',
            key: 'Enter',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '移到垃圾桶',
            key: 'Cmd + Delete',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '清空垃圾桶',
            key: 'Cmd + Shift + Delete',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '重新整理',
            key: 'Cmd + R',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '返回上一層',
            key: 'Cmd + Up',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '檔案資訊',
            key: 'Cmd + I',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '選取多個檔案',
            key: 'Cmd + Click',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '顯示隱藏檔案',
            key: 'Cmd + Shift + .',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '檔案管理',
            description: '快速預覽',
            key: 'Space',
        },

        // 視窗管理
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: '最小化視窗',
            key: 'Cmd + M',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: '全螢幕模式',
            key: 'Ctrl + Cmd + F',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: '切換應用程式',
            key: 'Cmd + Tab',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: '切換同應用程式視窗',
            key: 'Cmd + `',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: '退出應用程式',
            key: 'Cmd + Q',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: 'Mission Control',
            key: 'F3',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: '顯示桌面',
            key: 'F11',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '視窗管理',
            description: 'Launchpad',
            key: 'F4',
        },

        // 瀏覽器
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '新分頁',
            key: 'Cmd + T',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '關閉分頁',
            key: 'Cmd + W',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '重新開啟分頁',
            key: 'Cmd + Shift + T',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '切換分頁（右）',
            key: 'Cmd + Option + Right',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '切換分頁（左）',
            key: 'Cmd + Option + Left',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '重新載入',
            key: 'Cmd + R',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '強制重新載入',
            key: 'Cmd + Shift + R',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '回上一頁',
            key: 'Cmd + Left',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '前往下一頁',
            key: 'Cmd + Right',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '網址列',
            key: 'Cmd + L',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '書籤欄',
            key: 'Cmd + Shift + B',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '無痕模式',
            key: 'Cmd + Shift + N',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '瀏覽器',
            description: '開發者工具',
            key: 'Cmd + Option + I',
        },

        // 截圖
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '截圖',
            description: '全螢幕截圖',
            key: 'Cmd + Shift + 3',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '截圖',
            description: '區域截圖',
            key: 'Cmd + Shift + 4',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '截圖',
            description: '視窗截圖',
            key: 'Cmd + Shift + 4 → Space',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '截圖',
            description: '截圖工具選單',
            key: 'Cmd + Shift + 5',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '截圖',
            description: '全螢幕截圖到剪貼簿',
            key: 'Cmd + Ctrl + Shift + 3',
        },
        {
            mainCategory: MAIN_CATEGORIES.SYSTEM,
            subCategory: '截圖',
            description: '區域截圖到剪貼簿',
            key: 'Cmd + Ctrl + Shift + 4',
        },
    ],
};
