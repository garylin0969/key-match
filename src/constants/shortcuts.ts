export interface WindowsShortcut {
    category: string;
    description: string;
    key: string;
}

export interface MacShortcut {
    category: string;
    description: string;
    key: string;
}

export enum SYSTEM_ENUM {
    WINDOWS = 'Windows',
    MACOS = 'macOS',
}

export const WINDOWS_SHORTCUT_CATEGORIES = ['系統操作', '文字編輯', '檔案管理', '視窗管理', '瀏覽器', '截圖'] as const;
export const MAC_SHORTCUT_CATEGORIES = ['系統操作', '文字編輯', '檔案管理', '視窗管理', '瀏覽器', '截圖'] as const;

export const WINDOWS_SHORTCUTS: WindowsShortcut[] = [
    // 系統操作
    {
        category: '系統操作',
        description: '複製',
        key: 'Ctrl + C',
    },
    {
        category: '系統操作',
        description: '貼上',
        key: 'Ctrl + V',
    },
    {
        category: '系統操作',
        description: '剪下',
        key: 'Ctrl + X',
    },
    {
        category: '系統操作',
        description: '復原',
        key: 'Ctrl + Z',
    },
    {
        category: '系統操作',
        description: '重做',
        key: 'Ctrl + Y',
    },
    {
        category: '系統操作',
        description: '全選',
        key: 'Ctrl + A',
    },
    {
        category: '系統操作',
        description: '搜尋',
        key: 'Ctrl + F',
    },
    {
        category: '系統操作',
        description: '列印',
        key: 'Ctrl + P',
    },
    {
        category: '系統操作',
        description: '儲存',
        key: 'Ctrl + S',
    },
    {
        category: '系統操作',
        description: '另存新檔',
        key: 'Ctrl + Shift + S',
    },
    {
        category: '系統操作',
        description: '開啟',
        key: 'Ctrl + O',
    },
    {
        category: '系統操作',
        description: '新建',
        key: 'Ctrl + N',
    },
    {
        category: '系統操作',
        description: '關閉',
        key: 'Ctrl + W',
    },
    {
        category: '系統操作',
        description: '強制退出應用程式',
        key: 'Ctrl + Shift + Esc',
    },
    {
        category: '系統操作',
        description: '系統搜尋',
        key: 'Win + S',
    },
    {
        category: '系統操作',
        description: '鎖定電腦',
        key: 'Win + L',
    },
    {
        category: '系統操作',
        description: '工作管理員',
        key: 'Ctrl + Alt + Delete',
    },

    // 文字編輯
    {
        category: '文字編輯',
        description: '粗體',
        key: 'Ctrl + B',
    },
    {
        category: '文字編輯',
        description: '斜體',
        key: 'Ctrl + I',
    },
    {
        category: '文字編輯',
        description: '底線',
        key: 'Ctrl + U',
    },
    {
        category: '文字編輯',
        description: '移動到行首',
        key: 'Home',
    },
    {
        category: '文字編輯',
        description: '移動到行尾',
        key: 'End',
    },
    {
        category: '文字編輯',
        description: '移動到文件開頭',
        key: 'Ctrl + Home',
    },
    {
        category: '文字編輯',
        description: '移動到文件結尾',
        key: 'Ctrl + End',
    },
    {
        category: '文字編輯',
        description: '選取到行首',
        key: 'Shift + Home',
    },
    {
        category: '文字編輯',
        description: '選取到行尾',
        key: 'Shift + End',
    },
    {
        category: '文字編輯',
        description: '按字移動（左）',
        key: 'Ctrl + Left',
    },
    {
        category: '文字編輯',
        description: '按字移動（右）',
        key: 'Ctrl + Right',
    },
    {
        category: '文字編輯',
        description: '刪除前一個字',
        key: 'Ctrl + Backspace',
    },
    {
        category: '文字編輯',
        description: '刪除後一個字',
        key: 'Ctrl + Delete',
    },

    // 檔案管理
    {
        category: '檔案管理',
        description: '開啟檔案總管',
        key: 'Win + E',
    },
    {
        category: '檔案管理',
        description: '新增資料夾',
        key: 'Ctrl + Shift + N',
    },
    {
        category: '檔案管理',
        description: '重新命名',
        key: 'F2',
    },
    {
        category: '檔案管理',
        description: '刪除到資源回收筒',
        key: 'Delete',
    },
    {
        category: '檔案管理',
        description: '永久刪除',
        key: 'Shift + Delete',
    },
    {
        category: '檔案管理',
        description: '重新整理',
        key: 'F5',
    },
    {
        category: '檔案管理',
        description: '返回上一層',
        key: 'Alt + Up',
    },
    {
        category: '檔案管理',
        description: '檔案屬性',
        key: 'Alt + Enter',
    },
    {
        category: '檔案管理',
        description: '選取多個檔案',
        key: 'Ctrl + Click',
    },
    {
        category: '檔案管理',
        description: '顯示隱藏檔案',
        key: 'Ctrl + H',
    },

    // 視窗管理
    {
        category: '視窗管理',
        description: '最小化視窗',
        key: 'Win + M',
    },
    {
        category: '視窗管理',
        description: '最大化視窗',
        key: 'Win + Up',
    },
    {
        category: '視窗管理',
        description: '還原視窗',
        key: 'Win + Down',
    },
    {
        category: '視窗管理',
        description: '視窗左半邊',
        key: 'Win + Left',
    },
    {
        category: '視窗管理',
        description: '視窗右半邊',
        key: 'Win + Right',
    },
    {
        category: '視窗管理',
        description: '切換應用程式',
        key: 'Alt + Tab',
    },
    {
        category: '視窗管理',
        description: '切換同應用程式視窗',
        key: 'Alt + `',
    },
    {
        category: '視窗管理',
        description: '關閉視窗',
        key: 'Alt + F4',
    },
    {
        category: '視窗管理',
        description: '顯示桌面',
        key: 'Win + D',
    },
    {
        category: '視窗管理',
        description: '任務檢視',
        key: 'Win + Tab',
    },
    {
        category: '視窗管理',
        description: '虛擬桌面切換',
        key: 'Win + Ctrl + Left/Right',
    },

    // 瀏覽器
    {
        category: '瀏覽器',
        description: '新分頁',
        key: 'Ctrl + T',
    },
    {
        category: '瀏覽器',
        description: '關閉分頁',
        key: 'Ctrl + W',
    },
    {
        category: '瀏覽器',
        description: '重新開啟分頁',
        key: 'Ctrl + Shift + T',
    },
    {
        category: '瀏覽器',
        description: '切換分頁（右）',
        key: 'Ctrl + Tab',
    },
    {
        category: '瀏覽器',
        description: '切換分頁（左）',
        key: 'Ctrl + Shift + Tab',
    },
    {
        category: '瀏覽器',
        description: '重新載入',
        key: 'Ctrl + R',
    },
    {
        category: '瀏覽器',
        description: '強制重新載入',
        key: 'Ctrl + F5',
    },
    {
        category: '瀏覽器',
        description: '回上一頁',
        key: 'Alt + Left',
    },
    {
        category: '瀏覽器',
        description: '前往下一頁',
        key: 'Alt + Right',
    },
    {
        category: '瀏覽器',
        description: '網址列',
        key: 'Ctrl + L',
    },
    {
        category: '瀏覽器',
        description: '書籤欄',
        key: 'Ctrl + Shift + B',
    },
    {
        category: '瀏覽器',
        description: '無痕模式',
        key: 'Ctrl + Shift + N',
    },
    {
        category: '瀏覽器',
        description: '開發者工具',
        key: 'F12',
    },

    // 截圖
    {
        category: '截圖',
        description: '全螢幕截圖',
        key: 'Win + PrtScn',
    },
    {
        category: '截圖',
        description: '區域截圖',
        key: 'Win + Shift + S',
    },
    {
        category: '截圖',
        description: '視窗截圖',
        key: 'Alt + PrtScn',
    },
    {
        category: '截圖',
        description: '截圖工具',
        key: 'Win + Shift + S',
    },
    {
        category: '截圖',
        description: '複製到剪貼簿',
        key: 'PrtScn',
    },
];

export const MAC_SHORTCUTS: MacShortcut[] = [
    // 系統操作
    {
        category: '系統操作',
        description: '複製',
        key: 'Cmd + C',
    },
    {
        category: '系統操作',
        description: '貼上',
        key: 'Cmd + V',
    },
    {
        category: '系統操作',
        description: '剪下',
        key: 'Cmd + X',
    },
    {
        category: '系統操作',
        description: '復原',
        key: 'Cmd + Z',
    },
    {
        category: '系統操作',
        description: '重做',
        key: 'Cmd + Shift + Z',
    },
    {
        category: '系統操作',
        description: '全選',
        key: 'Cmd + A',
    },
    {
        category: '系統操作',
        description: '搜尋',
        key: 'Cmd + F',
    },
    {
        category: '系統操作',
        description: '列印',
        key: 'Cmd + P',
    },
    {
        category: '系統操作',
        description: '儲存',
        key: 'Cmd + S',
    },
    {
        category: '系統操作',
        description: '另存新檔',
        key: 'Cmd + Shift + S',
    },
    {
        category: '系統操作',
        description: '開啟',
        key: 'Cmd + O',
    },
    {
        category: '系統操作',
        description: '新建',
        key: 'Cmd + N',
    },
    {
        category: '系統操作',
        description: '關閉',
        key: 'Cmd + W',
    },
    {
        category: '系統操作',
        description: '強制退出應用程式',
        key: 'Cmd + Option + Esc',
    },
    {
        category: '系統操作',
        description: 'Spotlight 搜尋',
        key: 'Cmd + Space',
    },
    {
        category: '系統操作',
        description: '鎖定螢幕',
        key: 'Cmd + Ctrl + Q',
    },
    {
        category: '系統操作',
        description: '活動監視器',
        key: 'Cmd + Space → Activity Monitor',
    },

    // 文字編輯
    {
        category: '文字編輯',
        description: '粗體',
        key: 'Cmd + B',
    },
    {
        category: '文字編輯',
        description: '斜體',
        key: 'Cmd + I',
    },
    {
        category: '文字編輯',
        description: '底線',
        key: 'Cmd + U',
    },
    {
        category: '文字編輯',
        description: '移動到行首',
        key: 'Cmd + Left',
    },
    {
        category: '文字編輯',
        description: '移動到行尾',
        key: 'Cmd + Right',
    },
    {
        category: '文字編輯',
        description: '移動到文件開頭',
        key: 'Cmd + Up',
    },
    {
        category: '文字編輯',
        description: '移動到文件結尾',
        key: 'Cmd + Down',
    },
    {
        category: '文字編輯',
        description: '選取到行首',
        key: 'Cmd + Shift + Left',
    },
    {
        category: '文字編輯',
        description: '選取到行尾',
        key: 'Cmd + Shift + Right',
    },
    {
        category: '文字編輯',
        description: '按字移動（左）',
        key: 'Option + Left',
    },
    {
        category: '文字編輯',
        description: '按字移動（右）',
        key: 'Option + Right',
    },
    {
        category: '文字編輯',
        description: '刪除前一個字',
        key: 'Option + Delete',
    },
    {
        category: '文字編輯',
        description: '刪除後一個字',
        key: 'Option + Fn + Delete',
    },

    // 檔案管理
    {
        category: '檔案管理',
        description: '開啟 Finder',
        key: 'Cmd + Space → Finder',
    },
    {
        category: '檔案管理',
        description: '新增資料夾',
        key: 'Cmd + Shift + N',
    },
    {
        category: '檔案管理',
        description: '重新命名',
        key: 'Enter',
    },
    {
        category: '檔案管理',
        description: '移到垃圾桶',
        key: 'Cmd + Delete',
    },
    {
        category: '檔案管理',
        description: '清空垃圾桶',
        key: 'Cmd + Shift + Delete',
    },
    {
        category: '檔案管理',
        description: '重新整理',
        key: 'Cmd + R',
    },
    {
        category: '檔案管理',
        description: '返回上一層',
        key: 'Cmd + Up',
    },
    {
        category: '檔案管理',
        description: '檔案資訊',
        key: 'Cmd + I',
    },
    {
        category: '檔案管理',
        description: '選取多個檔案',
        key: 'Cmd + Click',
    },
    {
        category: '檔案管理',
        description: '顯示隱藏檔案',
        key: 'Cmd + Shift + .',
    },
    {
        category: '檔案管理',
        description: '快速預覽',
        key: 'Space',
    },

    // 視窗管理
    {
        category: '視窗管理',
        description: '最小化視窗',
        key: 'Cmd + M',
    },
    {
        category: '視窗管理',
        description: '全螢幕模式',
        key: 'Ctrl + Cmd + F',
    },
    {
        category: '視窗管理',
        description: '切換應用程式',
        key: 'Cmd + Tab',
    },
    {
        category: '視窗管理',
        description: '切換同應用程式視窗',
        key: 'Cmd + `',
    },
    {
        category: '視窗管理',
        description: '退出應用程式',
        key: 'Cmd + Q',
    },
    {
        category: '視窗管理',
        description: 'Mission Control',
        key: 'F3',
    },
    {
        category: '視窗管理',
        description: '顯示桌面',
        key: 'F11',
    },
    {
        category: '視窗管理',
        description: 'Launchpad',
        key: 'F4',
    },

    // 瀏覽器
    {
        category: '瀏覽器',
        description: '新分頁',
        key: 'Cmd + T',
    },
    {
        category: '瀏覽器',
        description: '關閉分頁',
        key: 'Cmd + W',
    },
    {
        category: '瀏覽器',
        description: '重新開啟分頁',
        key: 'Cmd + Shift + T',
    },
    {
        category: '瀏覽器',
        description: '切換分頁（右）',
        key: 'Cmd + Option + Right',
    },
    {
        category: '瀏覽器',
        description: '切換分頁（左）',
        key: 'Cmd + Option + Left',
    },
    {
        category: '瀏覽器',
        description: '重新載入',
        key: 'Cmd + R',
    },
    {
        category: '瀏覽器',
        description: '強制重新載入',
        key: 'Cmd + Shift + R',
    },
    {
        category: '瀏覽器',
        description: '回上一頁',
        key: 'Cmd + Left',
    },
    {
        category: '瀏覽器',
        description: '前往下一頁',
        key: 'Cmd + Right',
    },
    {
        category: '瀏覽器',
        description: '網址列',
        key: 'Cmd + L',
    },
    {
        category: '瀏覽器',
        description: '書籤欄',
        key: 'Cmd + Shift + B',
    },
    {
        category: '瀏覽器',
        description: '無痕模式',
        key: 'Cmd + Shift + N',
    },
    {
        category: '瀏覽器',
        description: '開發者工具',
        key: 'Cmd + Option + I',
    },

    // 截圖
    {
        category: '截圖',
        description: '全螢幕截圖',
        key: 'Cmd + Shift + 3',
    },
    {
        category: '截圖',
        description: '區域截圖',
        key: 'Cmd + Shift + 4',
    },
    {
        category: '截圖',
        description: '視窗截圖',
        key: 'Cmd + Shift + 4 → Space',
    },
    {
        category: '截圖',
        description: '截圖工具選單',
        key: 'Cmd + Shift + 5',
    },
    {
        category: '截圖',
        description: '全螢幕截圖到剪貼簿',
        key: 'Cmd + Ctrl + Shift + 3',
    },
    {
        category: '截圖',
        description: '區域截圖到剪貼簿',
        key: 'Cmd + Ctrl + Shift + 4',
    },
];
