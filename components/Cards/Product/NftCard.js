import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocaleLink from '../../Link';
import useStyles from './nft-card-style';

function ProductNft(props) {
  const { classes, cx } = useStyles();
  const {
    img,
    avatar,
    title,
    name,
    href,
    price,
    verified,
    small,
  } = props;

  return (
    <ButtonBase
      component={LocaleLink}
      draggable="false"
      className={classes.nftCard}
      to={href}
    >
      <Chip color="black" className={classes.price} label={`Floor: ${price} ETH`} />
      <span className={classes.figure}>
        <img src={img} alt="img" />
      </span>
      <span className={classes.property}>
        <Typography component="span" className={cx(classes.title, small ? classes.small : classes.big)}>
          {title}
        </Typography>
        <span className={classes.user}>
          <span className={classes.avatar}>
            <img src={avatar} alt="logo" />
          </span>
          <span className={classes.name}>
            {name}
          </span>
          {verified && <VerifiedIcon className={classes.verified} />}
        </span>
      </span>
    </ButtonBase>
  );
}

ProductNft.propTypes = {
  img: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  href: PropTypes.string,
  verified: PropTypes.bool,
  small: PropTypes.bool,
};

ProductNft.defaultProps = {
  href: '#',
  verified: false,
  small: false,
};

export default ProductNft;
