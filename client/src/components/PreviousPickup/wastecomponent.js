import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


export default function AlignItemsList({data}) {
    
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
      data.map((item, i) => 
      <div key={i} className="pickup-item">  
      <ListItem >
        <ListItemAvatar className='avatar'>
          <img alt="Remy Sharp" src={`https://drive.google.com/uc?export=view&id=${item.avatar}`} />
        </ListItemAvatar>
        <ListItemText 
        style={{fontSize: "100px",}}
          secondary={
            <React.Fragment>
              <h2 style={{color: 'var(--black)'}}>Type of waste: {item.type}</h2>
              <p>Quantity of waste: {item.quantity}</p>
              <p>Time of pickup: {item.Time}</p>
            </React.Fragment>
          }
        />
      </ListItem>
      </div>)
    }
  </>
}
// pickup date, time, quantity, type