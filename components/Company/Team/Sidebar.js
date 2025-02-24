import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Avatar from '@mui/material/Avatar';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useTranslation } from 'next-i18next';
import imgAPI from 'public/images/imgAPI';
import { useText, useBackground } from 'theme/common';
import useStyles from './sidebar-style';

const people = [{
  img: imgAPI.avatar[6],
  name: 'John Doe',
  title: '@john'
},
{
  img: imgAPI.avatar[1],
  name: 'Jean Doe',
  title: '@doe_jead'
},
{
  img: imgAPI.avatar[7],
  name: 'Jim Doe',
  title: '@jimdoe'
},
{
  img: imgAPI.avatar[2],
  name: 'Jihan Doe',
  title: '@doe_jihan'
},
{
  img: imgAPI.avatar[0],
  name: 'Jena Doe',
  title: '@jena_doe'
},
{
  img: imgAPI.avatar[9],
  name: 'Johan Doe',
  title: '@johan'
}];

function Sidebar() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: bg } = useBackground();

  const { t } = useTranslation('common');

  return (
    <aside className={classes.sidebar}>
      <div className={classes.sideMobile}>
        <Typography component="h4" sx={{ mb: 3 }} className={cx(text.subtitle2, text.medium, text.uppercase)}>{t('about_me')}</Typography>
        <Typography component="p" className={text.paragraph}>
          {t('auth_desc')}
          {' '}
          {t('culture_desc1')}
        </Typography>
        <ul className={classes.property}>
          <li>
            <span>Project Views</span>
            <strong>1445</strong>
          </li>
          <li>
            <span>Appreciations</span>
            <strong>230</strong>
          </li>
          <li>
            <span>Member since</span>
            <strong>2018</strong>
          </li>
          <li>
            <span>Email</span>
            <strong>john.doe@example.com</strong>
          </li>
        </ul>
        <Typography component="h4" sx={{ mb: 3 }} className={cx(text.subtitle2, text.medium, text.uppercase)}>{t('about_skills')}</Typography>
        <div className={classes.tags}>
          <Chip label="Designs" className={bg.primaryLight} />
          <Chip label="Architect" className={bg.secondaryLight} />
          <Chip label="Programming" className={bg.accentLight} />
          <Chip label="Photography" className={bg.accent2Light} />
        </div>
      </div>
      <div className={classes.sideMobile}>
        <Typography component="h4" sx={{ mb: 3 }} className={cx(text.subtitle2, text.medium, text.uppercase)}>{t('about_people')}</Typography>
        <div className={classes.about_skills}>
          <List dense>
            {people.map((item, index) => (
              <ListItem disableGutters key={index.toString()}>
                <Avatar className={classes.avatar} alt="avatar" src={item.img} title="avatar" />
                <ListItemText primary={item.name} secondary={item.title} />
                <ListItemSecondaryAction>
                  <Button variant="outlined" size="small">follow</Button>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.btnArea}>
          <IconButton><ShareIcon /></IconButton>
          <IconButton><MoreHorizIcon /></IconButton>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
