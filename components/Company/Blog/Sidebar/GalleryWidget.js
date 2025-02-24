import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import Paper from '../../../Cards/Paper';
import useStyles from '../blog-style';

function GalleryWidget() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  const imgData = [{
    src: imgAPI.photosS[3]
  },
  {
    src: imgAPI.photosS[5]
  },
  {
    src: imgAPI.photosS[9]
  },
  {
    src: imgAPI.photosS[10]
  }];

  return (
    <Paper title={t('blog_album')} icon="ion-ios-images" color="transparent" desc="">
      <div>
        <div className={classes.albumRoot}>
          <ImageList rowHeight={180} className={classes.gridList}>
            {
              imgData.map((tile, index) => {
                if (index >= 4) {
                  return false;
                }
                return (
                  <ImageListItem className={classes.img} key={index.toString()} sx={{ mx: 0.5, my: 1 }}>
                    <img src={tile.src} alt="thumb" />
                    <ImageListItemBar
                      title={tile.title}
                      subtitle={(
                        <span>
                          by:&nbsp;
                          John Doe
                        </span>
                      )}
                      actionIcon={(
                        <IconButton className={classes.icon} size="large">
                          <InfoIcon />
                        </IconButton>
                      )}
                    />
                  </ImageListItem>
                );
              })
            }
          </ImageList>
        </div>
        <Grid container justifyContent="center">
          <Button fullWidth color="primaryLight">
            See All
          </Button>
        </Grid>
      </div>
    </Paper>
  );
}

export default GalleryWidget;
