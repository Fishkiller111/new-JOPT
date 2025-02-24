import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import PhotoLibrary from '@mui/icons-material/PhotoLibrary';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocaleLink from '../../Link';
import useStyles from './profile-card-style';

function ProfileCard(props) {
  const { classes, cx } = useStyles();
  const {
    number, name, verified,
    avatar, sales,
    change, volume, href,
    items, first,
  } = props;

  return (
    <Card className={cx(classes.profileCard, first ? classes.first : '')}>
      <ButtonBase component={LocaleLink} to={href} />
      <div className={classes.inner}>
        <Avatar
          alt="avatar"
          src={avatar}
          className={classes.avatar}
        />
        <div className={classes.properties}>
          <Typography variant="h5" className={classes.title}>
            {name}
            {verified && <VerifiedIcon className={classes.verified} />}
          </Typography>
          <CardActions className={classes.action}>
            <div>
              <Typography>
                <PhotoLibrary className={classes.iconSecondary} />
                <strong>
                  {items}
                  {' '}
                  Items
                </strong>
              </Typography>
              <Typography>
                <ShoppingCartIcon className={classes.iconPrimary} />
                <strong>
                  {sales}
                  {' '}
                  Sales
                </strong>
              </Typography>
            </div>
            {(change || volume) && (
              <div className={classes.stats}>
                <Typography>
                  Change: +
                  <Typography component="span" color="lime">
                    {change}
                    %
                  </Typography>
                </Typography>
                <Typography>
                  Volume:
                  {' '}
                  <Typography component="span">
                    {volume}
                    {' '}
                    ETH
                  </Typography>
                </Typography>
              </div>
            )}
          </CardActions>
          {number && (
            <Typography component="h2">
              <i>
                #
                {number}
              </i>
            </Typography>
          )}
        </div>
      </div>
    </Card>
  );
}

ProfileCard.propTypes = {
  number: PropTypes.number,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,
  sales: PropTypes.number.isRequired,
  change: PropTypes.number,
  volume: PropTypes.number,
  verified: PropTypes.bool,
  href: PropTypes.string,
  first: PropTypes.bool
};

ProfileCard.defaultProps = {
  number: null,
  change: null,
  volume: null,
  verified: false,
  first: false,
  href: '#'
};

export default ProfileCard;
