export interface Shortcut {
    category: string;
    description: string;
    windows: string;
    mac: string;
}

export const SHORTCUT_CATEGORIES = ['系統操作', '文字編輯', '檔案管理', '視窗管理', '瀏覽器', '截圖'] as const;

export const SHORTCUTS: Shortcut[] = [
    // 系統操作
    {
        category: '系統操作',
        description: '複製',
        windows: 'Ctrl + C',
        mac: 'Cmd + C',
    },
    {
        category: '系統操作',
        description: '貼上',
        windows: 'Ctrl + V',
        mac: 'Cmd + V',
    },
    {
        category: '系統操作',
        description: '剪下',
        windows: 'Ctrl + X',
        mac: 'Cmd + X',
    },
    {
        category: '系統操作',
        description: '復原',
        windows: 'Ctrl + Z',
        mac: 'Cmd + Z',
    },
    {
        category: '系統操作',
        description: '重做',
        windows: 'Ctrl + Y',
        mac: 'Cmd + Shift + Z',
    },
    {
        category: '系統操作',
        description: '全選',
        windows: 'Ctrl + A',
        mac: 'Cmd + A',
    },
    {
        category: '系統操作',
        description: '搜尋',
        windows: 'Ctrl + F',
        mac: 'Cmd + F',
    },
    {
        category: '系統操作',
        description: '列印',
        windows: 'Ctrl + P',
        mac: 'Cmd + P',
    },
    {
        category: '系統操作',
        description: '儲存',
        windows: 'Ctrl + S',
        mac: 'Cmd + S',
    },
    {
        category: '系統操作',
        description: '另存新檔',
        windows: 'Ctrl + Shift + S',
        mac: 'Cmd + Shift + S',
    },
    {
        category: '系統操作',
        description: '開啟',
        windows: 'Ctrl + O',
        mac: 'Cmd + O',
    },
    {
        category: '系統操作',
        description: '新建',
        windows: 'Ctrl + N',
        mac: 'Cmd + N',
    },
    {
        category: '系統操作',
        description: '關閉',
        windows: 'Ctrl + W',
        mac: 'Cmd + W',
    },
    {
        category: '系統操作',
        description: '強制退出應用程式',
        windows: 'Ctrl + Shift + Esc',
        mac: 'Cmd + Option + Esc',
    },
    {
        category: '系統操作',
        description: '系統搜尋',
        windows: 'Win + S',
        mac: 'Cmd + Space',
    },
    {
        category: '系統操作',
        description: '鎖定電腦',
        windows: 'Win + L',
        mac: 'Cmd + Ctrl + Q',
    },

    // 文字編輯
    {
        category: '文字編輯',
        description: '粗體',
        windows: 'Ctrl + B',
        mac: 'Cmd + B',
    },
    {
        category: '文字編輯',
        description: '斜體',
        windows: 'Ctrl + I',
        mac: 'Cmd + I',
    },
    {
        category: '文字編輯',
        description: '底線',
        windows: 'Ctrl + U',
        mac: 'Cmd + U',
    },
    {
        category: '文字編輯',
        description: '移動到行首',
        windows: 'Home',
        mac: 'Cmd + Left',
    },
    {
        category: '文字編輯',
        description: '移動到行尾',
        windows: 'End',
        mac: 'Cmd + Right',
    },
    {
        category: '文字編輯',
        description: '移動到文件開頭',
        windows: 'Ctrl + Home',
        mac: 'Cmd + Up',
    },
    {
        category: '文字編輯',
        description: '移動到文件結尾',
        windows: 'Ctrl + End',
        mac: 'Cmd + Down',
    },
    {
        category: '文字編輯',
        description: '選取到行首',
        windows: 'Shift + Home',
        mac: 'Cmd + Shift + Left',
    },
    {
        category: '文字編輯',
        description: '選取到行尾',
        windows: 'Shift + End',
        mac: 'Cmd + Shift + Right',
    },
    {
        category: '文字編輯',
        description: '按字移動（左）',
        windows: 'Ctrl + Left',
        mac: 'Option + Left',
    },
    {
        category: '文字編輯',
        description: '按字移動（右）',
        windows: 'Ctrl + Right',
        mac: 'Option + Right',
    },
    {
        category: '文字編輯',
        description: '刪除前一個字',
        windows: 'Ctrl + Backspace',
        mac: 'Option + Delete',
    },
    {
        category: '文字編輯',
        description: '刪除後一個字',
        windows: 'Ctrl + Delete',
        mac: 'Option + Fn + Delete',
    },

    // 檔案管理
    {
        category: '檔案管理',
        description: '開啟檔案總管',
        windows: 'Win + E',
        mac: 'Cmd + Space → Finder',
    },
    {
        category: '檔案管理',
        description: '新增資料夾',
        windows: 'Ctrl + Shift + N',
        mac: 'Cmd + Shift + N',
    },
    {
        category: '檔案管理',
        description: '重新命名',
        windows: 'F2',
        mac: 'Enter',
    },
    {
        category: '檔案管理',
        description: '刪除到資源回收筒',
        windows: 'Delete',
        mac: 'Cmd + Delete',
    },
    {
        category: '檔案管理',
        description: '永久刪除',
        windows: 'Shift + Delete',
        mac: 'Cmd + Option + Delete',
    },
    {
        category: '檔案管理',
        description: '重新整理',
        windows: 'F5',
        mac: 'Cmd + R',
    },
    {
        category: '檔案管理',
        description: '返回上一層',
        windows: 'Alt + Up',
        mac: 'Cmd + Up',
    },
    {
        category: '檔案管理',
        description: '檔案屬性',
        windows: 'Alt + Enter',
        mac: 'Cmd + I',
    },
    {
        category: '檔案管理',
        description: '選取多個檔案',
        windows: 'Ctrl + Click',
        mac: 'Cmd + Click',
    },
    {
        category: '檔案管理',
        description: '顯示隱藏檔案',
        windows: 'Ctrl + H',
        mac: 'Cmd + Shift + .',
    },

    // 視窗管理
    {
        category: '視窗管理',
        description: '最小化視窗',
        windows: 'Win + M',
        mac: 'Cmd + M',
    },
    {
        category: '視窗管理',
        description: '最大化視窗',
        windows: 'Win + Up',
        mac: 'Ctrl + Cmd + F',
    },
    {
        category: '視窗管理',
        description: '還原視窗',
        windows: 'Win + Down',
        mac: 'Ctrl + Cmd + F',
    },
    {
        category: '視窗管理',
        description: '視窗左半邊',
        windows: 'Win + Left',
        mac: '需第三方軟體',
    },
    {
        category: '視窗管理',
        description: '視窗右半邊',
        windows: 'Win + Right',
        mac: '需第三方軟體',
    },
    {
        category: '視窗管理',
        description: '切換應用程式',
        windows: 'Alt + Tab',
        mac: 'Cmd + Tab',
    },
    {
        category: '視窗管理',
        description: '切換同應用程式視窗',
        windows: 'Alt + `',
        mac: 'Cmd + `',
    },
    {
        category: '視窗管理',
        description: '關閉視窗',
        windows: 'Alt + F4',
        mac: 'Cmd + Q',
    },
    {
        category: '視窗管理',
        description: '顯示桌面',
        windows: 'Win + D',
        mac: 'F11',
    },
    {
        category: '視窗管理',
        description: '任務檢視',
        windows: 'Win + Tab',
        mac: 'F3 (Mission Control)',
    },

    // 瀏覽器
    {
        category: '瀏覽器',
        description: '新分頁',
        windows: 'Ctrl + T',
        mac: 'Cmd + T',
    },
    {
        category: '瀏覽器',
        description: '關閉分頁',
        windows: 'Ctrl + W',
        mac: 'Cmd + W',
    },
    {
        category: '瀏覽器',
        description: '重新開啟分頁',
        windows: 'Ctrl + Shift + T',
        mac: 'Cmd + Shift + T',
    },
    {
        category: '瀏覽器',
        description: '切換分頁（右）',
        windows: 'Ctrl + Tab',
        mac: 'Cmd + Option + Right',
    },
    {
        category: '瀏覽器',
        description: '切換分頁（左）',
        windows: 'Ctrl + Shift + Tab',
        mac: 'Cmd + Option + Left',
    },
    {
        category: '瀏覽器',
        description: '重新載入',
        windows: 'Ctrl + R',
        mac: 'Cmd + R',
    },
    {
        category: '瀏覽器',
        description: '強制重新載入',
        windows: 'Ctrl + F5',
        mac: 'Cmd + Shift + R',
    },
    {
        category: '瀏覽器',
        description: '回上一頁',
        windows: 'Alt + Left',
        mac: 'Cmd + Left',
    },
    {
        category: '瀏覽器',
        description: '前往下一頁',
        windows: 'Alt + Right',
        mac: 'Cmd + Right',
    },
    {
        category: '瀏覽器',
        description: '網址列',
        windows: 'Ctrl + L',
        mac: 'Cmd + L',
    },
    {
        category: '瀏覽器',
        description: '書籤欄',
        windows: 'Ctrl + Shift + B',
        mac: 'Cmd + Shift + B',
    },
    {
        category: '瀏覽器',
        description: '無痕模式',
        windows: 'Ctrl + Shift + N',
        mac: 'Cmd + Shift + N',
    },

    // 截圖
    {
        category: '截圖',
        description: '全螢幕截圖',
        windows: 'Win + PrtScn',
        mac: 'Cmd + Shift + 3',
    },
    {
        category: '截圖',
        description: '區域截圖',
        windows: 'Win + Shift + S',
        mac: 'Cmd + Shift + 4',
    },
    {
        category: '截圖',
        description: '視窗截圖',
        windows: 'Alt + PrtScn',
        mac: 'Cmd + Shift + 4 → Space',
    },
    {
        category: '截圖',
        description: '延遲截圖',
        windows: '使用剪取工具',
        mac: 'Cmd + Shift + 5',
    },
    {
        category: '截圖',
        description: '截圖並編輯',
        windows: 'Win + Shift + S',
        mac: 'Cmd + Shift + 5',
    },
    {
        category: '截圖',
        description: '複製到剪貼簿',
        windows: 'PrtScn',
        mac: 'Cmd + Ctrl + Shift + 3',
    },
];

export const WINDOWS_SHORTCUTS = SHORTCUTS.map((shortcut) => ({
    category: shortcut.category,
    description: shortcut.description,
    key: shortcut.windows,
}));

export const MAC_SHORTCUTS = SHORTCUTS.map((shortcut) => ({
    category: shortcut.category,
    description: shortcut.description,
    key: shortcut.mac,
}));
