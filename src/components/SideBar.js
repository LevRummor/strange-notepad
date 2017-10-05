import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import style from './Styles.js'
import savedNotes from './SavedNotes'


export default class SideDrawer extends Component{

    showNotes = () => {
        console.log(savedNotes)
    }

      render() {
        return(
            <Drawer
                open={this.props.isOpened}
                docked={true}
                width={350}
                containerStyle={style.drawer}
                containerClassName='drawer-style'
            >
            <MenuItem
            style={{
                'color':'#f3f3f3',
                'fontWeight': 'bold',
                'textAlign':'center',
                'fontFamily':'Raleway',
                'backgroundColor': '#111',
                'paddingTop': '5px'
                }}
            >Saved Notes:</MenuItem>
            <MenuItem className='list-note-items' style={style.menuItem}><p>First</p></MenuItem>
            <MenuItem className='list-note-items' style={style.menuItem}><p>Second</p></MenuItem>
            <MenuItem className='list-note-items' style={style.menuItem}><p>Third</p></MenuItem>
            <MenuItem>
            </MenuItem>
            </Drawer>
            )
        }
    }