import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("about");
  this.resource("messages", function() {
    this.route("new");
  });
  this.route("review");
});

export default Router;
