import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function useNavigation(activeTabId: string = 'all') {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t } = useTranslation();

    const tabs = [
        { id: 'home', label: 'Home', path: '/' },
        { id: 'all', label: t('header.navigation.all'), path: '/category/all' },
        { id: 'new', label: t('header.navigation.new'), path: '/category/new' },
        { id: 'hot', label: t('header.navigation.hot'), path: '/category/hot' },
        { id: 'tombola', label: t('header.navigation.tombola'), path: '/tombola' },
    ];

    const getCurrentTab = () => {
        if (location.pathname === '/') return 'home';

        const match = location.pathname.match(/\/category\/(.+)/);
        if (match) return match[1];

        return activeTabId || 'home';
    };

    const currentTab = getCurrentTab();

    return { tabs, currentTab, isMobileMenuOpen, setIsMobileMenuOpen };
}
