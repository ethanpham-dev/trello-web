import { useColorScheme } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import LightModeIcon from '@mui/icons-material/LightMode.js'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined.js'
import SettingsBrightness from '@mui/icons-material/SettingsBrightness.js'


function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl size="small" sx={{ minWidth: '120px' }}>
      <InputLabel
        id="label-select-dark-light-mode"
        sx={{
          color : 'white',
          '&.Mui-focused':{ color: 'white' }
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          color : 'white',
          '.MuiOutlinedInput-notchedOutline': { borderColor : 'white' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor : 'white' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor : 'white' },
          '.MuiSvgIcon-root' : { color: 'white' }
        }}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize="small" />Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlinedIcon fontSize="small" />Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightness fontSize="small" />System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect