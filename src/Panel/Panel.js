import React, { PropTypes, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Backdrop from '../Backdrop';
import styled from 'styled-components';

const PanelContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 2;
  margin: ${props => props.centered ? '0 auto' : '' };
  width: ${props => props.width ? props.width : '100%' };
  height: ${props => props.height ? props.height : '100%' };
  max-width: ${props => props.maxWidth ? props.maxWidth : '100%' };
  box-shadow: ${props => props.hideShadow ? '' : '0px 0px 3px 0px rgba(50, 50, 50, 0.7)'};
`;

/**
 * Panel Component
 */
class Panel extends Component {
  static propTypes = {
    /**
     * Bottom positioning property value in css lenght units.
     */
    bottom: PropTypes.string,
    /**
     * If set to true panel will be centered horizontaly.
     */
    centered: PropTypes.bool,
    /**
     * The content of the panel.
     */
    children: PropTypes.node,
    /**
     * The css class name of the root element.
     */
    className: PropTypes.string,
    /**
     * Height of the panel content.
     */
    height: PropTypes.string,
    /**
     * Controls whether the panel has hideBackdrop or not.
     */
    hideBackdrop: PropTypes.bool,
    /**
     * Disables the default shadow around panel.
     */
    hideShadow: PropTypes.bool,
    /**
     * Controls whether the panel can be closed by clicking on overlay.
     */
    isModal: PropTypes.bool,
    /**
     * Controls whether the panel is opened or not.
     */
    isOpen: PropTypes.bool.isRequired,
    /**
     * Left positioning property value in css lenght units
     */
    left: PropTypes.string,
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
     * Right positioning property value in css lenght units
     */
    right: PropTypes.string,
    /**
     * Top positioning property value in css lenght units
     */
    top: PropTypes.string,
    /**
     * Transition style
     */
    transition: PropTypes.oneOf(['zoomIn', 'slideFromTop', 'slideFromBottom', 'fadeIn', 'none', 'slideFromLeft', 'slideFromRight']).isRequired,
    /**
     * Width of the content
     */
    width: PropTypes.string,
    /**
     * This number represents the zDepth of the panel.
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
    const { className, children, centered, hideShadow, zDepth, hideBackdrop, transition, isModal, maxWidth, width, height, top, left, right, bottom } = this.props;

    return (
      <div className="pos:absolute-0" style={{zIndex: zDepth}}>
        <ReactCSSTransitionGroup
          transitionName={`transition:dialog-${transition}`}
          transitionAppear={true}
          transitionEnter={false}
          transitionAppearTimeout={400}
          transitionLeaveTimeout={350}
        >
          {this.state.isOpen &&
            <PanelContent
              key={1}
              className={className}
              hideShadow={hideShadow}
              maxWidth={maxWidth}
              width={width}
              height={height}
              centered={centered}
              style={{top: top, left: left, bottom: bottom, right: right}}
            >
              { React.cloneElement(children, { onDismiss: this.handleDissmis, onSubmit: this.handleSubmit }) }
            </PanelContent>
          }
        </ReactCSSTransitionGroup>
        { !hideBackdrop &&
          <Backdrop
            isOpen={this.state.isOpen}
            onClick={isModal ? null : this.handleDissmis}
          />
        }
      </div>
    );
  }
}


export default Panel;


