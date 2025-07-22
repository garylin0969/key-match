import ShortcutTable from '@/components/molecules/shortcut-table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { WINDOWS_SHORTCUTS, MAC_SHORTCUTS, SYSTEM } from '@/constants/shortcuts';

export default function Home() {
    return (
        <div className="py-8">
            <div className="mb-8 text-center">
                <h1 className="mb-4 text-4xl font-bold">鍵盤快捷鍵對照表</h1>
                <p className="text-muted-foreground text-lg">Windows 與 Mac 系統的常用快捷鍵說明</p>
            </div>

            <Tabs defaultValue={SYSTEM[0]} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    {SYSTEM.map((system) => (
                        <TabsTrigger key={system} value={system}>
                            {system}
                        </TabsTrigger>
                    ))}
                </TabsList>

                <TabsContent value={SYSTEM[0]} className="mt-6">
                    <ShortcutTable system={SYSTEM[0]} shortcuts={WINDOWS_SHORTCUTS} title="Windows 11 快捷鍵" />
                </TabsContent>

                <TabsContent value={SYSTEM[1]} className="mt-6">
                    <ShortcutTable system={SYSTEM[1]} shortcuts={WINDOWS_SHORTCUTS} title="Windows 10 快捷鍵" />
                </TabsContent>

                <TabsContent value={SYSTEM[2]} className="mt-6">
                    <ShortcutTable system={SYSTEM[2]} shortcuts={MAC_SHORTCUTS} title="Mac 快捷鍵" />
                </TabsContent>
            </Tabs>
        </div>
    );
}
