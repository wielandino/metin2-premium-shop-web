interface TombolaTierProps {
    tierName: string
}

export const TombolaTier = ({tierName}: TombolaTierProps) => {
    return (
        <>
            <h2>{tierName}</h2>    
        </>
    )
}