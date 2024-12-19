import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

function Privacy() {
  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Privacy Policy
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Data Collection
          </Typography>
          <Typography paragraph>
            Tech Tools is designed with privacy in mind. We use Google Analytics 4 to understand how visitors use our website
            and improve our services. Google Analytics collects information such as:
          </Typography>
          <Typography component="ul" sx={{ pl: 3 }}>
            <li>Pages you visit and how long you spend on them</li>
            <li>The website or source that referred you to our site</li>
            <li>Technical information like your browser type and operating system</li>
            <li>General location data (city/country level)</li>
          </Typography>
          <Typography paragraph sx={{ mt: 2 }}>
            This data is processed in a way that does not directly identify individuals. We do not collect any personal
            information unless explicitly provided by you.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Local Storage
          </Typography>
          <Typography paragraph>
            Some tools may use local storage to save your preferences or recent calculations. This data 
            remains on your device and is never transmitted to our servers.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Third-Party Services
          </Typography>
          <Typography paragraph>
            We use Google Analytics 4 (GA4) to analyze website usage. GA4 may use cookies and similar technologies
            to collect and process data about your site usage. To learn more about how Google processes your data,
            please visit Google's Privacy & Terms site at https://policies.google.com/technologies/partner-sites.
          </Typography>
          <Typography paragraph>
            You can opt-out of Google Analytics tracking by:
          </Typography>
          <Typography component="ul" sx={{ pl: 3 }}>
            <li>Using the Google Analytics Opt-out Browser Add-on</li>
            <li>Enabling "Do Not Track" in your browser settings</li>
            <li>Disabling cookies in your browser</li>
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Data Retention
          </Typography>
          <Typography paragraph>
            Google Analytics data is retained for 14 months by default. After this period, individual user data is 
            automatically deleted.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Updates to Privacy Policy
          </Typography>
          <Typography paragraph>
            This privacy policy may be updated occasionally. Any changes will be reflected on this page 
            with an updated revision date. Last updated: December 19, 2024.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Privacy;
