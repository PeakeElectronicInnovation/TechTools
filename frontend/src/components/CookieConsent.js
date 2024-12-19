import React, { useEffect, useState } from 'react';
import { Box, Button, Snackbar, Link } from '@mui/material';
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

const CookieConsent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setOpen(true);
      if (GA_MEASUREMENT_ID) {
        window['ga-disable-' + GA_MEASUREMENT_ID] = true;
      }
    } else if (consent === 'accepted' && GA_MEASUREMENT_ID) {
      window['ga-disable-' + GA_MEASUREMENT_ID] = false;
      ReactGA.initialize(GA_MEASUREMENT_ID);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setOpen(false);
    if (GA_MEASUREMENT_ID) {
      window['ga-disable-' + GA_MEASUREMENT_ID] = false;
      ReactGA.initialize(GA_MEASUREMENT_ID);
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setOpen(false);
    if (GA_MEASUREMENT_ID) {
      window['ga-disable-' + GA_MEASUREMENT_ID] = true;
    }
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      sx={{
        '& .MuiSnackbarContent-root': {
          maxWidth: '600px',
          backgroundColor: 'transparent',
          padding: 0,
          color: 'inherit'
        }
      }}
    >
      <Box
        sx={{
          p: 3,
          backgroundColor: 'background.paper',
          borderRadius: 1,
          boxShadow: 3,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          gap: 2,
          color: 'text.primary',
          border: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Box sx={{ flex: 1 }}>
          This website uses cookies and similar technologies to analyze traffic and improve your experience.
          See our{' '}
          <Link href="/privacy" color="primary" sx={{ textDecoration: 'underline' }}>
            Privacy Policy
          </Link>{' '}
          for more details.
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexShrink: 0 }}>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={handleDecline}
            sx={{ minWidth: '80px' }}
          >
            Decline
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleAccept}
            sx={{ minWidth: '80px' }}
          >
            Accept
          </Button>
        </Box>
      </Box>
    </Snackbar>
  );
};

export default CookieConsent;
