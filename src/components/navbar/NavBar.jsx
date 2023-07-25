import "./navBar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const NavBar = () => {
  return (
    <div className="navBar">
        <div className="left">
            <Link to="/" style={{textDecoration:"none"}}>
            <span>SociaLink</span>
            <HomeOutlinedIcon/>
            <DarkModeOutlinedIcon/>
            <GridViewOutlinedIcon/>
            </Link>
        </div>
        <div className="right"></div>
    </div>
  )
}

export default NavBar