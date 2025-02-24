import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Countdown from 'react-countdown';
import ButtonBase from '@mui/material/ButtonBase';
import LocaleLink from '../../Link';
import useStyles from './countdown-card-style';

function ProductCard(props) {
  const { classes, cx } = useStyles();
  const {
    img, title, desc,
    like, bid, price,
    href, avatars, timeleft
  } = props;

  const Completionist = () => <strong>Expired</strong>;

  const renderer = ({
 days, hours, minutes, seconds, completed
}) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    }
      // Render a countdown
      return (
        <span>
          <span>
            <strong>{days}</strong>
            Days
          </span>
          <i><strong>:</strong></i>
          <span>
            <strong>{hours}</strong>
            Hours
          </span>
          <i><strong>:</strong></i>
          <span>
            <strong>{minutes}</strong>
            Minutes
          </span>
          <i><strong>:</strong></i>
          <span>
            <strong>{seconds}</strong>
            Seconds
          </span>
        </span>
      );
  };

  return (
    <Card className={cx(classes.cardProduct, classes.portrait, classes.over)}>
      <ButtonBase component={LocaleLink} draggable="false" focusRipple to={href} className={classes.hiddenLink}>&nbsp;</ButtonBase>
      <div className={classes.head}>
        <AvatarGroup max={4}>
          {avatars.map((item, index) => (
            <Avatar className={classes.avatar} key={index.toString()} alt="avatar" src={item} />
          ))}
        </AvatarGroup>
        <Chip color="black" className={classes.price} label={`${bid}+ Place Bid`} />
      </div>
      <CardMedia
        className={classes.mediaProduct}
        image={img}
        title={title}
        component="figure"
      >
        <span className={classes.countdown}>
          <span className={classes.time}>
            <Countdown date={Date.now() + timeleft} renderer={renderer} />
          </span>
        </span>
      </CardMedia>
      <div className={classes.desc}>
        <CardContent className={classes.text}>
          <Typography noWrap gutterBottom variant="h6" className={classes.title} component="h2">
            {title}
          </Typography>
          <Typography component="p">
            circulation:
            {' '}
            {desc}
          </Typography>
        </CardContent>
        <div>
          <CardActions className={classes.property}>
            {price > 0 && (
              <strong>
                {price}
                ETH
              </strong>
            )}
            {like > 0 ? (
              <div className={classes.like}>
                <i className="ion-ios-heart-outline" />
                {like}
              </div>
            ) : ''}
          </CardActions>
        </div>
      </div>
    </Card>
  );
}

ProductCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  bid: PropTypes.number.isRequired,
  avatars: PropTypes.array.isRequired,
  like: PropTypes.number,
  price: PropTypes.number,
  timeleft: PropTypes.number,
  href: PropTypes.string,
};

ProductCard.defaultProps = {
  like: 0,
  price: 0,
  href: '#',
  timeleft: 0,
};

export default ProductCard;
