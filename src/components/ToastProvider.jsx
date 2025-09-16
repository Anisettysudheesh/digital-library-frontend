import React, { createContext, useCallback, useContext, useState } from 'react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((type, message, duration = 4000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, type, message }]);
    if (duration > 0) {
      setTimeout(() => removeToast(id), duration);
    }
  }, [removeToast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-container" role="status" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={`toast ${t.type ? `toast--${t.type}` : ''}`}>
            <div className="toast-icon" aria-hidden>
              {t.type === 'success' && '✓'}
              {t.type === 'error' && '⚠'}
              {t.type === 'info' && 'ℹ'}
              {t.type === 'warning' && '!' }
            </div>
            <div className="toast-body">
              <div className="toast-title">{t.type ? (t.type === 'error' ? 'Error' : t.type[0].toUpperCase() + t.type.slice(1)) : 'Notice'}</div>
              <div className="toast-message">{t.message}</div>
            </div>
            <button className="toast-close" onClick={() => removeToast(t.id)} aria-label="close">×</button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return ctx;
}
