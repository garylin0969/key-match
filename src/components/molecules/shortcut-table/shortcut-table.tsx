'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ShortcutItem, getMainCategories, getAvailableSubCategories, SYSTEM_ENUM } from '@/constants/shortcuts';

interface ShortcutTableProps {
    shortcuts: ShortcutItem[];
    title: string;
    system: SYSTEM_ENUM; // 新增系統參數
}

const ShortcutTable = ({ shortcuts, title, system }: ShortcutTableProps) => {
    const [selectedMainCategory, setSelectedMainCategory] = useState<string>('');
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

    // 獲取所有主分類
    const mainCategories = useMemo(() => {
        return getMainCategories();
    }, []);

    // 初始化選中的主分類
    useMemo(() => {
        if (mainCategories.length > 0 && !selectedMainCategory) {
            setSelectedMainCategory(mainCategories[0].id);
        }
    }, [mainCategories, selectedMainCategory]);

    // 獲取當前選中主分類的子分類列表（根據當前系統和實際資料）
    const subCategories = useMemo(() => {
        if (!selectedMainCategory) return [];
        // 使用智能函數：只回傳該系統實際有資料的子分類
        return getAvailableSubCategories(selectedMainCategory, system);
    }, [selectedMainCategory, system]);

    // 根據主分類和子分類篩選快捷鍵
    const filteredShortcuts = useMemo(() => {
        let filtered = shortcuts;

        if (selectedMainCategory) {
            filtered = filtered.filter((shortcut) => shortcut.mainCategory === selectedMainCategory);
        }

        if (selectedSubCategory) {
            filtered = filtered.filter((shortcut) => shortcut.subCategory === selectedSubCategory);
        }

        return filtered;
    }, [shortcuts, selectedMainCategory, selectedSubCategory]);

    // 將篩選後的快捷鍵按子分類分組
    const groupedShortcuts = useMemo(() => {
        const groups: Record<string, ShortcutItem[]> = {};
        filteredShortcuts.forEach((shortcut) => {
            if (!groups[shortcut.subCategory]) {
                groups[shortcut.subCategory] = [];
            }
            groups[shortcut.subCategory].push(shortcut);
        });
        return groups;
    }, [filteredShortcuts]);

    // 處理主分類切換
    const handleMainCategoryChange = (mainCategoryId: string) => {
        setSelectedMainCategory(mainCategoryId);
        setSelectedSubCategory(null); // 重置子分類選擇
    };

    // 計算每個主分類在當前系統下是否有資料
    const categoriesWithData = useMemo(() => {
        return mainCategories.map((category) => {
            const hasData = shortcuts.some((shortcut) => shortcut.mainCategory === category.id);
            return { ...category, hasData };
        });
    }, [mainCategories, shortcuts]);

    return (
        <div className="space-y-4">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">{title}</h2>

                {/* 主分類選擇 - 只顯示有資料的分類 */}
                <div className="space-y-2">
                    <h3 className="text-muted-foreground text-sm font-medium">軟體分類</h3>
                    <div className="flex flex-wrap gap-2">
                        {categoriesWithData
                            .filter((category) => category.hasData) // 只顯示有資料的分類
                            .map((category) => (
                                <Button
                                    key={category.id}
                                    variant={selectedMainCategory === category.id ? 'default' : 'outline'}
                                    onClick={() => handleMainCategoryChange(category.id)}
                                    size="sm"
                                >
                                    {category.name}
                                </Button>
                            ))}
                    </div>
                    {categoriesWithData.filter((c) => c.hasData).length === 0 && (
                        <p className="text-muted-foreground text-sm">目前沒有適用於 {system} 系統的軟體分類</p>
                    )}
                </div>

                {/* 子分類選擇 - 根據系統動態顯示 */}
                {subCategories.length > 0 && (
                    <div className="space-y-2">
                        <h3 className="text-muted-foreground text-sm font-medium">
                            功能分類
                            <span className="ml-2 text-xs opacity-75">({system} 系統專用)</span>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <Button
                                variant={selectedSubCategory === null ? 'default' : 'outline'}
                                onClick={() => setSelectedSubCategory(null)}
                                size="sm"
                            >
                                全部
                            </Button>
                            {subCategories.map((category) => (
                                <Button
                                    key={category}
                                    variant={selectedSubCategory === category ? 'default' : 'outline'}
                                    onClick={() => setSelectedSubCategory(category)}
                                    size="sm"
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* 快捷鍵表格 */}
            <div className="space-y-6">
                {Object.keys(groupedShortcuts).length === 0 ? (
                    <div className="text-muted-foreground py-8 text-center">
                        <p>目前沒有適用於 {system} 系統的快捷鍵資料</p>
                        {selectedMainCategory && (
                            <p className="mt-2 text-sm">
                                選中分類：{mainCategories.find((c) => c.id === selectedMainCategory)?.name}
                            </p>
                        )}
                    </div>
                ) : (
                    Object.entries(groupedShortcuts).map(([category, categoryShortcuts]) => (
                        <div key={category} className="space-y-2">
                            <h3 className="text-lg font-semibold">{category}</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>功能說明</TableHead>
                                        <TableHead>快捷鍵</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {categoryShortcuts.map((shortcut, index) => (
                                        <TableRow key={`${category}-${index}`}>
                                            <TableCell>{shortcut.description}</TableCell>
                                            <TableCell>
                                                <code className="bg-muted rounded px-2 py-1 font-mono text-sm">
                                                    {shortcut.key}
                                                </code>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ShortcutTable;
