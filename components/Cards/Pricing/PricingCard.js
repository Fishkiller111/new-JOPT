import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { useText, useTextAlign } from 'theme/common';
import LocaleLink from '../../Link';
import useStyles from './pricing-card-style';

function PricingCard(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const {
    color, title, price,
    description, features, per,
    buttonText, href
  } = props;

  return (
    <div className={cx(classes.pricingCard, classes[color])}>
      <Card>
        <CardHeader
          title={title}
          titleTypographyProps={{ align: 'center' }}
          subheaderTypographyProps={{ align: 'center' }}
          className={classes.cardHeader}
        />
        <div className={classes.cardPricing}>
          <h2 className={text.title}>
            $
            {price}
          </h2>
          {per !== '' && (
            <Typography variant="h6">
              /
              {per}
            </Typography>
          )}
        </div>
        <Typography className={cx(align.textCenter, text.medium)}>{description}</Typography>
        <CardContent className={classes.cardContent}>
          <ul>
            {features.map((line, index) => (
              <Typography component="li" variant="subtitle1" align="center" key={index.toString()}>
                {line}
              </Typography>
            ))}
          </ul>
        </CardContent>
        <CardActions className={classes.btnArea}>
          <Button component={LocaleLink} color="black" to={href} size="large" variant="contained">
            {buttonText}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

PricingCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
  per: PropTypes.string,
  href: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
};

PricingCard.defaultProps = {
  color: 'primary',
  per: '',
  href: '#',
};

export default PricingCard;
