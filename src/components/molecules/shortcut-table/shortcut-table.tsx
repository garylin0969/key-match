'use client';

import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
    WINDOWS11_SHORTCUT_CATEGORIES,
    WINDOWS10_SHORTCUT_CATEGORIES,
    MAC_SHORTCUT_CATEGORIES,
} from '@/constants/shortcuts';

interface ShortcutTableProps {
    system: string;
    shortcuts: Array<{
        category: string;
        description: string;
        key: string;
    }>;
    title: string;
}

const ShortcutTable = ({ system, shortcuts, title }: ShortcutTableProps) => {
    const categories = useMemo(() => {
        if (system === 'Windows 11') return WINDOWS11_SHORTCUT_CATEGORIES;
        if (system === 'Windows 10') return WINDOWS10_SHORTCUT_CATEGORIES;
        if (system === 'MacOS') return MAC_SHORTCUT_CATEGORIES;
        return [];
    }, [system]);

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredShortcuts = useMemo(() => {
        if (!selectedCategory) return shortcuts;
        return shortcuts.filter((shortcut) => shortcut.category === selectedCategory);
    }, [shortcuts, selectedCategory]);

    const groupedShortcuts = useMemo(() => {
        const groups: Record<string, typeof shortcuts> = {};
        filteredShortcuts.forEach((shortcut) => {
            if (!groups[shortcut.category]) {
                groups[shortcut.category] = [];
            }
            groups[shortcut.category].push(shortcut);
        });
        return groups;
    }, [filteredShortcuts]);

    return (
        <div className="space-y-4">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">{title}</h2>

                <div className="flex flex-wrap gap-2">
                    <Button
                        variant={selectedCategory === null ? 'default' : 'outline'}
                        onClick={() => setSelectedCategory(null)}
                        size="sm"
                    >
                        全部
                    </Button>
                    {system === 'Windows 11' &&
                        categories.map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? 'default' : 'outline'}
                                onClick={() => setSelectedCategory(category)}
                                size="sm"
                            >
                                {category}
                            </Button>
                        ))}
                </div>
            </div>

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
