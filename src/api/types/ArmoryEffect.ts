export interface ArmoryEffect {
    id: number;
    name: string;
    
    damageMultiplierAgainstEffectValue: number;
    damageMultiplierAgainstEffect: ArmoryEffect;
}