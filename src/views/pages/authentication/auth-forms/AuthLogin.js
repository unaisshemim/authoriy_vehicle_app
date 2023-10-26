import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Typography,
  useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import MetaMask from 'assets/MetaMask.png';
import { useNavigate } from 'react-router-dom';

// project imports

import AnimateButton from 'ui-component/extended/AnimateButton';
import toast, { Toaster } from 'react-hot-toast';

import { publicRequest } from 'requestMethod';

// assets

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
  const navigate = useNavigate();

  const theme = useTheme();

  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state) => state.customization);

  const [address, setAddress] = useState(null);


  const metaHandler = async () => {
    console.log('request started');
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        setAddress(accounts[0]);

        localStorage.setItem('metamaskaddress', JSON.stringify(accounts[0]));
        signIn();
      } catch (error) {
        console.error(error);
      }
    } else {
      window.alert('no metamask is installed ');
      console.log('not detected');
    }
  };
console.log(localStorage.getItem('metamaskaddress'))
  const signIn = async () => {
    try {
      const response = await publicRequest.post('/authoritylogin', {
        metamaskaddress: JSON.parse(localStorage.getItem('metamaskaddress'))
      });
      console.log(response)
      localStorage.setItem('userdata', JSON.stringify(response.data));

      if (!response.data) {
        toast.error('No Account Found , Fill Email and Name to Create New ');
      } else {
        
        return navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
      if (error.code === 'ERR_NETWORK') {
        toast.error('Network issue');
      }
    }
  };
  useEffect(() => {


  }, [address]);

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Toaster />
        <Grid item xs={12}>
          <AnimateButton>
            <Button
              disableElevation
              fullWidth
              onClick={metaHandler}
              size="large"
              variant="outlined"
              sx={{
                color: 'grey.700',
                backgroundColor: theme.palette.grey[50],
                borderColor: theme.palette.grey[100]
              }}
            >
              <Box sx={{ mr: { xs: 1, sm: 2, width: 20 } }}>
                <img src={MetaMask} alt="google" width={30} height={30} style={{ marginRight: matchDownSM ? 8 : 16 }} />
              </Box>
              Sign in with Meta Mask
            </Button>
          </AnimateButton>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />

            <Button
              variant="outlined"
              sx={{
                cursor: 'unset',
                m: 2,
                py: 0.5,
                px: 7,
                borderColor: `${theme.palette.grey[100]} !important`,
                color: `${theme.palette.grey[900]}!important`,
                fontWeight: 500,
                borderRadius: `${customization.borderRadius}px`
              }}
              disableRipple
              disabled
            >
              OR
            </Button>

            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1">Sign Up</Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          email: '',
          name: ''
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          name: Yup.string().max(255).required('Name is required')
        })}
        onSubmit={async (values) => {
          setAddress(JSON.parse(localStorage.getItem('metamaskaddress')))
          if (address) {
            let submitValue = { ...values, metamaskaddress: address };

            try {
              const response = await publicRequest.post('/authoritysignup', submitValue);

              toast.success('Login Success');

              localStorage.setItem('userdata', JSON.stringify(response.data));
            
              navigate('/dashboard');
            } catch (error) {
              console.log(error);
            }
          } else {
            toast.error('Meta address not found');
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-login">Email Address </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Email Address "
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-login">Name</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type="text"
                value={values.name}
                onChange={handleChange}
                label="Name"
                name="name"
                inputProps={{}}
              />
            </FormControl>

            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
                  Sign in
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseLogin;
