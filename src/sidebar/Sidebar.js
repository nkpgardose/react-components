import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarFoundation from './SidebarFoundation';
import './Sidebar.css';

const propTypes = {
  children: PropTypes.node,
  isVisibile: PropTypes.bool,
};

const defaultProps = {
  isVisible: false,
};

class Sidebar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      visible: this.props.isVisible,
      classNames: []
    };

    this.foundation = new SidebarFoundation({
      addClass: className => this.setState(({classNames}) => ({classNames: classNames.concat([className])})),
      removeClass: className => this.setState(({classNames}) => ({classNames: classNames.filter(cn => cn !== className)})),
      registerClickHandler: handler => {
        this.refs.dimmer.addEventListener('click', handler);
        this.refs.toggle.addEventListener('click', handler);
      },
      unregisterClickHandler: handler => {
        this.refs.dimmer.removeEventListener('click', handler);
        this.refs.toggle.removeEventListener('click', handler);
      }
    }, this.props.isVisible);
  }

  getInitialState() {
    return {classNames: []};
  }

  componentDidMount() {
    this.foundation.init();
  }

  componentWillUnmount() {
    this.foundation.destroy();
  }

  render() {
    return (
      <div className={['Sidebar'].concat(this.state.classNames).join(' ')}>
        <button ref="toggle" className="Btn primary btnToggle">Click Me</button>
        <aside className="drawer">
          <div ref="dimmer" className="dimmer"></div>
          <div className="drawerContainer Shadow">
            {this.props.children}
          </div>
        </aside>
      </div>
    );
  }
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;

