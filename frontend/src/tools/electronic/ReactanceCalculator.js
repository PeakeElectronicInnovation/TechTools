import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

const ReactanceCalculator = () => {
  const [componentType, setComponentType] = useState('inductor');
  const [values, setValues] = useState({
    inductance: '',
    capacitance: '',
    frequency: '',
  });
  const [units, setUnits] = useState({
    inductance: 'u',
    capacitance: 'u',
    frequency: 'k',
  });
  const [results, setResults] = useState(null);

  const handleComponentTypeChange = (event, newType) => {
    if (newType !== null) {
      setComponentType(newType);
    }
  };

  const handleInputChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleUnitChange = (event) => {
    setUnits({
      ...units,
      [event.target.name]: event.target.value,
    });
  };

  const calculate = () => {
    const getFrequencyInHz = () => {
      const f = parseFloat(values.frequency);
      switch (units.frequency) {
        case 'k': return f * 1000;
        case 'M': return f * 1000000;
        default: return f;
      }
    };

    const f = getFrequencyInHz();
    const omega = 2 * Math.PI * f;

    if (componentType === 'inductor') {
      // Convert inductance to henries
      const L = parseFloat(values.inductance) * (units.inductance === 'u' ? 1e-6 : 1e-3);
      const XL = omega * L;
      setResults({
        reactance: XL,
        impedanceTriangle: {
          magnitude: XL,
          phase: 90, // Inductor current lags voltage by 90°
        },
      });
    } else {
      // Convert capacitance to farads
      const C = parseFloat(values.capacitance) * (units.capacitance === 'u' ? 1e-6 : 1e-9);
      const XC = 1 / (omega * C);
      setResults({
        reactance: XC,
        impedanceTriangle: {
          magnitude: XC,
          phase: -90, // Capacitor current leads voltage by 90°
        },
      });
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Reactance Calculator
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph>
          Calculate the reactance of inductors and capacitors at specific frequencies
        </Typography>

        <Box sx={{ mb: 4 }}>
          <ToggleButtonGroup
            value={componentType}
            exclusive
            onChange={handleComponentTypeChange}
            fullWidth
          >
            <ToggleButton value="inductor">Inductor</ToggleButton>
            <ToggleButton value="capacitor">Capacitor</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Grid container spacing={3}>
          {componentType === 'inductor' ? (
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  fullWidth
                  label="Inductance"
                  name="inductance"
                  type="number"
                  value={values.inductance}
                  onChange={handleInputChange}
                />
                <FormControl sx={{ minWidth: 100 }}>
                  <InputLabel>Unit</InputLabel>
                  <Select
                    value={units.inductance}
                    label="Unit"
                    name="inductance"
                    onChange={handleUnitChange}
                  >
                    <MenuItem value="u">µH</MenuItem>
                    <MenuItem value="m">mH</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          ) : (
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  fullWidth
                  label="Capacitance"
                  name="capacitance"
                  type="number"
                  value={values.capacitance}
                  onChange={handleInputChange}
                />
                <FormControl sx={{ minWidth: 100 }}>
                  <InputLabel>Unit</InputLabel>
                  <Select
                    value={units.capacitance}
                    label="Unit"
                    name="capacitance"
                    onChange={handleUnitChange}
                  >
                    <MenuItem value="n">nF</MenuItem>
                    <MenuItem value="u">µF</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          )}
          
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                fullWidth
                label="Frequency"
                name="frequency"
                type="number"
                value={values.frequency}
                onChange={handleInputChange}
              />
              <FormControl sx={{ minWidth: 100 }}>
                <InputLabel>Unit</InputLabel>
                <Select
                  value={units.frequency}
                  label="Unit"
                  name="frequency"
                  onChange={handleUnitChange}
                >
                  <MenuItem value="Hz">Hz</MenuItem>
                  <MenuItem value="k">kHz</MenuItem>
                  <MenuItem value="M">MHz</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3, mb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={calculate}
            fullWidth
          >
            Calculate
          </Button>
        </Box>

        {results && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Results:
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Typography variant="subtitle1">
                    Reactance: {Math.abs(results.reactance).toFixed(2)} Ω
                  </Typography>
                  <Typography variant="subtitle1">
                    Phase Angle: {results.impedanceTriangle.phase}°
                    {componentType === 'inductor' 
                      ? ' (current lags voltage)' 
                      : ' (current leads voltage)'}
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Impedance Properties:
                </Typography>
                <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
                  <Typography>
                    • The reactance is purely imaginary
                  </Typography>
                  <Typography>
                    • {componentType === 'inductor' 
                        ? 'XL increases with frequency' 
                        : 'XC decreases with frequency'}
                  </Typography>
                  <Typography>
                    • No power is dissipated (only stored and returned)
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default ReactanceCalculator;