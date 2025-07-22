// ============ 導入拆分的快捷鍵資料 ============
import { SYSTEM_SHORTCUTS } from './system';
import { WORD_SHORTCUTS } from './word';

// ============ 基礎類型和枚舉 ============
export interface ShortcutItem {
    mainCategory: string;
    subCategory: string;
    description: string;
    key: string;
}

export enum SYSTEM_ENUM {
    WINDOWS = 'Windows',
    MACOS = 'macOS',
}

// ============ 分類配置 ============
export const CATEGORY_CONFIG = {
    // 系統操作分類
    SYSTEM: {
        id: 'SYSTEM',
        name: '系統操作',
        subCategories: {
            // 通用分類（兩個系統都有）
            TEXT_EDITING: '文字編輯',
            COPY_PASTE: '複製貼上',
            FILE_MANAGEMENT: '檔案管理',

            // 系統特定分類
            WINDOWS_SYSTEM: '系統管理 (Windows)',
            MACOS_SYSTEM: '系統管理 (macOS)',
            WINDOWS_DESKTOP: '桌面管理 (Windows)',
            MACOS_SPOTLIGHT: 'Spotlight 搜尋 (macOS)',
        },
        systemSupport: {
            [SYSTEM_ENUM.WINDOWS]: [
                'TEXT_EDITING',
                'COPY_PASTE',
                'FILE_MANAGEMENT',
                'WINDOWS_SYSTEM',
                'WINDOWS_DESKTOP',
            ],
            [SYSTEM_ENUM.MACOS]: ['TEXT_EDITING', 'COPY_PASTE', 'FILE_MANAGEMENT', 'MACOS_SYSTEM', 'MACOS_SPOTLIGHT'],
        },
    },

    // Word 分類
    WORD: {
        id: 'WORD',
        name: 'Microsoft Word',
        subCategories: {
            COMMON_SHORTCUTS: '常用操作',
            FORMATTING: '格式設定',
            NAVIGATION: '文件導覽',
            WINDOWS_SPECIFIC: 'Windows 專用功能',
            MACOS_SPECIFIC: 'macOS 專用功能',
        },
        systemSupport: {
            [SYSTEM_ENUM.WINDOWS]: ['COMMON_SHORTCUTS', 'FORMATTING', 'NAVIGATION', 'WINDOWS_SPECIFIC'],
            [SYSTEM_ENUM.MACOS]: ['COMMON_SHORTCUTS', 'FORMATTING', 'NAVIGATION', 'MACOS_SPECIFIC'],
        },
    },
} as const;

// ============ 統整的快捷鍵資料 ============
export const SHORTCUTS_DATA = {
    [SYSTEM_ENUM.WINDOWS]: [
        ...SYSTEM_SHORTCUTS[SYSTEM_ENUM.WINDOWS],
        ...WORD_SHORTCUTS[SYSTEM_ENUM.WINDOWS],
        // 未來可以輕鬆加入更多軟體
        // ...EXCEL_SHORTCUTS[SYSTEM_ENUM.WINDOWS],
        // ...VSCODE_SHORTCUTS[SYSTEM_ENUM.WINDOWS],
    ],
    [SYSTEM_ENUM.MACOS]: [
        ...SYSTEM_SHORTCUTS[SYSTEM_ENUM.MACOS],
        ...WORD_SHORTCUTS[SYSTEM_ENUM.MACOS],
        // 未來可以輕鬆加入更多軟體
        // ...EXCEL_SHORTCUTS[SYSTEM_ENUM.MACOS],
        // ...VSCODE_SHORTCUTS[SYSTEM_ENUM.MACOS],
    ],
};

// ============ 重新導出拆分的快捷鍵資料 ============
export { SYSTEM_SHORTCUTS } from './system';
export { WORD_SHORTCUTS } from './word';

// ============ 智能輔助函數 ============

// 獲取所有主分類
export const getMainCategories = () => {
    return Object.values(CATEGORY_CONFIG);
};

// 獲取所有子分類
export const getSubCategories = (mainCategoryId: string, system?: SYSTEM_ENUM) => {
    const category = Object.values(CATEGORY_CONFIG).find((cat) => cat.id === mainCategoryId);
    if (!category) return [];

    const allSubCategories = Object.values(category.subCategories);

    if (!system) return allSubCategories;

    if (category.systemSupport && category.systemSupport[system]) {
        const supportedKeys = category.systemSupport[system];
        return supportedKeys
            .map((key) => category.subCategories[key as keyof typeof category.subCategories])
            .filter(Boolean);
    }

    return allSubCategories;
};

// 獲取可用子分類
export const getAvailableSubCategories = (mainCategoryId: string, system: SYSTEM_ENUM) => {
    const shortcuts = getShortcutsBySystem(system);
    const categoryShortcuts = shortcuts.filter((s) => s.mainCategory === mainCategoryId);

    const availableSubCategories = [...new Set(categoryShortcuts.map((s) => s.subCategory))];
    return availableSubCategories;
};

// 獲取系統的快捷鍵
export const getShortcutsBySystem = (system: SYSTEM_ENUM) => {
    return SHORTCUTS_DATA[system] || [];
};

// 獲取指定分類的快捷鍵
export const getShortcutsByCategory = (system: SYSTEM_ENUM, mainCategory?: string, subCategory?: string) => {
    let shortcuts = getShortcutsBySystem(system);

    if (mainCategory) {
        shortcuts = shortcuts.filter((item) => item.mainCategory === mainCategory);
    }

    if (subCategory) {
        shortcuts = shortcuts.filter((item) => item.subCategory === subCategory);
    }

    return shortcuts;
};
