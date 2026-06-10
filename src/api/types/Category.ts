export type Category = {
    id: number;
    name: string;
    iconName?: string;
    description?: string;
    parentCategory?: Category
}