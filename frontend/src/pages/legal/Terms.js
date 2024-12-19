import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

function Terms() {
  return (
    <Container maxWidth="md">
      <Paper sx={{ p: 4, mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Terms of Service
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Acceptance of Terms
          </Typography>
          <Typography paragraph>
            By accessing and using Tech Tools, you accept and agree to be bound by the terms and provisions 
            of this agreement. If you do not agree to these terms, please do not use our services.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Use License
          </Typography>
          <Typography paragraph>
            Tech Tools grants you a personal, non-exclusive, non-transferable license to use our tools 
            for personal or professional purposes. All calculations and results are provided "as is" 
            without any warranty of accuracy.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Analytics and Tracking
          </Typography>
          <Typography paragraph>
            Tech Tools uses Google Analytics to understand how our services are used and to improve user experience. 
            By using our service, you agree to the collection and use of usage data as described in our Privacy Policy. 
            You can opt out of analytics tracking using methods described in our Privacy Policy.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Disclaimer
          </Typography>
          <Typography paragraph>
            The tools and calculations provided are for reference purposes only. Users should independently 
            verify all results. We are not responsible for any damages or losses resulting from the use 
            of our tools or services.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Privacy and Data Collection
          </Typography>
          <Typography paragraph>
            Your use of Tech Tools is also governed by our Privacy Policy, which describes how we collect,
            use, and protect your data. By using our services, you consent to the data practices described
            in our Privacy Policy.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Modifications
          </Typography>
          <Typography paragraph>
            We reserve the right to modify these terms at any time. Changes will be effective immediately 
            upon posting to this page. Your continued use of Tech Tools after any changes indicates your 
            acceptance of the modified terms.
          </Typography>
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary">
            Last updated: December 19, 2024
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Terms;
