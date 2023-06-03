import React, { ReactNode } from 'react';
import Button from '@mui/material/Button';
import { Box, ListItem, ListItemButton, ListItemText } from '@mui/material';

interface SectionButtonProps {
  id: string;
  children: ReactNode;
}

const PageNavigation: React.FC<SectionButtonProps> = ({ id, children }) => {
  return (
    <>
      <Box sx={{padding: '25px'}} id={id}>
        {children}
      </Box>
    </>
  );
};

export default PageNavigation;
