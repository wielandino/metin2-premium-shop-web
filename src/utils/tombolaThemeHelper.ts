export const tombolaTierStyles: Record<string, { defaultCss: string, activeCss: string }> = {
    bronze: {
        defaultCss: "border-[#cd7f32]",
        activeCss: "border-[#cd7f32] bg-linear-to-br from-[#cd7f32] to-[#8b5a00] shadow-lg scale-105"
    },

    silver: {
        defaultCss: "border-[#c0c0c0]",
        activeCss: "border-[#c0c0c0] bg-linear-to-br from-[#c0c0c0] to-[#808080] shadow-lg scale-105"
    },

    gold: {
        defaultCss: "border-[#ffd700]",
        activeCss: "border-[#ffd700] bg-linear-to-br from-[#ffd700] to-[#daa520] shadow-lg scale-105"
    }
}