export function getCorrectEnemyTypeColor(enemyType: string): string {
    switch (enemyType) {
        case 'insect':
            return '#27AE60';
        case 'orc':
            return '#E67E22';
        case 'undead':
            return '#8E44AD';
        default:
            return '#555555'; // Default color
    }
}

export function getCorrectElementTypeColor(elementType: string): string {
    switch (elementType) {
        case 'fire':
            return '#E74C3C';
        case 'water':
            return '#3498DB';
        case 'earth':
            return '#2E8B57';
        case 'air':
            return '#F1C40F';
        case 'ice':
            return '#1ABC9C';
        case 'dark':
            return '#2C3E50';
        case 'light':
            return '#F39C12';
        default:
            return '#555555'; // Default color
    }
}
