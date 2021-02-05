import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AntiHeroForm from '../components/AntiHeroForm';
import { removeAntiHeroByIdTemporaryAction } from '../anti-hero.slice';
import {
  deleteAntiHeroAction,
  getAntiHeroesAction,
} from '../anti-hero.async.actions';
import TitleBar from '../shared/title-bar';
import UpdateUiLabel from '../shared/update-ui-label';
import { Box, Button } from '@material-ui/core';
import { RootState } from 'store';

type Props = {};

const AntiHeroes = ({}: Props) => {
  const dispatch = useDispatch();
  const { loading, antiHeroes } = useSelector(
    (state: RootState) => state.antiHero,
  );
  const [counter, setCounter] = useState('0');

  useEffect(() => {
    dispatch(getAntiHeroesAction());
  }, [dispatch]);

  return (
    <div>
      <TitleBar title={'Anti Heroes - Redux Toolkit'} />
      <AntiHeroForm />
      <UpdateUiLabel />
      <div>
        {loading ? (
          <h2>Loading.. Please wait..</h2>
        ) : (
          antiHeroes.map(ah => (
            <Box
              key={ah.id}
              mb={2}
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
            >
              <Box>
                <span>{`${ah.firstName} ${ah.lastName} is ${ah.knownAs}`}</span>
                {counter === ah.id && <span> - marked</span>}
              </Box>
              <Box>
                <Button
                  onClick={() => setCounter(ah.id)}
                  color={'default'}
                  variant={'contained'}
                >
                  Mark
                </Button>{' '}
                <Button
                  onClick={() =>
                    dispatch(removeAntiHeroByIdTemporaryAction(ah.id))
                  }
                  variant={'contained'}
                  color={'primary'}
                >
                  Remove
                </Button>{' '}
                <Button
                  onClick={() => dispatch(deleteAntiHeroAction(ah.id))}
                  variant={'outlined'}
                  color={'primary'}
                >
                  DELETE in DB
                </Button>
              </Box>
            </Box>
          ))
        )}
      </div>
      {antiHeroes.length === 0 && !loading && (
        <Button
          variant={'outlined'}
          color={'primary'}
          onClick={() => dispatch(getAntiHeroesAction())}
        >
          Re-fetch
        </Button>
      )}
    </div>
  );
};

export default AntiHeroes;
