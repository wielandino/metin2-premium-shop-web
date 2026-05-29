import { MainContainer } from "../components/common/MainContainer";
import { HuntOptionSlot } from "../components/pages/MetinHuntPage/HuntOption/HuntOptionSlot";
import { mockHuntEnemies } from "../testing/mock/Enemy/HuntEnemyMocking";
import { CharacterArmory } from "../components/common/CharacterArmory/CharacterArmory";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { buildFightSequenceDetail } from "../utils/fightSequenceDetailBuilder";

export const MetinHuntPage = () => {

    const huntOptionMocks = mockHuntEnemies;
    const user = useContext(UserContext);

    buildFightSequenceDetail(user!.character.fightAbleUnit, huntOptionMocks[0].fightAbleUnit, true)

    return (
        <>
            <MainContainer activeTabId="metin-hunt" pageHeaderName="Metin-Stein Jagd">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <CharacterArmory />

                    <div className="flex flex-col gap-2.5">
                        {huntOptionMocks.map((huntOption, index) => (
                            <HuntOptionSlot key={index} huntOptionDetails={huntOption} />
                        ))}
                    </div>
                </div>

            </MainContainer>
        </>
    );
}