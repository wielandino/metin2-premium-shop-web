export type TombolaConfiguration = {
    dailyTickets: number;
    wheelConfiguration: TombolaWheelConfiguration;

}

type TombolaWheelConfiguration = {
    totalSpinningRounds: number;
    inactiveSpinningInterval: number;
    tickTimeout: number;
    openModalDelay: number;
    wheelProgressDelay: number;
}

export const TOMBOLA_CONFIGURATION: TombolaConfiguration = {
    dailyTickets: 3,
    wheelConfiguration: {
        totalSpinningRounds: 5,
        inactiveSpinningInterval: 1500,
        openModalDelay: 800,
        tickTimeout: 80,
        wheelProgressDelay: 480
    }
}