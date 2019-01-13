import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import MenuWrapper from './styles/MenuWrapper';

export class MenuItems extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <MenuWrapper>
        <Menu>
          <Menu.Item
            name='top'
            active={activeItem === 'top'}
            onClick={this.handleItemClick}
            href='#test'
          >
            Top
          </Menu.Item>

          <Menu.Item 
          name='knowledge' 
          active={activeItem === 'knowledge'} 
          onClick={this.handleItemClick}
          href='#test'
          >
          Knowledge
          </Menu.Item>

          <Menu.Item
            name='projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
            href='#test'
          >
            Projects
          </Menu.Item>
        </Menu>
      </MenuWrapper>
    )
  }
}

export default MenuItems;
