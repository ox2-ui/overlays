import React, { PropTypes, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import Backdrop from '../Backdrop';
import Scroller from '@ox2/scroller/Scroller';
import styled from 'styled-components';

const DialogContent = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 2;
  width: ${props => props.width ? props.width : '100%' };
  max-width: ${props => props.maxWidth ? props.maxWidth : '600px' };
  height: ${props => props.type === 'scrollable' ? 'auto' : '100%'};
  box-shadow: ${props => props.hideShadow ? '' : '0px 0px 3px 0px rgba(50, 50, 50, 0.7)'};
`;

/**
 * Dialog Component
 */
class Dialog extends Component {
  static propTypes = {
    /**
     * Controls whether the dialog has auto height
     */
    autoHeight: PropTypes.bool,
    /**
     * The content of the dialog.
     */
    children: PropTypes.node,
    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * Controls whether the dialog has hideBackdrop or not.
     */
    hideBackdrop: PropTypes.bool,
    /**
     * Disables the default shadow around dialog
     */
    hideShadow: PropTypes.bool,
    /**
     * Controls whether the dialog can be closed by clicking on overlay.
     */
    isModal: PropTypes.bool,
    /**
     * Controls whether the dialog is open or not.
     */
    isOpen: PropTypes.bool.isRequired,
    /**
     * Max width of the content
     */
    maxWidth: PropTypes.string,
    /**
     * Callback function fired when the Dialog is dismissed.
     */
    onDismiss: PropTypes.func,
    /**
     * Callback function fired when the Dialog is dismissed and action submitted.
     */
    onSubmit: PropTypes.func,
    /**
     * Modal alignment
     */
    position: PropTypes.oneOf(
      ['top-right', 'top-center', 'top-left', 'center-right', 'center', 'center-left', 'bottom-right', 'bottom-center', 'bottom-left']
    ),
    /**
     * Transition style
     */
    transition: PropTypes.oneOf(['zoomIn', 'slideFromTop', 'slideFromBottom', 'fadeIn', 'none', 'slideFromLeft', 'slideFromRight']).isRequired,
    /**
     * Dialog type
     */
    type: PropTypes.oneOf(['fixed', 'scrollable']).isRequired,
    /**
     * Width of the content
     */
    width: PropTypes.string,
    /**
     * This number represents the zDepth of the dialog.
     */
    zDepth: PropTypes.number,
  };

  state = {
    isOpen: this.props.isOpen || false,
  };

  componentWillReceiveProps= (nextProps) => {
    if (nextProps.isOpen !== this.state.isOpen) {
      this.setState({ isOpen: nextProps.isOpen });
    }
  }

  handleSubmit = (value) => {
    if (this.props.onSubmit) {
      this.props.onSubmit({ value });
    }
    this.setState({isOpen: false});
  };

  handleDissmis = () => {
    if (this.props.onDismiss) {
      this.props.onDismiss();
    }
    this.setState({isOpen: false});
  };

  render() {
    const { className, children, hideShadow, zDepth, position, type, hideBackdrop, transition, isModal, maxWidth, width } = this.props;

    const getPosition = () => {
      switch (position) {
        case 'top-right':
          return 'flex:content-end flex:items-start';
        case 'top-center':
          return 'flex:content-center flex:items-start';
        case 'top-left':
          return 'flex:content-start flex:items-start';
        case 'center-right':
          return 'flex:content-end flex:items-center';
        case 'center':
          return 'flex:content-center flex:items-center';
        case 'center-left':
          return 'flex:content-start flex:items-center';
        case 'bottom-right':
          return 'flex:content-end flex:items-end';
        case 'bottom-center':
          return 'flex:content-center flex:items-end';
        case 'bottom-left':
          return 'flex:content-start flex:items-end';
        default:
          return `flex:content-center flex:items-${type === 'scrollable' ? 'start' : 'center'}`;
      }
    };

    const wrapperClassName = classNames(
      'pos:absolute-0 display:flex',
      getPosition()
    );

    const scrollerClassName = classNames(
      'display:flex',
      getPosition()
    );

    const renderDialog = () => {
      if (type === 'fixed') {
        return (
          <div>
            <DialogContent
              key={1}
              className={className}
              hideShadow={hideShadow}
              type={type}
              maxWidth={maxWidth}
              width={width}
            >
              { React.cloneElement(children, { onDismiss: this.handleDissmis, onSubmit: this.handleSubmit }) }
            </DialogContent>
            <div onClick={isModal ? null : this.handleDissmis} className="pos:absolute-0" />
          </div>
        );
      } else if (type === 'scrollable') {
        return (
          <Scroller className={scrollerClassName}>
            <div>
              <DialogContent
                key={1}
                className={className}
                hideShadow={hideShadow}
                type={type}
                maxWidth={maxWidth}
                width={width}
              >
                { React.cloneElement(children, { onDismiss: this.handleDissmis, onSubmit: this.handleSubmit }) }
              </DialogContent>
              <div onClick={this.handleDissmis} className="pos:absolute-0" />
            </div>
          </Scroller>
        );
      }
    };

    return (
      <div className="pos:absolute-0" style={{zIndex: zDepth}}>
        <ReactCSSTransitionGroup
          className={wrapperClassName}
          transitionName={`transition:dialog-${transition}`}
          transitionAppear={true}
          transitionEnter={false}
          transitionAppearTimeout={400}
          transitionLeaveTimeout={350}
        >
          {this.state.isOpen ? renderDialog() : null}
        </ReactCSSTransitionGroup>
        { !hideBackdrop && type !== 'fullscreen' &&
          <Backdrop
            isOpen={this.state.isOpen}
            onClick={isModal ? null : this.handleDissmis}
          />
        }
      </div>
    );
  }
}


export default Dialog;


