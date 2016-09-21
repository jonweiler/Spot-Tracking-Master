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

  var Competitor = React.createClass({
    mixins: [React.addons.PureRenderMixin],
    render: function () {
      //console.log(this.props);
      return (<li>
               <div className="competitor">
                  <span className="comp-info" style={{color: this.props.data.color}}>{this.props.data.name}</span>
                  <span className="comp-info"><a href={this.props.data.bio}>{this.props.data.nickname}</a></span>
               </div>
             </li>);
    }
  });

  var CompetitorList = React.createClass({
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
        return <Competitor data={comp} key={comp.spotId}/>;
      }.bind(this));
      return (<ul>{rows}</ul>);
    }
  });

  function init () {
    React.render(<CompetitorList source="/competitors"/>, internal.cache.sideUl);
  }

  return {load: init};

});
