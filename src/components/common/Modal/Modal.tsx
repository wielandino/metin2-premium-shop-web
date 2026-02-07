import { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">

            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                 onClick={onClose} />

            <div className="relative max-w-full sm:max-w-xl md:max-w-2xl w-full shadow-2xl animate-modal-in overflow-visible max-h-[95vh] sm:max-h-[90vh]">

                <button onClick={onClose}
                        className="absolute -top-2 sm:-top-2.5 -right-2 sm:-right-2.5 z-10 text-white close-btn w-9 h-9 sm:w-8 sm:h-8 md:w-7.5 md:h-7.5 text-xl sm:text-2xl flex items-center justify-center"
                        aria-label="Close modal">
                    ×
                </button>

                <div className="overflow-y-auto max-h-[95vh] sm:max-h-[90vh]">
                    {children}
                </div>
            </div>
        </div>
    );
};