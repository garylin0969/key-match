'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ShortcutItem, CATEGORY_CONFIG, MAIN_CATEGORIES } from '@/constants/shortcuts';

interface ShortcutTableProps {
    shortcuts: ShortcutItem[];
    title: string;
}

const ShortcutTable = ({ shortcuts, title }: ShortcutTableProps) => {
    const [selectedMainCategory, setSelectedMainCategory] = useState<string>(MAIN_CATEGORIES.SYSTEM);
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

    // 獲取主分類列表
    const mainCategories = useMemo(() => {
        return Object.entries(CATEGORY_CONFIG).map(([key, config]) => ({
            key,
            name: config.name,
        }));
    }, []);

    // 獲取當前選中主分類的子分類列表
    const subCategories = useMemo(() => {
        return CATEGORY_CONFIG[selectedMainCategory as keyof typeof CATEGORY_CONFIG]?.subCategories || [];
    }, [selectedMainCategory]);

    // 根據主分類和子分類篩選快捷鍵
    const filteredShortcuts = useMemo(() => {
        let filtered = shortcuts.filter((shortcut) => shortcut.mainCategory === selectedMainCategory);

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
    const handleMainCategoryChange = (mainCategoryKey: string) => {
        setSelectedMainCategory(mainCategoryKey);
        setSelectedSubCategory(null); // 重置子分類選擇
    };

    return (
        <div className="space-y-4">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">{title}</h2>

                {/* 主分類選擇 */}
                <div className="space-y-2">
                    <h3 className="text-muted-foreground text-sm font-medium">軟體分類</h3>
                    <div className="flex flex-wrap gap-2">
                        {mainCategories.map((category) => (
                            <Button
                                key={category.key}
                                variant={selectedMainCategory === category.key ? 'default' : 'outline'}
                                onClick={() => handleMainCategoryChange(category.key)}
                                size="sm"
                            >
                                {category.name}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* 子分類選擇 */}
                <div className="space-y-2">
                    <h3 className="text-muted-foreground text-sm font-medium">功能分類</h3>
                    <div className="flex flex-wrap gap-2">
                        <Button
                            variant={selectedSubCategory === null ? 'default' : 'outline'}
                            onClick={() => setSelectedSubCategory(null)}
                            size="sm"
                        >
                            全部
                        </Button>
                        {subCategories.map((category: string) => (
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
            </div>

            {/* 快捷鍵表格 */}
            <div className="space-y-6">
                {Object.entries(groupedShortcuts).map(([category, categoryShortcuts]) => (
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
                ))}
            </div>
        </div>
    );
};

export default ShortcutTable;
