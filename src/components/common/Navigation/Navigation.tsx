// components/pages/ShopPage/Navigation.tsx
import { useState } from 'react';

interface NavigationTab {
    id: string;
    label: string;
    path: string;
}

interface NavigationProps {
    activeTab?: string;
    onTabChange?: (tabId: string) => void;
}

export const Navigation = ({ activeTab = 'all', onTabChange }: NavigationProps) => {

    const [currentTab, setCurrentTab] = useState(activeTab);

    const tabs: NavigationTab[] = [
        { id: 'home', label: '', path: '/' },
        { id: 'all', label: 'Alle Artikel', path: '/shop' },
        { id: 'new', label: 'Neue Artikel', path: '/shop/new' },
        { id: 'popular', label: 'Beliebte Artikel', path: '/shop/popular' },
        { id: 'sale', label: 'Reduzierte Artikel', path: '/shop/sale' },
        { id: 'wheel', label: 'Rad des Cor Daemonis', path: '/shop/wheel' }
    ];

    const handleTabClick = (tab: NavigationTab) => {
        setCurrentTab(tab.id);
        if (onTabChange) {
            onTabChange(tab.id);
        }
    };

    const handleHomeClick = () => {
        window.location.href = '/';
    };



    return (
        <nav className="border-b border-solid border-[#E8A314]">
            <div className="h-8">
                {tabs.map((tab) => {
                    const isActive = currentTab === tab.id;
                    const tabClasses = "text-[13px] text-[#f2e69f] pt-1.5 pr-1.5 pb-1.5 pl-1.5 font-normal btn-navitem"
                    const isActiveClasses = "btn-navitem-active";


                    if (tab.id === 'home') {
                        return (
                            <>
                                <button className="mr-1 shadow-none!">
                                    <a className={`${tabClasses} ${isActive ? isActiveClasses : ''}`}><i className="fa-solid fa-house" /></a>
                                </button>
                            </>
                        )
                    }

                    return (
                        <>
                            <button className="mr-1 shadow-none!">
                                <a className={tabClasses}>{tab.label}</a>
                            </button>

                        </>
                    );
                })}
            </div>
        </nav>
    );
};