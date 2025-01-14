import { Fighter, FightWithBrutes, FullTournament } from '@labrute/core';
import { Brute } from '@labrute/prisma';
import { Close } from '@mui/icons-material';
import { Box, Paper } from '@mui/material';
import moment from 'moment';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import BruteComponent from '../../components/Brute/Body/BruteComponent';
import BrutePortrait from '../../components/Brute/Body/BrutePortait';
import BruteTooltip from '../../components/Brute/BruteTooltip';
import FantasyButton from '../../components/FantasyButton';
import Page from '../../components/Page';
import StyledButton, { StyledButtonHeight, StyledButtonWidth } from '../../components/StyledButton';
import Text from '../../components/Text';
import { useAuth } from '../../hooks/useAuth';

const rounds = [
  [-1, 32],
  [32, 48],
  [48, 56],
  [56, 60],
  [60, 62],
  [62, 63],
];

interface Props {
  bruteName?: string,
  tournament: FullTournament,
  winnerStep?: FullTournament['steps'][number],
  ownsBrute: boolean,
  stepWatched: number,
  brute: Brute | null,
  display: boolean,
  goToFight: (fight: FightWithBrutes, newStep: number) => () => void,
  setWatched: () => void,
}

const TournamentMobileView = ({
  bruteName,
  tournament,
  winnerStep,
  ownsBrute,
  stepWatched,
  brute,
  display,
  goToFight,
  setWatched,
}: Props) => {
  const { t } = useTranslation();
  const { authing } = useAuth();

  return tournament && (
    <Page title={`${t('tournament')} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}/cell`}>
      <Paper sx={{
        mx: 4,
        textAlign: 'center',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('tournamentOf')} {moment.utc(tournament.date).format('DD MMMM YYYY')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2, }}>
        {ownsBrute && stepWatched < 6 && (
          <FantasyButton onClick={setWatched} color="success">
            {t('setAsWatched')}
          </FantasyButton>
        )}
        {display && (!authing && brute) && rounds.map(([start, end], index) => {
          const shouldDisplay = ownsBrute
            ? stepWatched >= index
            : true;
          const shouldResultDisplay = ownsBrute
            ? stepWatched - 1 >= index
            : true;

          return shouldDisplay && (
            <Fragment key={start}>
              <Text h4 bold>
                {index < 3
                  ? t('round', { value: index + 1 })
                  : index === 3
                    ? t('quarterFinals')
                    : index === 4
                      ? t('semiFinals')
                      : t('finals')}
              </Text>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                {tournament.steps.filter((step) => step.step > start && step.step <= end)
                  .map((step) => (
                    // Fight button
                    <StyledButton
                      key={step.id}
                      onClick={goToFight(step.fight, index + 1)}
                      shadowColor={(bruteName === step.fight.brute1.name
                        || bruteName === step.fight.brute2.name)
                        ? 'rgba(255, 0, 0, 0.6)'
                        : undefined}
                      sx={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundSize: 'contain',
                        width: StyledButtonWidth * 0.7,
                        height: StyledButtonHeight * 0.7,
                        m: 1,
                      }}
                    >
                      {/* Left fighter */}
                      <BruteTooltip
                        fighter={(step.fight.fighters as unknown as Fighter[])
                          .find((fighter) => fighter.type === 'brute' && fighter.name === step.fight.brute1.name)}
                        brute={step.fight.brute1}
                      >
                        <Box sx={{ position: 'relative', mt: 1 }}>
                          <BrutePortrait
                            inverted
                            brute={step.fight.brute1}
                            sx={{
                              height: 45,
                            }}
                          />
                          {/* Lost indicator */}
                          {shouldResultDisplay && step.fight.winner === step.fight.brute2.name && (
                            <Close
                              color="error"
                              sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: 1,
                                height: 1,
                                zIndex: 3,
                              }}
                            />
                          )}
                          {/* Rank */}
                          <Box
                            component="img"
                            src={`/images/rankings/lvl_${(step.fight.fighters as unknown as Fighter[]).find((f) => f.id === step.fight.brute1Id)?.rank || step.fight.brute1.ranking}.png`}
                            sx={{
                              position: 'absolute',
                              bottom: 4,
                              right: 4,
                              width: 20,
                              zIndex: 2,
                            }}
                          />
                        </Box>
                      </BruteTooltip>
                      {/* VS */}
                      <Box
                        component="img"
                        src="/images/tournament/vs.svg"
                        sx={{
                          width: 40,
                        }}
                      />
                      {/* Right fighter */}
                      <BruteTooltip
                        fighter={(step.fight.fighters as unknown as Fighter[])
                          .find((fighter) => fighter.type === 'brute' && fighter.name === step.fight.brute2.name)}
                        brute={step.fight.brute2}
                      >
                        <Box sx={{ position: 'relative', mt: 1 }}>
                          <BrutePortrait
                            brute={step.fight.brute2}
                            sx={{
                              height: 45,
                            }}
                          />
                          {/* Lost indicator */}
                          {shouldResultDisplay && step.fight.winner === step.fight.brute1.name && (
                            <Close
                              color="error"
                              sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: 1,
                                height: 1,
                                zIndex: 3,
                              }}
                            />
                          )}
                          {/* Rank */}
                          <Box
                            component="img"
                            src={`/images/rankings/lvl_${(step.fight.fighters as unknown as Fighter[]).find((f) => f.id === step.fight.brute2Id)?.rank || step.fight.brute2.ranking}.png`}
                            sx={{
                              position: 'absolute',
                              bottom: 4,
                              left: 4,
                              width: 20,
                              transform: 'scaleX(-1)',
                              zIndex: 2,
                            }}
                          />
                        </Box>
                      </BruteTooltip>
                    </StyledButton>
                  ))}
              </Box>
            </Fragment>
          );
        })}
        {display
          && winnerStep
          && (!authing && brute)
          && (!ownsBrute || (ownsBrute && stepWatched > 5))
          && (
            <BruteTooltip
              fighter={winnerStep.fight.winner === winnerStep.fight.brute1.name
                ? (winnerStep.fight.fighters as unknown as Fighter[])
                  .find((fighter) => fighter.type === 'brute' && fighter.name === winnerStep.fight.brute1.name)
                : (winnerStep.fight.fighters as unknown as Fighter[])
                  .find((fighter) => fighter.type === 'brute' && fighter.name === winnerStep.fight.brute2.name)}
              brute={winnerStep.fight.winner === winnerStep.fight.brute1.name
                ? winnerStep.fight.brute1
                : winnerStep.fight.brute2}
            >
              <BruteComponent
                brute={winnerStep.fight.winner === winnerStep.fight.brute1.name
                  ? winnerStep.fight.brute1
                  : winnerStep?.fight.brute2}
                sx={{
                  display: 'block',
                  width: 140,
                  m: '0 auto'
                }}
              />
            </BruteTooltip>
          )}

      </Paper>
    </Page>
  );
};

export default TournamentMobileView;
