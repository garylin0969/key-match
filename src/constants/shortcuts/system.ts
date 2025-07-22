// ============ 基本型別定義 ============
interface ShortcutItem {
    mainCategory: string;
    subCategory: string;
    description: string;
    key: string;
}

enum SYSTEM_ENUM {
    WINDOWS = 'Windows',
    MACOS = 'macOS',
}

// ============ 系統分類配置 ============
const SYSTEM_CATEGORY = {
    id: 'SYSTEM',
    name: '系統操作',
    subCategories: {
        TEXT_EDITING: '文字編輯',
        COPY_PASTE: '複製貼上',
        FILE_MANAGEMENT: '檔案管理',
        WINDOWS_SYSTEM: '系統管理 (Windows)',
        MACOS_SYSTEM: '系統管理 (macOS)',
        WINDOWS_DESKTOP: '桌面管理 (Windows)',
        MACOS_SPOTLIGHT: 'Spotlight 搜尋 (macOS)',
    },
};

// ============ 系統操作快捷鍵 ============
export const SYSTEM_SHORTCUTS = {
    [SYSTEM_ENUM.WINDOWS]: [
        // === 文字編輯 ===
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.TEXT_EDITING,
            description: '全選文字',
            key: 'Ctrl + A',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.TEXT_EDITING,
            description: '復原',
            key: 'Ctrl + Z',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.TEXT_EDITING,
            description: '重做',
            key: 'Ctrl + Y',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.TEXT_EDITING,
            description: '搜尋文字',
            key: 'Ctrl + F',
        },

        // === 複製貼上 ===
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.COPY_PASTE,
            description: '複製',
            key: 'Ctrl + C',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.COPY_PASTE,
            description: '貼上',
            key: 'Ctrl + V',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.COPY_PASTE,
            description: '剪下',
            key: 'Ctrl + X',
        },

        // === 檔案管理 ===
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.FILE_MANAGEMENT,
            description: '開啟檔案總管',
            key: 'Win + E',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.FILE_MANAGEMENT,
            description: '新增資料夾',
            key: 'Ctrl + Shift + N',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.FILE_MANAGEMENT,
            description: '重新命名',
            key: 'F2',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.FILE_MANAGEMENT,
            description: '刪除到資源回收筒',
            key: 'Delete',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.FILE_MANAGEMENT,
            description: '永久刪除',
            key: 'Shift + Delete',
        },

        // === Windows 系統管理 ===
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.WINDOWS_SYSTEM,
            description: '開啟工作管理員',
            key: 'Ctrl + Shift + Esc',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.WINDOWS_SYSTEM,
            description: '鎖定電腦',
            key: 'Win + L',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.WINDOWS_SYSTEM,
            description: '系統搜尋',
            key: 'Win + S',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.WINDOWS_SYSTEM,
            description: '執行對話框',
            key: 'Win + R',
        },

        // === Windows 桌面管理 ===
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.WINDOWS_DESKTOP,
            description: '顯示桌面',
            key: 'Win + D',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.WINDOWS_DESKTOP,
            description: '最小化所有視窗',
            key: 'Win + M',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.WINDOWS_DESKTOP,
            description: '切換應用程式',
            key: 'Alt + Tab',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.WINDOWS_DESKTOP,
            description: '視窗左半邊',
            key: 'Win + Left',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.WINDOWS_DESKTOP,
            description: '視窗右半邊',
            key: 'Win + Right',
        },
    ] as ShortcutItem[],

    [SYSTEM_ENUM.MACOS]: [
        // === 文字編輯 ===
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.TEXT_EDITING,
            description: '全選文字',
            key: 'Cmd + A',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.TEXT_EDITING,
            description: '復原',
            key: 'Cmd + Z',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.TEXT_EDITING,
            description: '重做',
            key: 'Cmd + Shift + Z',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.TEXT_EDITING,
            description: '搜尋文字',
            key: 'Cmd + F',
        },

        // === 複製貼上 ===
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.COPY_PASTE,
            description: '複製',
            key: 'Cmd + C',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.COPY_PASTE,
            description: '貼上',
            key: 'Cmd + V',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.COPY_PASTE,
            description: '剪下',
            key: 'Cmd + X',
        },

        // === 檔案管理 ===
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.FILE_MANAGEMENT,
            description: '開啟 Finder',
            key: 'Cmd + Space → Finder',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.FILE_MANAGEMENT,
            description: '新增資料夾',
            key: 'Cmd + Shift + N',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.FILE_MANAGEMENT,
            description: '重新命名',
            key: 'Enter',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.FILE_MANAGEMENT,
            description: '移到垃圾桶',
            key: 'Cmd + Delete',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.FILE_MANAGEMENT,
            description: '清空垃圾桶',
            key: 'Cmd + Shift + Delete',
        },

        // === macOS 系統管理 ===
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.MACOS_SYSTEM,
            description: '開啟活動監視器',
            key: 'Cmd + Space → Activity Monitor',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.MACOS_SYSTEM,
            description: '鎖定螢幕',
            key: 'Cmd + Ctrl + Q',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.MACOS_SYSTEM,
            description: '強制退出應用程式',
            key: 'Cmd + Option + Esc',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.MACOS_SYSTEM,
            description: '切換應用程式',
            key: 'Cmd + Tab',
        },

        // === Spotlight 搜尋 ===
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.MACOS_SPOTLIGHT,
            description: 'Spotlight 搜尋',
            key: 'Cmd + Space',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.MACOS_SPOTLIGHT,
            description: '檔案快速搜尋',
            key: 'Cmd + Option + Space',
        },
        {
            mainCategory: SYSTEM_CATEGORY.id,
            subCategory: SYSTEM_CATEGORY.subCategories.MACOS_SPOTLIGHT,
            description: '搜尋並開啟應用程式',
            key: 'Cmd + Space → 輸入應用程式名稱',
        },
    ] as ShortcutItem[],
};
