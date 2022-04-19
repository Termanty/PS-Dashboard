import React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip'

function NotificationBell({badgeContent}) {
  const newNotifications = `You have ${badgeContent} new notifications`;
  const noNotifications = 'No new notifications';
  return (
    <Tooltip title = {badgeContent ? newNotifications : noNotifications}>
    <IconButton>
    <Badge badgeContent = {badgeContent} color="warning" >
    <NotificationsNoneRoundedIcon />
   </Badge>
   </IconButton>
   </Tooltip>
  )
}

export default NotificationBell
