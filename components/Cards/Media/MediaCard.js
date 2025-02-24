import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ButtonBase from '@mui/material/ButtonBase';
import useStyles from './media-card-style';

function MediaCard(props) {
  const { classes, cx } = useStyles();
  const {
    thumb,
    title,
    orientation,
    type,
    action,
    href,
    plain,
  } = props;

  return (
    <Card className={cx(classes.mediaCard, classes[orientation], classes[type])}>
      <CardContent>
        {type === 'photo' && <ButtonBase focusRipple href={href} className={classes.coverLink}>&nbsp;</ButtonBase> }
        <figure className={plain ? classes.plain : ''}>
          <img src={thumb} alt="cover" />
        </figure>
        {!plain && (
          <div className={classes.property}>
            {type === 'video' && (
              <IconButton className={classes.playBtn} onClick={action} size="large">
                <span className="ion-ios-play-outline" />
              </IconButton>
            )}
            {title && (
              <Typography className={classes.mediaTitle} variant="p">
                {title}
              </Typography>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

MediaCard.propTypes = {
  thumb: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.string,
  plain: PropTypes.bool,
  orientation: PropTypes.string,
  href: PropTypes.string,
  action: PropTypes.func,
};

MediaCard.defaultProps = {
  title: null,
  type: 'video',
  plain: false,
  orientation: 'portrait',
  href: '#',
  action: () => {}
};

export default MediaCard;
