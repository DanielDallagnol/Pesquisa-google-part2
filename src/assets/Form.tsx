import { Divider, InputBase, Paper } from '@mui/material';
import KeyboardIcon from './KeyboardIcon';
import SearchIcon from './SearchIcon';
import MicIcon from './MicIcon';
import CameraIcon from './CameraIcon';


function CriaForm(){
  return(
    <>
<Paper component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 520, borderRadius:'50px',gap:'0.1vw'  }}
    >



      
    <SearchIcon />
      
    <InputBase
        sx={{ ml: 1, flex: 1}}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
    />
      
    <KeyboardIcon />

    <Divider sx={{ height: 28, m: 0.7 }} orientation="vertical" />

    <MicIcon />

    <Divider sx={{ height: 28, m: 0.7 }} orientation="vertical" />

    <CameraIcon />


  </Paper>
  </>
  )
  
}

export default CriaForm