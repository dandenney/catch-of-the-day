import React from 'react';
import AddFishForm from './AddFishForm';
import base from '../base';

class Inventory extends React.Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);

    this.state = {
      uid: null,
      owner: null,
    };
  }

  componentDidMount() {
    base.onAuth(user => {
      if (user) {
        this.authHandler(null, {user});
      }
    });
  }

  handleChange(e, key) {
    const fish = this.props.fishes[key];

    // take a copy of the fish and update it with the new data

    const updatedFish = {...fish, [e.target.name]: e.target.value};
    this.props.updateFish(key, updatedFish);
  }

  renderLogin() {
    return (
      <nav className="login">
        <h2>Inventory</h2>
        <p>Sign in to manage your store's inventory</p>
        <button className="github" onClick={() => this.authenticate('github')}>
          Log in with Github
        </button>
      </nav>
    );
  }

  authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  logout() {
    base.unauth();
    this.setState({uid: null});
  }

  authHandler(err, authData) {
    console.log(authData);

    if (err) {
      console.error(err);
      return;
    }

    // Grab the store info
    const storeRef = base.database().ref(this.props.storeId);

    // Query firebase once
    storeRef.once('value', snapshot => {
      const data = snapshot.val() || {};

      // Claim it
      if (!data.owner) {
        storeRef.set({
          owner: authData.user.uid,
        });
      }

      this.setState({
        uid: authData.user.uid,
        owner: data.owner || authData.user.uid,
      });
    });
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>

        <input
          type="text"
          name="name"
          onChange={e => this.handleChange(e, key)}
          placeholder="Fish Name"
          value={fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={e => this.handleChange(e, key)}
          placeholder="Fish Price"
          value={fish.price}
        />

        <select
          type="text"
          name="status"
          onChange={e => this.handleChange(e, key)}
          placeholder="Fish Status"
          value={fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea
          type="text"
          name="description"
          onChange={e => this.handleChange(e, key)}
          placeholder="Fish Description"
          value={fish.description}
        />
        <input
          type="text"
          name="image"
          onChange={e => this.handleChange(e, key)}
          placeholder="Fish Image"
          value={fish.image}
        />

        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>

      </div>
    );
  }

  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>;

    // Check for a logged in person
    if (!this.state.uid) {
      return <div>{this.renderLogin()}</div>;
    }

    // Check if logges in person is store owner
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>No and then</p>
          {logout}
        </div>
      );
    }

    return (
      <section>
        <h2>Inventory</h2>
        {logout}
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </section>
    );
  }
}

Inventory.propTypes = {
  fishes: React.PropTypes.object.isRequired,
  updateFish: React.PropTypes.func.isRequired,
  removeFish: React.PropTypes.func.isRequired,
  addFish: React.PropTypes.func.isRequired,
  loadSamples: React.PropTypes.func.isRequired,
  storeId: React.PropTypes.string.isRequired,
};

export default Inventory;
