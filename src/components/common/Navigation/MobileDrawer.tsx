import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Icon } from '../Icon';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface NavigationTab {
    id: string;
    label: string;
    path: string;
}

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    tabs: NavigationTab[];
    currentTab: string;
}

export const MobileDrawer = ({ isOpen, onClose, tabs, currentTab }: MobileDrawerProps) => {

    const { t } = useTranslation();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            <div
                className={clsx(
                    "fixed top-0 left-0 z-50 md:hidden",
                    "h-full w-64",
                    "transform transition-transform duration-300 ease-in-out",
                    "bg-[#662d12] border-r-2 border-tequila",
                    isOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                )}>
                <div className="flex items-center justify-between p-4 border-b border-[#E8A314]">
                    <div className="metin-logo w-32 h-10 shrink-0"></div>
                    <button
                        onClick={onClose}
                        className="text-[#f2e69f] hover:text-tequila transition-colors p-2"
                        aria-label="Menü schließen"
                    >
                        <Icon icon="xmark" className="text-2xl" />
                    </button>
                </div>

                <nav className="py-4 flex flex-col h-[calc(100%-65px)]">
                    <div className="flex-1">
                        {tabs.map((tab) => {
                            const isActive = currentTab === tab.id;

                            const getIcon = (tabId: string) => {
                                switch (tabId) {
                                    case 'home':
                                        return 'house';
                                    case 'all':
                                        return 'bag-shopping';
                                    case 'new':
                                        return 'star';
                                    case 'hot':
                                        return 'fire';
                                    default:
                                        return 'circle';
                                }
                            };

                            return (
                                <Link
                                    key={tab.id}
                                    to={tab.path}
                                    onClick={onClose}
                                    className={clsx(
                                        "flex items-center px-6 py-3 transition-all duration-200",
                                        isActive
                                            ? "bg-tequila text-[#3c1e16] border-l-4 border-[#f2e69f] font-bold"
                                            : "text-[#f2e69f] hover:bg-[rgba(232,163,20,0.2)] border-l-4 border-transparent")}
                                >
                                    <Icon icon={getIcon(tab.id) as IconProp} className="text-lg mr-3 min-w-5" />
                                    <span className="font-medium">{tab.label}</span>
                                    {isActive && (
                                        <Icon icon="check" className="ml-auto text-sm" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="border-t border-[#E8A314] pt-2 mt-auto">
                        <Link
                            to="/cart"
                            onClick={onClose}
                            className="flex items-center px-6 py-3 transition-all duration-200 text-[#f2e69f] hover:bg-[rgba(232,163,20,0.2)] border-l-4 border-transparent"
                        >
                            <Icon icon="shopping-cart" className="text-lg mr-3 min-w-5" />
                            <span className="font-medium">{t('cartPage.common.cartHeader')}</span>
                        </Link>
                        <Link
                            to="/top-up"
                            onClick={onClose}
                            className="flex items-center px-6 py-3 transition-all duration-200 text-[#f2e69f] hover:bg-[rgba(232,163,20,0.2)] border-l-4 border-transparent"
                        >
                            <Icon icon="coins" className="text-lg mr-3 min-w-5" />
                            <span className="font-medium">{t('common.topUp')}</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
};
