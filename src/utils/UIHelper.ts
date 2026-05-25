export interface ElementThemeUIMap {
    [key: string]: {
        color: string;
        icon: string;
        primaryColor: string;
        darkColor: string;
        backgroundColor: string;
        gradiantColor: string;
        boxShadowColor: string;
    };
}

export interface ArmoryUIMap {
    [key: string]: {
        color: string;
        icon: string;
    };
}

export const elementThemeUIMap: ElementThemeUIMap = {
    fire: {
        color: '#E74C3C',
        icon: 'fire',
        primaryColor: '#E74C3C',
        darkColor: '#C0392B',
        backgroundColor: '#b4320a38',
        gradiantColor: 'rgba(192, 57, 43, 0.8), rgba(192, 57, 43, 0.533)',
        boxShadowColor: '#c0392b59'
    },
    lightning: {
        color: '#F1C40F',
        icon: 'bolt',
        primaryColor: '#F1C40F',
        darkColor: '#d4ac0d',
        backgroundColor: '#82640038',
        gradiantColor: 'rgba(212, 172, 13, 0.8), rgba(212, 172, 13, 0.533)',
        boxShadowColor: '#d4ac0d59'
    },
    ice: {
        color: '#3498DB',
        icon: 'snowflake',
        primaryColor: '#3498DB',
        darkColor: '#2980B9',
        backgroundColor: '#14509638',
        gradiantColor: 'rgba(41, 128, 185, 0.8), rgba(41, 128, 185, 0.533)',
        boxShadowColor: '#2980b988'

    }
};

export const armoryUIMap: ArmoryUIMap = {
    chest: {
        color: '#8E44AD',
        icon: 'shield'
    },
    weapon: {
        color: '#E67E22',
        icon: 'hand-fist'
    }
};