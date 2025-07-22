import ShortcutComparison from '@/components/molecules/shortcut-comparison';
import ShortcutTable from '@/components/molecules/shortcut-table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { WINDOWS_SHORTCUTS, MAC_SHORTCUTS } from '@/constants/shortcuts';

export default function Home() {
    return (
        <div className="py-8">
            <div className="mb-8 text-center">
                <h1 className="mb-4 text-4xl font-bold">鍵盤快捷鍵對照表</h1>
                <p className="text-muted-foreground text-lg">Windows 與 Mac 系統的常用快捷鍵對照與說明</p>
            </div>

            <Tabs defaultValue="comparison" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="comparison">快捷鍵對照</TabsTrigger>
                    <TabsTrigger value="windows11">Windows 11</TabsTrigger>
                    <TabsTrigger value="windows10">Windows 10</TabsTrigger>
                    <TabsTrigger value="mac">Mac</TabsTrigger>
                </TabsList>

                <TabsContent value="comparison" className="mt-6">
                    <ShortcutComparison />
                </TabsContent>

                <TabsContent value="windows11" className="mt-6">
                    <ShortcutTable shortcuts={WINDOWS_SHORTCUTS} title="Windows 11 快捷鍵" />
                </TabsContent>

                <TabsContent value="windows10" className="mt-6">
                    <ShortcutTable shortcuts={WINDOWS_SHORTCUTS} title="Windows 10 快捷鍵" />
                </TabsContent>

                <TabsContent value="mac" className="mt-6">
                    <ShortcutTable shortcuts={MAC_SHORTCUTS} title="Mac 快捷鍵" />
                </TabsContent>
            </Tabs>
        </div>
    );
}
