export interface InfoPopupProps {
    description: string;
}

export const InfoPopup = ({ description }: InfoPopupProps) => {
    return (
        <>
            <div className="fixed top-4 left-1/2 transform -translate-x-1/2
                      bg-[#1a0a00] border border-solid border-tequila-darker 
                        pt-2.5 pb-2.5 pl-5 pr-5"
                style={{ boxShadow: '#00000099 0px 4px 20px;', animation: 'fadeSlideIn 0.3s ease' }}>

                <p className="text-[#f2e69f] text-[13px]">{description}</p>
            </div>


            <style>
                {`
                    @keyframes fadeSlideIn {
                        from { opacity: 0; transform: translateY(-6px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }

                    @keyframes extraHuntPulse {
                        0%, 100% { box-shadow: 0 0 22px rgba(220,20,60,0.25), inset 0 1px 0 rgba(255,50,50,0.15); }
                        50%       { box-shadow: 0 0 38px rgba(220,20,60,0.50), inset 0 1px 0 rgba(255,80,80,0.25); }
                    }
                `}
            </style>
        </>
    );
};