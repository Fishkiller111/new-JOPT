import React from 'react';
import Box from '@mui/material/Box';
import ProfileWidget from './ProfileWidget';
import SubscribeWidget from './SubscribeWidget';
import PostWidget from './PostWidget';
import CommentWidget from './CommentWidget';
import ListWidget from './ListWidget';
import GalleryWidget from './GalleryWidget';
import useStyles from '../blog-style';

function Sidebar() {
  const { classes } = useStyles();
  return (
    <div className={classes.sidebar}>
      <SubscribeWidget />
      <Box py={3} />
      <ProfileWidget />
      <Box py={3} />
      <PostWidget />
      <Box py={3} />
      <CommentWidget />
      <Box py={3} />
      <ListWidget />
      <Box py={3} />
      <GalleryWidget />
    </div>
  );
}

export default Sidebar;
