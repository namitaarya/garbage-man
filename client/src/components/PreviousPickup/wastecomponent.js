import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


export default function AlignItemsList() {
    
const DATA = [
    {
        type : "Industrial",
        quantity: 0,
        time: "12:00",
    },
    {
        type : "Residential",
        quantity: 3,
        time: "2:00",
    },
    {
        type : "Industrial",
        quantity: 0,
        time: 12,
    },
    {
        type : "Industrial",
        quantity: 0,
        time: 12,
    },
    {
        type : "Industrial",
        quantity: 0,
        time: 12,
    },
]
return <>
    {
      DATA.map(item => <div>
        
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText 
        style={{fontSize: "100px",}}
          secondary={
            <React.Fragment>
              <h2>Type of waste: {item.type}</h2>
              <p>Quantity of waste: {item.quantity}</p>
              <p>Time of pickup: {item.time}</p>
            </React.Fragment>
          }
        />
        
      </ListItem>
      </div>)
    }
  </>
}
// pickup date, time, quantity, type