define(['react', 'jquery'], function sidebar(React, $) {
  'use strict';

  var internal = {
    cache: {
      sideUl: document.getElementById('competitorList'),
      ev: $('#map-canvas').data('event')
    },
    compCb: function compCb (resp) {
      if (this.isMounted()) {
        this.setState({
          competitors: resp.competitors
        });
      }
    }
  };

  var Competitor = React.createClass({displayName: "Competitor",
    mixins: [React.addons.PureRenderMixin],
    render: function () {
      //console.log(this.props);
      return (React.createElement("li", null, 
               React.createElement("div", {className: "competitor"}, 
                  React.createElement("span", {className: "comp-info", style: {color: this.props.data.color}}, this.props.data.name), 
                  React.createElement("span", {className: "comp-info"}, React.createElement("a", {href: this.props.data.bio}, this.props.data.nickname))
               )
             ));
    }
  });

  var CompetitorList = React.createClass({displayName: "CompetitorList",
    getInitialState: function () {
      return {
        competitors: []
      };
    },
    componentDidMount: function () {
      $.getJSON(this.props.source, {'event': internal.cache.ev}, internal.compCb.bind(this));
    },
    render: function () {
      //console.log(this.props);
      // This matches the docs, not sure why react still warns abt key
      var rows = this.state.competitors.map(function cfe(comp) {
        return React.createElement(Competitor, {data: comp, key: comp.spotId});
      }.bind(this));
      return (React.createElement("ul", null, rows));
    }
  });

  function init () {
    React.render(React.createElement(CompetitorList, {source: "/competitors"}), internal.cache.sideUl);
  }

  return {load: init};

});
