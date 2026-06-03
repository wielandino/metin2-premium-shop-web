import { ElementCard } from "../components/common/ElementCard"
import { MainContainer } from "../components/common/MainContainer"
import { elementThemes } from "../utils/UIHelper"

export const DungeonPage = () => {
    return (
        <>
            <MainContainer activeTabId="dungeon" pageHeaderName="Dungeon">
                <ElementCard element={elementThemes.fire}>
                    <p>Fire Element</p>
                </ElementCard>
            </MainContainer>
        </>
    )
}