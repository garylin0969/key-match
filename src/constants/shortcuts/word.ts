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

// ============ Word 分類配置 ============
const WORD_CATEGORY = {
    id: 'WORD',
    name: 'Microsoft Word',
    subCategories: {
        COMMON_SHORTCUTS: '常用操作',
        FORMATTING: '格式設定',
        NAVIGATION: '文件導覽',
        WINDOWS_SPECIFIC: 'Windows 專用功能',
        MACOS_SPECIFIC: 'macOS 專用功能',
    },
};

// ============ Microsoft Word 快捷鍵 ============
export const WORD_SHORTCUTS = {
    [SYSTEM_ENUM.WINDOWS]: [
        // === 常用操作 ===
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.COMMON_SHORTCUTS,
            description: '新建文件',
            key: 'Ctrl + N',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.COMMON_SHORTCUTS,
            description: '開啟文件',
            key: 'Ctrl + O',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.COMMON_SHORTCUTS,
            description: '儲存文件',
            key: 'Ctrl + S',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.COMMON_SHORTCUTS,
            description: '另存新檔',
            key: 'Ctrl + Shift + S',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.COMMON_SHORTCUTS,
            description: '列印文件',
            key: 'Ctrl + P',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.COMMON_SHORTCUTS,
            description: '關閉文件',
            key: 'Ctrl + W',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.COMMON_SHORTCUTS,
            description: '復原',
            key: 'Ctrl + Z',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.COMMON_SHORTCUTS,
            description: '重做',
            key: 'Ctrl + Y',
        },

        // === 格式設定 ===
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.FORMATTING,
            description: '粗體',
            key: 'Ctrl + B',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.FORMATTING,
            description: '斜體',
            key: 'Ctrl + I',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.FORMATTING,
            description: '底線',
            key: 'Ctrl + U',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.FORMATTING,
            description: '置中對齊',
            key: 'Ctrl + E',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.FORMATTING,
            description: '左對齊',
            key: 'Ctrl + L',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.FORMATTING,
            description: '右對齊',
            key: 'Ctrl + R',
        },

        // === 文件導覽 ===
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.NAVIGATION,
            description: '移動到文件開頭',
            key: 'Ctrl + Home',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.NAVIGATION,
            description: '移動到文件結尾',
            key: 'Ctrl + End',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.NAVIGATION,
            description: '尋找文字',
            key: 'Ctrl + F',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.NAVIGATION,
            description: '尋找並取代',
            key: 'Ctrl + H',
        },

        // === Windows 專用功能 ===
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.WINDOWS_SPECIFIC,
            description: '開啟選項對話框',
            key: 'Alt + F, T',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.WINDOWS_SPECIFIC,
            description: '插入頁碼',
            key: 'Alt + S, N, U',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.WINDOWS_SPECIFIC,
            description: '全螢幕閱讀模式',
            key: 'Alt + W, F',
        },
    ] as ShortcutItem[],

    [SYSTEM_ENUM.MACOS]: [
        // === 常用操作 ===
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.COMMON_SHORTCUTS,
            description: '新建文件',
            key: 'Cmd + N',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.COMMON_SHORTCUTS,
            description: '開啟文件',
            key: 'Cmd + O',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.COMMON_SHORTCUTS,
            description: '儲存文件',
            key: 'Cmd + S',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.COMMON_SHORTCUTS,
            description: '另存新檔',
            key: 'Cmd + Shift + S',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.COMMON_SHORTCUTS,
            description: '列印文件',
            key: 'Cmd + P',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.COMMON_SHORTCUTS,
            description: '關閉文件',
            key: 'Cmd + W',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.COMMON_SHORTCUTS,
            description: '復原',
            key: 'Cmd + Z',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.COMMON_SHORTCUTS,
            description: '重做',
            key: 'Cmd + Shift + Z',
        },

        // === 格式設定 ===
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.FORMATTING,
            description: '粗體',
            key: 'Cmd + B',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.FORMATTING,
            description: '斜體',
            key: 'Cmd + I',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.FORMATTING,
            description: '底線',
            key: 'Cmd + U',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.FORMATTING,
            description: '置中對齊',
            key: 'Cmd + E',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.FORMATTING,
            description: '左對齊',
            key: 'Cmd + L',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.FORMATTING,
            description: '右對齊',
            key: 'Cmd + R',
        },

        // === 文件導覽 ===
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.NAVIGATION,
            description: '移動到文件開頭',
            key: 'Cmd + Home',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.NAVIGATION,
            description: '移動到文件結尾',
            key: 'Cmd + End',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.NAVIGATION,
            description: '尋找文字',
            key: 'Cmd + F',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.NAVIGATION,
            description: '尋找並取代',
            key: 'Cmd + H',
        },

        // === macOS 專用功能 ===
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.MACOS_SPECIFIC,
            description: '開啟偏好設定',
            key: 'Cmd + ,',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.MACOS_SPECIFIC,
            description: '隱藏 Word',
            key: 'Cmd + H',
        },
        {
            mainCategory: WORD_CATEGORY.id,
            subCategory: WORD_CATEGORY.subCategories.MACOS_SPECIFIC,
            description: '全螢幕模式',
            key: 'Ctrl + Cmd + F',
        },
    ] as ShortcutItem[],
};
