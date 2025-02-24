import React, { useState } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import Title from '../../Title';
import useStyles from './merchants-style';

function Merchants() {
  const { classes } = useStyles();

  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { t } = useTranslation('common');

  const logos1 = [
    imgAPI.logos[1],
    imgAPI.logos[2],
    imgAPI.logos[3],
    imgAPI.logos[4],
    imgAPI.logos[5],
    imgAPI.logos[6],
    imgAPI.logos[7],
    imgAPI.logos[8],
    imgAPI.logos[9],
    imgAPI.logos[10],
    imgAPI.logos[11],
    imgAPI.logos[12],
  ];
  const logos2 = [
    imgAPI.logos[13],
    imgAPI.logos[14],
    imgAPI.logos[15],
    imgAPI.logos[16],
    imgAPI.logos[17],
    imgAPI.logos[18],
    imgAPI.logos[19],
    imgAPI.logos[20],
    imgAPI.logos[21],
    imgAPI.logos[22],
    imgAPI.logos[23],
    imgAPI.logos[24],
  ];
  const logos3 = [
    imgAPI.logos[25],
    imgAPI.logos[26],
    imgAPI.logos[27],
    imgAPI.logos[28],
    imgAPI.logos[29],
    imgAPI.logos[30],
    imgAPI.logos[31],
    imgAPI.logos[32],
    imgAPI.logos[33],
    imgAPI.logos[34],
    imgAPI.logos[35],
    imgAPI.logos[36],
  ];

  return (
    <div className={classes.root}>
      <Container>
        <Title
          text={t('fintech.title_partner')}
          align="center"
        />
        <div className={classes.tab}>
          <Box p={{ sm: 3 }}>
            <Grid container justifyContent="center">
              <Tabs
                value={value}
                onChange={handleChange}
                variant={isMobile ? 'scrollable' : 'fullWidth'}
                scrollButtons={isMobile}
                centered={!isMobile}
                classes={{
                  indicator: classes.indicator
                }}
              >
                <Tab classes={{ root: classes.tabLabel }} label="Online" />
                <Tab classes={{ root: classes.tabLabel }} label="Offline" />
                <Tab classes={{ root: classes.tabLabel }} label="Channel" />
              </Tabs>
              <Grid item md={10} xs={12}>
                <div className={classes.tabContent}>
                  {value === 0 && (
                    <section>
                      <Grid container spacing={isMobile ? 2 : 4}>
                        {logos1.map((logo, index) => (
                          <Grid
                            item
                            key={index.toString()}
                            sm={3}
                            xs={4}
                          >
                            <div className={classes.imgLogo}>
                              <img src={logo} alt={'logo' + index} />
                            </div>
                          </Grid>
                        ))}
                      </Grid>
                    </section>
                  )}
                  {value === 1 && (
                    <section>
                      <Grid container spacing={isMobile ? 2 : 4}>
                        {logos2.map((logo, index) => (
                          <Grid
                            item
                            key={index.toString()}
                            sm={3}
                            xs={4}
                          >
                            <div className={classes.imgLogo}>
                              <img src={logo} alt={'logo' + index} />
                            </div>
                          </Grid>
                        ))}
                      </Grid>
                    </section>
                  )}
                  {value === 2 && (
                    <section>
                      <Grid container spacing={isMobile ? 2 : 4}>
                        {logos3.map((logo, index) => (
                          <Grid
                            item
                            key={index.toString()}
                            sm={3}
                            xs={4}
                          >
                            <div className={classes.imgLogo}>
                              <img src={logo} alt={'logo' + index} />
                            </div>
                          </Grid>
                        ))}
                      </Grid>
                    </section>
                  )}
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
    </div>
  );
}

Merchants.propTypes = {

};

export default Merchants;
