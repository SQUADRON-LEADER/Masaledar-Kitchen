import { useState, useEffect } from 'react';
import { CheckCircle, X, AlertCircle, Info, Heart } from 'lucide-react';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info' | 'promo';
  duration?: number;
}

export default function ToastNotification() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    // Show welcome promotion after 3 seconds
    const timer = setTimeout(() => {
      const id = Date.now();
      const newToast = { 
        id,
        message: "🎉 Welcome! Get 15% off your first order with code WELCOME15",
        type: 'promo' as const,
        duration: 8000
      };
      setToasts(prev => [...prev, newToast]);

      // Auto remove after duration
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
      }, 8000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const getToastIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error': return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'info': return <Info className="w-5 h-5 text-blue-500" />;
      case 'promo': return <Heart className="w-5 h-5 text-pink-500" />;
      default: return <Info className="w-5 h-5" />;
    }
  };

  const getToastStyles = (type: string) => {
    switch (type) {
      case 'success': return 'bg-green-50 border-green-200 text-green-800';
      case 'error': return 'bg-red-50 border-red-200 text-red-800';
      case 'info': return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'promo': return 'bg-gradient-to-r from-pink-50 to-orange-50 border-pink-200 text-gray-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`max-w-sm p-4 rounded-lg border shadow-lg backdrop-blur-sm transform transition-all duration-300 animate-in slide-in-from-right ${getToastStyles(toast.type)}`}
        >
          <div className="flex items-start space-x-3">
            {getToastIcon(toast.type)}
            <div className="flex-1">
              <p className="text-sm font-medium">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="flex-shrink-0 p-1 hover:bg-black/10 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
