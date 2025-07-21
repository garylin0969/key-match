import Logo from '@/components/atoms/logo';
import ThemeToggle from '@/components/atoms/theme-toggle';
import NoticeBar from '@/components/molecules/notice-bar';
import SocialLinks from '@/components/molecules/social-links';

// 通用樣式類別
const HEADER_STYLES = {
    container: 'border-border/40 bg-background/60 sticky top-0 left-0 z-50 border-b shadow-md backdrop-blur-md',
    innerContainer: 'container mx-auto flex h-14.5 items-center justify-between px-4',
    nav: 'items-center gap-x-2 flex',
} as const;

const Header = () => {
    return (
        <header className={HEADER_STYLES.container}>
            <div className={HEADER_STYLES.innerContainer}>
                {/* 網站標題 */}
                <Logo />
                {/* 導航 */}
                <nav className={HEADER_STYLES.nav}>
                    <SocialLinks />
                    <ThemeToggle />
                </nav>
            </div>
            <NoticeBar />
        </header>
    );
};

export default Header;
