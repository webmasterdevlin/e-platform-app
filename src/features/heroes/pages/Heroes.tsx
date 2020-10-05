import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeroForm from '../components/HeroForm';
import { Dispatch } from 'redux';
import {
  getHeroesAction,
  deleteHeroByIdAction,
  removeHeroByIdTemporaryAction,
} from '../hero-actions';
import TitleBar from '../../anti-heroes/shared/title-bar';
import UpdateUiLabel from '../../anti-heroes/shared/update-ui-label';
import { RootState } from '../../../store';
import { Box, Button } from '@material-ui/core';

type Props = {};

const Heroes: React.FC<Props> = () => {
  const dispatch: Dispatch = useDispatch();
  const { heroes, loading } = useSelector((state: RootState) => state.hero);
  const [counter, setCounter] = useState('0');

  useEffect(() => {
    dispatch(getHeroesAction());
  }, []);

  return (
    <div>
      <TitleBar title={'Super Heroes - Redux Saga'} />
      <HeroForm />
      <UpdateUiLabel />
      <div>
        {loading ? (
          <h2>Loading.. Please wait..</h2>
        ) : (
          heroes.map(h => (
            <Box
              key={h.id}
              mb={2}
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
            >
              <Box>
                <span>{`${h.firstName} ${h.lastName} is ${h.knownAs}`}</span>
                {counter === h.id && <span> - marked</span>}
              </Box>
              <Box>
                <Button
                  onClick={() => setCounter(h.id)}
                  color={'default'}
                  variant={'contained'}
                >
                  Mark
                </Button>{' '}
                <Button
                  onClick={() => dispatch(removeHeroByIdTemporaryAction(h.id))}
                  variant={'contained'}
                  color={'primary'}
                >
                  Remove
                </Button>{' '}
                <Button
                  onClick={() => dispatch(deleteHeroByIdAction(h.id))}
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
      {heroes.length === 0 && !loading && (
        <Button
          variant={'outlined'}
          color={'primary'}
          onClick={() => dispatch(getHeroesAction())}
        >
          Re-fetch
        </Button>
      )}
    </div>
  );
};

export default Heroes;
