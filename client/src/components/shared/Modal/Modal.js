import React from 'react';

const Modal = props => {
  return (
    <div class="modal">
      <div class="modal-background" />
      <div class="modal-content">
        <h1>Title</h1>
      </div>
      <button class="modal-close is-large" aria-label="close" />
    </div>
  );
};

export default Modal;
