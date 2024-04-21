import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IInfoCardProps from '../intefaces/IInfoCardProps';

// https://mui.com/material-ui/react-card/

const InfoCard = ({heading, data}: IInfoCardProps) => {
  const card = (
    <CardContent>
      <Typography variant="h6" component="div">
        {heading}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {data}
      </Typography>
      
    </CardContent>
  );
  return (
    <Box sx={{ height: '100%' }}>
      <Card variant="outlined" sx={{ borderRadius: '0.5rem' }}>{card}</Card>
    </Box>
  );
};

export default InfoCard;