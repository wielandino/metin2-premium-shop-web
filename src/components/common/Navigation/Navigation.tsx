import { Link } from 'react-router-dom';
import { MobileDrawer } from './MobileDrawer';
import { Icon } from '../Icon';
import { useNavigation } from '../../../customHooks/useNavigation';

interface NavigationProps {
    activeTabId?: string;
}

export const Navigation = ({ activeTabId = 'all' }: NavigationProps) => {
    const { tabs, currentTab, isMobileMenuOpen, setIsMobileMenuOpen } = useNavigation(activeTabId);

    return (
        <>
            <div className="md:hidden border-b border-solid border-[#E8A314]">
                <div className="h-12 flex items-center px-3">
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="text-[#f2e69f] hover:text-tequila transition-colors p-2">
                        <Icon icon="bars" className="text-2xl" />
                    </button>
                    <span className="text-[#f2e69f] ml-3 font-bold">
                        {tabs.find(t => t.id === currentTab)?.label || 'Navigation'}
                    </span>
                </div>
            </div>

            <nav className="hidden md:block border-b border-solid border-[#E8A314]">
                <div className="h-8 sm:h-8 md:h-9 flex items-center min-w-max">
                    {tabs.map((tab) => {
                        const isActive = currentTab === tab.id;
                        const tabClasses = "text-[11px] sm:text-[12px] md:text-[13px] text-[#f2e69f] py-1 px-2 font-normal btn-navitem whitespace-nowrap inline-block"
                        const isActiveClasses = "btn-navitem-active";

                        if (tab.id === 'home') {
                            return (
                                <Link className="mr-1 sm:mr-1.5 shadow-none!" key={tab.id} to={tab.path}>
                                    <div className={`${tabClasses} ${isActive ? isActiveClasses : ''}`}>
                                        <Icon icon="house" className="text-sm sm:text-base" />
                                    </div>
                                </Link>
                            )
                        }

                        return (
                            <Link className="mr-1 sm:mr-1.5 shadow-none!" key={tab.id} to={tab.path}>
                                <div className={`${tabClasses} ${isActive ? isActiveClasses : ''}`}>{tab.label}</div>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            <MobileDrawer
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                tabs={tabs}
                currentTab={currentTab}
            />
        </>
    );
};