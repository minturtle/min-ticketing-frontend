// components/Toast.jsx
import { useEffect } from 'react';

function Toast({ message, type = 'error', onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

    return (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50">
            <div className={`${bgColor} text-white px-6 py-3 rounded-lg shadow-lg`}>
                {message}
            </div>
        </div>
    );
}

export default Toast;