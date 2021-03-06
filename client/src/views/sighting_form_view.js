const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
    console.log(evt.details);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newSighting = this.createSighting(evt.target);
  PubSub.publish('SightingFormView:submit-clicked', newSighting);
  evt.target.reset();
}

SightingFormView.prototype.createSighting = function (form) {
  const newSighting = {
    species: form.species.value,
    location: form.location.value,
    date: form.date.value
  };
  return newSighting;
}

module.exports = SightingFormView;
