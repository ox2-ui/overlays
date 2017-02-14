import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';

const Base = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-backdrop-filter: blur(7px);
  background-color: rgba(94, 90, 89, 0.6);
  animation-duration: 1s;
  z-index: -1;
`;

/**
 * Backdrop Component
 */
const Backdrop = (props) => {
  const { isOpen, onClick } = props;

  return (
    <ReactCSSTransitionGroup
      transitionName="transition:overlay-fadeIn"
      transitionAppear={true}
      transitionEnter={false}
      transitionAppearTimeout={700}
      transitionLeaveTimeout={400}
    >
      {isOpen &&
        <Base
          key={1}
          onTouchMove={event => event.preventDefault()}
          onClick={onClick}
        />
      }
    </ReactCSSTransitionGroup>
  );
};

Backdrop.propTypes = {
  /**
   * Controls whether the backdrop is visible or not.
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * Callback function that is fired when the overlay clicked.
   */
  onClick: PropTypes.func,
};

export default Backdrop;