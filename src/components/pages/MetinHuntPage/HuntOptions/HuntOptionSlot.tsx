import { Button } from "../../../common/Button/Button"
import { Icon } from "../../../common/Icon"

export const HuntOptionSlot = () => {


    return (
        <div className="bg-[#b4320a38] border border-solid border-[#c0392b] p-3.5">
            <div className="flex items-start gap-3">
                <div className="flex flex-col items-center min-w-12">
                    <Icon icon="fire" className="text-[#c0392b] text-[26px]" />
                    <span className="mt-1 text-[11px] font-bold bg-[#e74c3c4d] border border-solid border-[#e74c3c] text-[#f2e69f]" style={{ padding: '2px 7px' }}>
                        25%
                    </span>
                </div>

                <div className="flex-1">
                    <p className="text-[#f2e69f] text-[14px] mb-0.5">Feuer-Metin</p>
                    <p className="text-[#999999] text-[11px] mb-2">Feuer & Gift. Herausfordernd, aber ohne Rüstung möglich.</p>

                    <div className="flex gap-1.5 flex-wrap mb-2">
                        <span className="flex text-[11px] text-[#555555] border border-solid border-[#3a2010] bg-[#00000033] items-center gap-1 pt-0.5 pb-0.5 pl-2 pr-2">
                            <Icon icon="fire" />
                            Feuer 70%
                        </span>
                    </div>
                </div>


                <Button className="pt-2 pb-2 pl-3.5 pr-3.5 text-[12px] border border-solid border-[#c0392b] text-[#f2e69f] self-center hidden sm:flex"
                        title="Jagen"
                        iconId="khanda"
                        style={{
                            background: 'linear-gradient(rgba(192, 57, 43, 0.8), rgba(192, 57, 43, 0.533))',
                            boxShadow: 'rgba(192, 57, 43, 0.35) 0px 0px 8px'
                        }} />
            </div>

            <Button className="pt-2 pb-2 pl-3.5 pr-3.5 text-[12px] border border-solid border-[#c0392b] text-[#f2e69f] self-center md:hidden w-full mt-3"
                    title="Jagen"
                    iconId="khanda"
                    style={{
                        background: 'linear-gradient(rgba(192, 57, 43, 0.8), rgba(192, 57, 43, 0.533))',
                        boxShadow: 'rgba(192, 57, 43, 0.35) 0px 0px 8px'
                    }} />
        </div>
    )
}