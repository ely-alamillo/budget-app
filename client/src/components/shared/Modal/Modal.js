import React from 'react';

export const Modal = props => {
  const toggle = () => {
    document.getElementById(props.for).classList.toggle('is-active');
  };

  return (
    <div className="modal" id={props.for}>
      <div className="modal-background" />
      <div className="modal-content">
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{props.title}</p>
            <button className="delete" aria-label="close" onClick={toggle} />
          </header>
          <section className="modal-card-body">{props.children}</section>
          <footer className="modal-card-foot">
            <button className="button is-success">Create</button>
            <button className="button" onClick={toggle}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};
