import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import style from './Styles'

import SideDrawer from './SideBar'
import savedNotes from './SavedNotes'

//-------------------LOGIN---------------------------
class Login extends Component {
  static muiName = 'FlatButton'

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}
const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
)
Logged.muiName = 'IconMenu'
//----------x--------LOGIN---------------------------











//------------------------APP BAR--------------------
class AppBarComposition extends Component {
  constructor(props){
    super(props)
    this.state = {
      logged: false,
      open: false
    }
  }

  handleChange = (event, logged) => {this.setState({logged: logged})}
  handleToggle = () => {this.setState({open: !this.state.open})  }
  handleClose = () => this.setState({open: false})

  render() {
    return (
      <div>
        <AppBar
          title="Notepad"
          onLeftIconButtonTouchTap={() => this.handleToggle()}
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
          style={style.appBar}
          titleStyle={style.appBarText}
        />

        <SideDrawer isOpened={this.state.open}/>

        <Notes>
        </Notes>

      </div>
    );
  }
}
//---------x-----------APP BAR----------------------







//----------------------NOTES-----------------------
class Notes extends Component{
  constructor(props){
      super(props)
      this.state = {
          note: ''
      }
  }

  handleChange = (e) => {
      this.setState({
          note: e.target.value
      })
  }
  addElement = () => {
     savedNotes.push(this.state.note)
  }

  render(){

      return(
          <div className='notes'>
              <h1>Note: {this.state.note}</h1>
              <h1>Notes: {savedNotes.toString()}</h1>
              <h1>{savedNotes}</h1>
              <input type='text' value={this.state.note} onChange={ (e) => this.handleChange(e) }/>

              <button onClick={ () => this.addElement() }>Add</button>
          </div>
      )
  }
}
//--------x------------NOTES---------------------






export default AppBarComposition
