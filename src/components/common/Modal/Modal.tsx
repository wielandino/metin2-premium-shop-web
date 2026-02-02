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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                 onClick={onClose} />

            <div className="relative max-w-2xl w-full shadow-2xl animate-modal-in overflow-visible">

                <button onClick={onClose}
                        className="absolute top[-10px] -right-2.5 z-10 text-white close-btn w-7.5 h-7.5"
                        aria-label="Close modal">
                    ×
                </button>

                {children}
            </div>
        </div>
    );
};