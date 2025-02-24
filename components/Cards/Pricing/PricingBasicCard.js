import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocaleLink from '../../Link';
import useStyles from './pricing-basic-card-style';

export default function Pricing(props) {
  const { classes, cx } = useStyles();
  const {
    title,
    price,
    description,
    info,
    buttonText,
    per,
    href,
  } = props;
  const setType = cardType => {
    switch (cardType) {
      case 'Free':
        return classes.basic;
      case 'Best Value':
        return classes.value;
      default:
        return '';
    }
  };

  const setBtnColor = cardType => {
    switch (cardType) {
      case 'Free':
        return 'invert';
      case 'Best Value':
        return 'primary';
      default:
        return 'black';
    }
  };

  return (
    <Paper className={cx(classes.pricing, setType(title))}>
      <div className={cx(classes.title, title === 'Free' && classes.basic)}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">
          <span>$</span>
          {price}
          <em>
            {' '}
            /
            {per}
          </em>
        </Typography>
      </div>
      <ul>
        {description.map((item, index) => (
          <li key={index.toString()}>{item}</li>
        ))}
      </ul>
      <div className={classes.btnArea}>
        <Typography display="block" className={classes.desc}>{info}</Typography>
        <Button
          component={LocaleLink}
          variant={title === 'Free' ? 'outlined' : 'contained'}
          color={setBtnColor(title)}
          className={classes.button}
          size="large"
          to={href}
        >
          {buttonText}
        </Button>
      </div>
    </Paper>
  );
}

Pricing.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  per: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  info: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  href: PropTypes.string,
};

Pricing.defaultProps = {
  buttonText: '',
  href: '#'
};
