import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import StarIcon from '@mui/icons-material/Star';
import { useTranslation } from 'next-i18next';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import imgAPI from 'public/images/imgAPI';
import LocaleLink from '../../Link';
import useStyles from './product-card-style';

const avatars = [
  imgAPI.avatar[7],
  imgAPI.avatar[2],
  imgAPI.logos[4],
  imgAPI.avatar[4],
];

function ProductCard(props) {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');
  const theme = useTheme();

  const {
    img,
    title,
    desc,
    orientation,
    type,
    rating,
    price,
    href,
  } = props;

  return (
    <Card className={cx(classes.cardProduct, classes[orientation], classes[type])}>
      <ButtonBase component={LocaleLink} focusRipple to={href} className={classes.hiddenLink}>&nbsp;</ButtonBase>
      <div className={classes.head}>
        <AvatarGroup max={4}>
          {avatars.map((item, index) => (
            <Avatar className={classes.avatar} key={index.toString()} alt="avatar" src={item} />
          ))}
        </AvatarGroup>
        <Chip avatar={<FavoriteBorderIcon />} color="black" className={classes.like} label="125" />
      </div>
      <CardMedia
        className={classes.mediaProduct}
        image={img}
        title={title}
        component="figure"
      />
      <div className={classes.desc}>
        <CardContent className={classes.text}>
          <Typography noWrap gutterBottom variant="h6" className={classes.title} component="h2">
            {title}
          </Typography>
          <Typography className={classes.price}>
            {price > 0 && (
              <Fragment>
                {price}
                ETH
              </Fragment>
            )}
          </Typography>
        </CardContent>
        <div>
          <CardActions className={classes.property}>
            <p>
              {desc}
            </p>
            {rating > 0 ? (
              <div className={classes.rating}>
                <StarIcon />
                {rating}
              </div>
            ) : ''}
          </CardActions>
          <Button
            fullWidth
            component={LocaleLink}
            to={href}
            className={classes.button}
            variant="outlined"
            color={theme.palette.mode === 'dark' ? 'secondary' : 'primary'}
          >
            {t('btn_detail')}
          </Button>
        </div>
      </div>
    </Card>
  );
}

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  orientation: PropTypes.string,
  type: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  href: PropTypes.string,
};

ProductCard.defaultProps = {
  type: 'full', // available props: full, rounded, over, oval
  rating: 0,
  price: 0,
  orientation: 'portrait',
  href: '#',
};

export default ProductCard;
