import { Drawer } from '@mui/material';
import React from 'react';
import { List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

export default function DrawerMenu(props) {
  return (
    <Drawer
      anchor='right'
      open={props.open}
      onClose={() => props.setOpen(false)}>
      <List>
        <ListItem>
          <Link to='/'>Home</Link>
        </ListItem>
        <ListItem>
          <Link to='/users'>Usuarios</Link>
        </ListItem>
        <ListItem>
          <Link to='/users/1/post'>Criar Post</Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
