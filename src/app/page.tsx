import ShortcutTable from '@/components/molecules/shortcut-table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SYSTEM_SHORTCUTS, SYSTEM_ENUM } from '@/constants/shortcuts';

export default function Home() {
    return (
        <div className="py-8">
            <div className="mb-8 text-center">
                <h1 className="mb-4 text-4xl font-bold">鍵盤快捷鍵對照表</h1>
                <p className="text-muted-foreground text-lg">Windows 與 Mac 系統的常用快捷鍵說明</p>
            </div>

            <Tabs defaultValue={SYSTEM_ENUM.WINDOWS} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    {Object.values(SYSTEM_ENUM).map((system) => (
                        <TabsTrigger key={system} value={system}>
                            {system}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <TabsContent value={SYSTEM_ENUM.WINDOWS} className="mt-6">
                    <ShortcutTable shortcuts={SYSTEM_SHORTCUTS.windows} title="Windows 快捷鍵" />
                </TabsContent>

                <TabsContent value={SYSTEM_ENUM.MACOS} className="mt-6">
                    <ShortcutTable shortcuts={SYSTEM_SHORTCUTS.mac} title="Mac 快捷鍵" />
                </TabsContent>
            </Tabs>
        </div>
    );
}
