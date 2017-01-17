### Basic

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
        <div style={{background: 'white', height: '200px', width: '300px'}}>
          <button onClick={() => onDismiss()}>Close</button>
          <div>Content</div>
        </div>
      );
    };

    <div>
      <button onClick={() => handleOpen()}>Open</button>

      {state.isOpen &&
        <Dialog
          zDepth={10}
          isOpen={state.isOpen}
          type={'fixed'}
          transition={'fadeIn'}
          onDismiss={handleDismiss}
        >
          <MyContent />
        </Dialog>
       }

    </div>

### Scrollable

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
        <div style={{background: 'white', width: '200px'}}>
          <button onClick={() => onDismiss()}>Close</button>
          <div>'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ut quas itaque dolor nam temporibus aspernatur, ipsum officiis omnis, suscipit dolorum numquam voluptatibus. Porro amet nam perspiciatis recusandae, veritatis atque! Quibusdam sapiente distinctio ab accusamus, qui itaque, magnam adipisci ipsam esse quasi porro voluptas necessitatibus nostrum ratione reiciendis eaque incidunt id illum iusto, possimus. Voluptas voluptatem, expedita. Voluptates explicabo nostrum corrupti aliquam at repudiandae, earum nesciunt architecto fuga. Hic fugit in laudantium facilis et tempora! Voluptatum dignissimos, beatae adipisci rem sed quam, pariatur distinctio maiores natus sapiente, ratione et esse dolor. Id hic praesentium laudantium ratione unde, facere assumenda ab cumque laborum, nostrum illo nisi, nesciunt quibusdam perferendis voluptate aspernatur ducimus porro explicabo similique distinctio delectus deserunt at. Itaque commodi, maiores rerum magni sunt quaerat dolor accusamus. Quis sed delectus et, cum culpa autem esse tenetur alias, odio voluptatem veniam eos eaque quos libero. Quia cum, perferendis sunt! Dolorum distinctio et neque reiciendis, temporibus quisquam necessitatibus consequuntur labore cupiditate? Voluptas deleniti minima nam molestias, consequuntur odit unde voluptate vero laboriosam porro! Eos, doloribus itaque tenetur excepturi sint eaque voluptate asperiores odio ipsum vitae iusto officia officiis sapiente impedit nostrum aut, ea dolores id autem reiciendis voluptates. Suscipit quibusdam consequuntur assumenda temporibus modi sit, reiciendis, dolore velit iste, iusto ex totam sapiente sunt quaerat distinctio dicta officiis similique a vero. Sed dicta esse velit saepe quis, eos labore quia facilis inventore laudantium illum, nesciunt maxime ad. Fugit vel voluptates earum, vero quae tenetur voluptatem veritatis et quo doloribus, dicta dolorum voluptate corrupti eligendi neque temporibus iure consequuntur inventore quasi repellat culpa commodi optio dolorem a! Vitae tempore pariatur omnis rerum harum nihil aliquam neque quaerat beatae obcaecati repellat illo est, odit atque, enim dignissimos, maiores magni nesciunt. At voluptas, quas dolor accusantium quisquam magnam, architecto vel. Quis consectetur quo fuga repellendus.'</div>
        </div>
      );
    };

    <div>
      <button onClick={() => handleOpen()}>Open</button>

      {state.isOpen &&
        <Dialog
          zDepth={10}
          isOpen={state.isOpen}
          type={'scrollable'}
          transition={'slideFromTop'}
          onDismiss={handleDismiss}
        >
          <MyContent />
        </Dialog>
       }

    </div>
