import React, { useState, useEffect } from 'react';
import './MessageBox.css'; // 导入自定义样式

const MessageBox = ({ message, type, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 3000); // 3秒后自动关闭提示框

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setShow(false);
    onClose?.();
  };

  return (
    <div className={`message-box ${type} ${show ? 'show' : 'hide'}`}>
      <span className="message">{message}</span>
      <button className="close-btn" onClick={handleClose}>
        &times;
      </button>
    </div>
  );
};

export default MessageBox;
