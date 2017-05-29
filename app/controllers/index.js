import Ember from 'ember';
import Bitcore from 'npm:bitcore-lib';
var priv_key = new Bitcore.PrivateKey();

export default Ember.Controller.extend({
  priv_key: priv_key.toString(),
  wif_priv_key: priv_key.toWIF().toString(),
  pub_key: priv_key.toPublicKey().toString(),
  address: priv_key.toAddress().toString(),
  
  actions: {
    newAddress() {
      window.location.reload(true);
    }
  }
});
