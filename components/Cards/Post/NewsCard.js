import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import { useTranslation } from 'next-i18next';
import LocaleLink from '../../Link';
import useStyles from './news-card-style';

function NewsCard(props) {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');
  const {
    headline, title, img,
    orientation, type, date,
    href, fullWidth
  } = props;

  return (
    <Card
      className={cx(
        classes.newsCard,
        classes[orientation],
        classes[type],
        fullWidth && classes.fullWidth,
      )}
    >
      <div className={classes.figure}>
        <CardMedia className={classes.media} image={img} title="thumb" />
      </div>
      <div className={classes.properties}>
        <CardContent className={classes.desc}>
          <div className={classes.text}>
            <Typography variant="caption" className={classes.title}>{headline}</Typography>
            {date && (
              <Typography component="span" className={classes.date}>{date}</Typography>
            )}
            <Typography display="block" variant="h6">{title}</Typography>
          </div>
        </CardContent>
        <CardActions>
          {type === 'portrait' && <Box p={1} flexGrow={1} />}
          <Button component={LocaleLink} to={href} size="small" className={classes.btn}>
            {t('btn_read_more')}
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

NewsCard.propTypes = {
  headline: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  orientation: PropTypes.string,
  type: PropTypes.string,
  date: PropTypes.string,
  href: PropTypes.string,
  fullWidth: PropTypes.bool,
};

NewsCard.defaultProps = {
  orientation: 'portrait',
  href: '#',
  date: null,
  fullWidth: false,
  type: 'full', // available props: full, rounded, over, oval
};

export default NewsCard;
