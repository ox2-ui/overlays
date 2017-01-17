### Left Panel

    initialState = { isOpen: false };
    const handleOpen = () => setState({ isOpen: true });
    const handleDismiss = () => {
      window.setTimeout(() => {
        setState({isOpen: false});
      }
      , 350);
    };

    const MyContent = (props) => {
      const {onDismiss} = props;
      return (
        <div style={{background: 'white', height: '100%'}}>
          <button onClick={() => onDismiss()}>Close</button>
          <div>Content</div>
        </div>
      );
    };

    <div>
      <button onClick={() => handleOpen()}>Open</button>


      {state.isOpen &&
        <Panel
          zDepth={10}
          isOpen={state.isOpen}
          maxWidth={'320px'}
          transition={'slideFromLeft'}
          right={'auto'}
          onDismiss={handleDismiss}
        >
          <MyContent />
        </Panel>
      }

    </div>

### Fullscreen Panel

    initialState = { isOpen: false };
    const handleOpen = () => setState({ isOpen: true });
    const handleDismiss = () => {
      window.setTimeout(() => {
        setState({isOpen: false});
      }
      , 350);
    };

    const MyContent = (props) => {
      const {onDismiss} = props;
      return (
        <div style={{background: 'white', height: '100%'}}>
          <button onClick={() => onDismiss()}>Close</button>
          <div>Content</div>
        </div>
      );
    };

    <div>
      <button onClick={() => handleOpen()}>Open</button>


      {state.isOpen &&
        <Panel
          zDepth={10}
          isOpen={state.isOpen}
          hideBackdrop={true}
          hideShadow={true}
          transition={'zoomIn'}
          onDismiss={handleDismiss}
        >
          <MyContent />
        </Panel>
      }

    </div>

### Bottom Panel

    initialState = { isOpen: false };
    const handleOpen = () => setState({ isOpen: true });
    const handleDismiss = () => {
      window.setTimeout(() => {
        setState({isOpen: false});
      }
      , 350);
    };

    const MyContent = (props) => {
      const {onDismiss} = props;
      return (
        <div style={{background: 'white', height: '100%'}}>
          <button onClick={() => onDismiss()}>Close</button>
          <div>Content</div>
        </div>
      );
    };

    <div>
      <button onClick={() => handleOpen()}>Open</button>


      {state.isOpen &&
        <Panel
          zDepth={10}
          isOpen={state.isOpen}
          maxWidth={'600px'}
          centered={true}
          transition={'slideFromBottom'}
          onDismiss={handleDismiss}
        >
          <MyContent />
        </Panel>
      }

    </div>
