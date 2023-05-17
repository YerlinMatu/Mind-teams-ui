import * as React from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
  color?: string;
  children?: React.ReactNode;
}

export default function Title({ color = '#d92e3d', children }: TitleProps) {
  return (
    <Typography component="h2" variant="h6" color={color} gutterBottom>
      {children}
    </Typography>
  );
}