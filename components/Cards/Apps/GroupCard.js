import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useText } from 'theme/common';
import LocaleLink from '../../Link';
import useStyles from './group-card-style';

function GroupCard(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const {
    title, desc, color,
    img, items, type,
    itemColor, href, darken,
    align,
  } = props;

  const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <Paper className={cx(classes.card, classes[color], img ? classes.withImg : '')}>
      <ButtonBase component={LocaleLink} to={href}>&nbsp;</ButtonBase>
      <div className={cx(classes.content, classes[type])}>
        <div className={classes.text}>
          <Typography variant="h3">{title}</Typography>
          <Typography>{desc}</Typography>
        </div>
        {img && (
          <img className={classes[align]} src={img} alt="illustration" />
        )}
        <div className={cx(classes.group, classes[align])}>
          <div className={cx(classes.items, items.length > 4 && classes.medium, (items.length < 3 && isDesktop) && classes.fullWidth)}>
            {items.map((item, index) => (
              <div key={index.toString()} className={cx(classes.item, darken && classes.darken)}>
                <i className={cx('mdi', item.icon, text[itemColor])} />
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Paper>
  );
}

GroupCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  darken: PropTypes.bool,
  img: PropTypes.string,
  align: PropTypes.string,
  color: PropTypes.string,
  itemColor: PropTypes.string,
  type: PropTypes.string,
  href: PropTypes.string,
};

GroupCard.defaultProps = {
  img: null,
  darken: false,
  align: 'left',
  color: 'primary',
  itemColor: 'white',
  type: 'compact',
  href: '#',
};

export default GroupCard;
