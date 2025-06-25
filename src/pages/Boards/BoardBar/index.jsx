import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES={
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  px: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    backgroundColor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width : '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap : 2,
      px: 2,
      overflowX: 'auto',
      backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      borderBottom: '1px solid white',
      '&::-webkit-scrollbar-track': { m:2 }
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Ethan Pham"
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          onClick={() => {}}
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          onClick={() => {}}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon/>}
          sx={{
            color : 'white',
            borderColor : 'white',
            '&:hover' : { borderColor : 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            gap : '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { backgroundColor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title='Ethan'>
            <Avatar alt="Orm Korn" src="https://cdn-icons-png.flaticon.com/128/3906/3906577.png" />
          </Tooltip>
          <Tooltip title='Ormkorn'>
            <Avatar alt="Orm Korn" src="https://cdn-icons-png.flaticon.com/128/4867/4867496.png" />
          </Tooltip>
          <Tooltip title='aaa'>
            <Avatar alt="aaa" src="https://cdn-icons-png.flaticon.com/128/6989/6989083.png" />
          </Tooltip>
          <Tooltip title='Ormkorn'>
            <Avatar alt="Orm Korn" src="https://cdn-icons-png.flaticon.com/128/1326/1326405.png" />
          </Tooltip>
          <Tooltip title='Ormkorn'>
            <Avatar alt="Orm Korn" src="https://cdn-icons-png.flaticon.com/128/3940/3940403.png" />
          </Tooltip>
          <Tooltip title='Ormkorn'>
            <Avatar alt="Orm Korn" src="https://cdn-icons-png.flaticon.com/128/3940/3940403.png" />
          </Tooltip>
          <Tooltip title='Ormkorn'>
            <Avatar alt="Orm Korn" src="https://cdn-icons-png.flaticon.com/128/3940/3940403.png" />
          </Tooltip>
          <Tooltip title='Ormkorn'>
            <Avatar alt="Orm Korn" src="https://cdn-icons-png.flaticon.com/128/3940/3940403.png" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}
export default BoardBar