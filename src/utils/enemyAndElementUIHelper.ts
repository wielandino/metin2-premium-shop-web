export interface HuntOptionUIMap {
    primaryColor: string;
    darkColor: string;
    backgroundColor: string;
    gradiantColor: string;
    boxShadowColor: string;
    icon: string;    
}


export interface ElementUIMap {
    [key: string]: {
        color: string;
        icon: string;
        HuntUIMap: HuntOptionUIMap;
    };
}

export const elementUIMap: ElementUIMap = {
    fire: {
        color: '#E74C3C',
        icon: 'fire',
        HuntUIMap: {
            primaryColor: '#E74C3C',
            darkColor: '#C0392B',
            backgroundColor: '#b4320a38',
            icon: 'fire',
            gradiantColor: 'rgba(192, 57, 43, 0.8), rgba(192, 57, 43, 0.533)',
            boxShadowColor: '#c0392b59'
        }
    },
    lightning: {
        color: '#F1C40F',
        icon: 'bolt',
        HuntUIMap: {
            primaryColor: '#F1C40F',
            darkColor: '#d4ac0d',
            backgroundColor: '#f1c40f38',
            icon: 'bolt',
            gradiantColor: 'rgba(212, 172, 13, 0.8), rgba(212, 172, 13, 0.533)',
            boxShadowColor: '#d4ac0d59'
        }
    },
    ice: {
        color: '#3498DB',
        icon: 'snowflake',
        HuntUIMap: {
            primaryColor: '#3498DB',
            darkColor: '#2980B9',
            backgroundColor: '#14509638',
            icon: 'snowflake',
            gradiantColor: 'rgba(41, 128, 185, 0.8), rgba(41, 128, 185, 0.533)',
            boxShadowColor: '#2980b988'
        }
    }
};