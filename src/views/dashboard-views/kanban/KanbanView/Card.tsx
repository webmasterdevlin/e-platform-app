import React, { forwardRef, useState } from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card as MuiCard,
  CardContent,
  CardMedia,
  SvgIcon,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import {
  CheckSquare as CheckIcon,
  Eye as EyeIcon,
  File as FileIcon,
  MessageCircle as MessageIcon,
} from 'react-feather';
import type { Theme } from 'themes/dashboard-theme';
import { useSelector } from 'store';
import type { RootState } from 'store';
import type { Card as CardType, List, Member } from 'types/kanban';
import CardEditModal from './CardEditModal';

interface CardProps {
  className?: string;
  cardId: string;
  dragging: boolean;
  index?: number;
  list: List;
  style?: {};
}

interface PopulatedCard extends CardType {
  members: Member[];
}

const cardSelector = (state: RootState, cardId: string): PopulatedCard => {
  const { cards, members } = state.kanban;
  const card = cards.byId[cardId];

  return {
    ...card,
    members: card.memberIds.map((memberId: string) => members.byId[memberId]),
  };
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    outline: 'none',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  card: {
    '&:hover': {
      backgroundColor: theme.palette.background.dark,
    },
  },
  dragging: {
    backgroundColor: theme.palette.background.dark,
  },
  cover: {
    height: 200,
  },
  badge: {
    '& + &': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Card: FC<CardProps> = forwardRef(
  ({ cardId, className, dragging, index, list, style, ...rest }, ref) => {
    const classes = useStyles();
    const card = useSelector(state => cardSelector(state, cardId));
    const [isOpened, setOpened] = useState<boolean>(false);

    const handleOpen = (): void => {
      setOpened(true);
    };

    const handleClose = (): void => {
      setOpened(false);
    };

    return (
      <div
        className={clsx(classes.root, className)}
        index={index}
        // @ts-ignore
        ref={ref}
        style={style}
        {...rest}
      >
        <MuiCard
          className={clsx(classes.card, { [classes.dragging]: dragging })}
          raised={dragging}
          variant={dragging ? 'elevation' : 'outlined'}
          onClick={handleOpen}
        >
          {card.cover && (
            <CardMedia className={classes.cover} image={card.cover} />
          )}
          <CardContent>
            <Typography variant="h5" color="textPrimary">
              {card.name}
            </Typography>
            <Box mt={2} display="flex" alignItems="center">
              {card.isSubscribed && (
                <SvgIcon
                  className={classes.badge}
                  color="action"
                  fontSize="small"
                >
                  <EyeIcon />
                </SvgIcon>
              )}
              {card.attachments.length > 0 && (
                <SvgIcon
                  className={classes.badge}
                  color="action"
                  fontSize="small"
                >
                  <FileIcon />
                </SvgIcon>
              )}
              {card.checklists.length > 0 && (
                <SvgIcon
                  className={classes.badge}
                  color="action"
                  fontSize="small"
                >
                  <CheckIcon />
                </SvgIcon>
              )}
              {card.comments.length > 0 && (
                <SvgIcon
                  className={classes.badge}
                  color="action"
                  fontSize="small"
                >
                  <MessageIcon />
                </SvgIcon>
              )}
              <Box flexGrow={1} />
              {card.members.length > 0 && (
                <AvatarGroup max={5}>
                  {card.members.map(member => (
                    <Avatar key={member.id} src={member.avatar} />
                  ))}
                </AvatarGroup>
              )}
            </Box>
          </CardContent>
        </MuiCard>
        <CardEditModal
          open={isOpened}
          onClose={handleClose}
          card={card}
          list={list}
        />
      </div>
    );
  },
);

Card.propTypes = {
  cardId: PropTypes.string.isRequired,
  className: PropTypes.string,
  dragging: PropTypes.bool.isRequired,
  index: PropTypes.number,
  // @ts-ignore
  list: PropTypes.object.isRequired,
  style: PropTypes.object,
};

Card.defaultProps = {
  dragging: false,
  style: {},
};

export default Card;
