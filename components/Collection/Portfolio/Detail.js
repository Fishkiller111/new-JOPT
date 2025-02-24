import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import CountUp from 'react-countup';
import CodeIcon from '@mui/icons-material/Code';
import { useTranslation } from 'next-i18next';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import imgAPI from 'public/images/imgAPI';
import { useText, useTextAlign, useTextGradient } from 'theme/common';
import CommentForm from '../../Comment/Form';
import QuoteCard from '../../Cards/Testimonial/QuoteCard';
import Item from '../../Comment/Item';
import MiniGallery from './MiniGallery';
import useStyles from './detail-style';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink offset={100} to={props.to} {...props} />; // eslint-disable-line
});

const comments = [{
  name: 'John Doe',
  avatar: '/images/avatars/pp_boy4.svg',
  date: '13 Jan 2020',
  comment:
    'Maecenas nisl libero, id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
},
{
  name: 'John Doe',
  avatar: '/images/avatars/pp_boy4.svg',
  date: '13 Jan 2020',
  comment:
    'Maecenas nisl libero, id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
},
{
  name: 'John Doe',
  avatar: '/images/avatars/pp_boy4.svg',
  date: '13 Jan 2020',
  comment:
    'Maecenas nisl libero, id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
},
{
  name: 'John Doe',
  avatar: '/images/avatars/pp_boy4.svg',
  date: '13 Jan 2020',
  comment:
    'Maecenas nisl libero, id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus. In non erat et ipsum molestie porta sit amet ut felis. Vestibulum a massa vestibulum, gravida odio id, fringilla ipsum.'
}];

function Detail() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { classes: gradient } = useTextGradient();
  const { t } = useTranslation('common');

  const [play, setPlay] = useState(false);
  const [value, setValue] = useState('summary');

  const handleChange = (event, category) => {
    setValue(category);
  };

  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const countup = (val, decimals, isPlay) => (
    <span>
      {isPlay ? <CountUp decimals={decimals} end={val} /> : 0}
    </span>
  );
  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 200);
    }
  };

  return (
    <div className={classes.root}>
      <article className={classes.article}>
        <section className={classes.socmedShare}>
          <div className={classes.btnArea}>
            <IconButton>
              <i className={cx('ion-logo-linkedin', classes.indigoBtn)} />
            </IconButton>
            <IconButton>
              <i className={cx('ion-logo-pinterest', classes.redBtn)} />
            </IconButton>
            <IconButton>
              <i className={cx('ion-logo-facebook', classes.blueBtn)} />
            </IconButton>
            <IconButton>
              <i className={cx('ion-logo-twitter', classes.cyanBtn)} />
            </IconButton>
            <IconButton>
              <i className="ion-ios-mail" />
            </IconButton>
            <IconButton>
              <i className="ion-md-link" />
            </IconButton>
          </div>
          <Typography variant="h6">
            Share
          </Typography>
        </section>
        <Container className={classes.content}>
          <Box sx={{ display: 'flex', mb: 5 }}>
            <Tabs
              centered={!isMobile}
              variant={isMobile ? 'scrollable' : 'fullWidth'}
              scrollButtons={isMobile}
              className={classes.tabs}
              value={value}
              onChange={handleChange}
              classes={{
                indicator: classes.indicator
              }}
            >
              <Tab value="summary" component={LinkBtn} href="#summary" classes={{ root: classes.tabLabel }} label="Summary" />
              <Tab value="gallery" component={LinkBtn} href="#gallery" classes={{ root: classes.tabLabel }} label="Gallery" />
              <Tab value="specs" component={LinkBtn} href="#specs" classes={{ root: classes.tabLabel }} label="Specs" />
            </Tabs>
            {isDesktop && (
              <Button size="large" sx={{ ml: 1 }} variant="contained" color="primaryLight">{t('btn_visit')}</Button>
            )}
          </Box>
          <div id="summary">
            <Typography component="h3" className={text.title2}>{t('login_create')}</Typography>
            <Box my={2}>
              <p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </Box>
            <Box my={3}>
              <Typography component="h5" sx={{ mb: 1, display: 'flex', alignItems: 'center' }} className={cx(text.subtitle, text.textPrimary)}>
                <FullscreenIcon fontSize="large" className={classes.icon} sx={{ mr: 1 }} />
                {t('login_remember')}
              </Typography>
              <p>Nam suscipit lacus pulvinar elementum condimentum. Cras tristique rhoncus placerat. Sed eros nulla, porta vel porttitor nec, ultrices in ligula. Nam viverra urna in feugiat ultricies.</p>
            </Box>
            <Box my={3}>
              <Typography component="h5" sx={{ mb: 1, display: 'flex', alignItems: 'center' }} className={cx(text.subtitle, text.textPrimary)}>
                <ArchitectureIcon fontSize="large" sx={{ mr: 1 }} />
                {t('continue')}
              </Typography>
              <p>Nam suscipit lacus pulvinar elementum condimentum. Cras tristique rhoncus placerat. Sed eros nulla, porta vel porttitor nec, ultrices in ligula. Nam viverra urna in feugiat ultricies.</p>
            </Box>
            <Box my={3}>
              <Typography component="h5" sx={{ mb: 1, display: 'flex', alignItems: 'center' }} className={cx(text.subtitle, text.textPrimary)}>
                <CodeIcon fontSize="large" sx={{ mr: 1 }} />
                {t('form_send')}
              </Typography>
              <p>Nam suscipit lacus pulvinar elementum condimentum. Cras tristique rhoncus placerat. Sed eros nulla, porta vel porttitor nec, ultrices in ligula. Nam viverra urna in feugiat ultricies.</p>
            </Box>
          </div>
        </Container>
      </article>
      <Box my={5}>
        <QuoteCard
          avatar={imgAPI.avatar[36]}
          text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
          name="Jena Doe"
          title="Client"
        />
      </Box>
      <Divider className={classes.divider} />
      <div id="gallery">
        <MiniGallery />
      </div>
      <Divider className={classes.divider} />
      <ScrollAnimation animateOnce animateIn="fadeIn" offset={-100} afterAnimatedIn={handlePlay}>
        <Grid id="specs" container spacing={isMobile ? 2 : 6} className={classes.counter}>
          <Grid item sm={6} xs={5}>
            <Box sx={{ display: { sm: 'flex' }, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
              <Typography component="h2" className={theme.palette.mode === 'dark' ? gradient.tripleLight : gradient.tripleDark}>
                {countup(20, 0, play)}
              </Typography>
              <Typography component="p" className={text.subtitle2}>
                Grid
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={6} xs={5}>
            <Box sx={{ display: { sm: 'flex' }, alignItems: 'flex-end' }}>
              <Typography component="h2" className={theme.palette.mode === 'dark' ? gradient.tripleLight : gradient.tripleDark}>
                {countup(1.8, 1, play)}
              </Typography>
              <Typography component="p" className={text.subtitle2}>
                x Faster
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={6} xs={5}>
            <Box sx={{ display: { sm: 'flex' }, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
              <Typography component="h2" className={theme.palette.mode === 'dark' ? gradient.tripleLight : gradient.tripleDark}>
                {countup(170, 0, play)}
              </Typography>
              <Typography component="p" className={text.subtitle2}>
                Colors
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={6} xs={5}>
            <Box sx={{ display: { sm: 'flex' }, alignItems: 'flex-end' }}>
              <Typography component="h2" className={theme.palette.mode === 'dark' ? gradient.tripleLight : gradient.tripleDark}>
                {countup(2.5, 1, play)}
              </Typography>
              <Typography component="p" className={text.subtitle2}>
                x Thinner
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </ScrollAnimation>
      <Divider className={classes.divider} />
      {isMobile && (
        <section className={classes.shareMobile}>
          <Typography className={align.textCenter} variant="h6">
            {t('blog_share')}
          </Typography>
          <div className={classes.btnArea}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }} my={3}>
              <IconButton>
                <i className={cx('ion-logo-linkedin', classes.indigoBtn)} />
              </IconButton>
              <IconButton>
                <i className={cx('ion-logo-pinterest', classes.redBtn)} />
              </IconButton>
              <IconButton>
                <i className={cx('ion-logo-facebook', classes.blueBtn)} />
              </IconButton>
              <IconButton>
                <i className={cx('ion-logo-twitter', classes.cyanBtn)} />
              </IconButton>
              <IconButton>
                <i className="ion-ios-mail" />
              </IconButton>
              <IconButton>
                <i className="ion-md-link" />
              </IconButton>
            </Box>
          </div>
        </section>
      )}
      <section className={classes.comment}>
        <Typography className={align.textCenter} variant="h6">
          {t('blog_write')}
          &nbsp;(4)
        </Typography>
        <Box mt={3}>
          <CommentForm avatar={imgAPI.avatar[6]} />
        </Box>
        <List component="div">
          {comments.map((item, index) => (
            <Item
              key={index.toString()}
              avatar={item.avatar}
              name={item.name}
              date={item.date}
              comment={item.comment}
              last={index >= comments.length - 1}
            />
          ))}
        </List>
      </section>
    </div>
  );
}

export default Detail;
