import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import { useText, useTextAlign } from 'theme/common';
import CommentForm from '../../Comment/Form';
import QuoteCard from '../../Cards/Testimonial/QuoteCard';
import Title from '../../Title';
import Item from '../../Comment/Item';
import useStyles from './blog-style';

function Article() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');

  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

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
        <div className={classes.content}>
          <Typography variant="h6" className={classes.categoryBlog}>
            Maecenas rutrum
          </Typography>
          <Title strictAlign text="Interdum et Malesuada Fames Curabitur Blandit" />
          <span className={text.caption}>June 19, 2020 by Oliver &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  12 min to read</span>
          <figure className={classes.imageBlog}>
            <img src={imgAPI.photosL[16]} alt="blog" />
          </figure>
          <p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
          <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          <strong>Heading</strong>
          <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <strong>Sub-heading</strong>
          <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Example code block Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo. Tortor mauris condimentum nibh, ut fermentum massa.</p>
          <strong>Sub-heading</strong>
          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <figure className={classes.imageBlog}>
            <img src={imgAPI.photosL[6]} alt="blog" />
          </figure>
          <ul className={classes.list}>
            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
            <li>Donec id elit non mi porta gravida at eget metus.</li>
            <li>Nulla vitae elit libero, a pharetra augue.</li>
          </ul>
          <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a  pharetra augue.</p>
          <ol>
            <li>Vestibulum id ligula porta felis euismod semper.</li>
            <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur  ridiculus mus.</li>
            <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
          </ol>
        </div>
      </article>
      <Box my={10}>
        <QuoteCard
          avatar={imgAPI.avatar[36]}
          text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
          name="Jena Doe"
          title="Client"
        />
      </Box>
      {!isDesktop && (
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

export default Article;
