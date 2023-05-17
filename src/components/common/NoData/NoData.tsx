import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Icon from '@mui/icons-material/Block';

const NoData = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Icon sx={{ fontSize: 80, mt: 12 }} color="secondary"/>
      <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
        No records were found.
      </Typography>
    </Box>
  );
};

export default NoData;