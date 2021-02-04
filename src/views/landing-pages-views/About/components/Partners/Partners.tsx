import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { SectionHeader } from '../../../../../components/molecules';
import { Image } from '../../../../../components/atoms';

type Props = {
  data: any[];
  className?: string;
};

const Partners = ({ className, data, ...rest }: Props) => {
  // const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6}>
          <SectionHeader
            title="Trusted by Millions of People"
            subtitle="We are registered as a distributor with AMFI, as an investment advisor with SEBI and platform partners with BSE."
            fadeUp
            disableGutter
            align={isMd ? 'left' : 'center'}
            titleProps={{
              className: classes.title,
            }}
          />
        </Grid>
        <Grid item container xs={12} md={6}>
          {data.map((partner, index) => (
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={4}
              key={index}
              data-aos="fade-up"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                className={classes.promoLogo}
                lazy={false}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Partners;

const useStyles: any = makeStyles((theme: Theme) => ({
  root: {},
  promoLogo: {
    maxWidth: 120,
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
  },
}));
