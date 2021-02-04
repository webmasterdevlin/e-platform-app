import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader } from '../../../../../components/molecules';
import { Accordion } from '../../../../../components/organisms';

type Props = {
  data?: any[];
  className?: string;
  rest?: React.ReactNode;
};

const Faq = ({ data, className, ...rest }: Props) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title="We are here to help"
        subtitle="Checkout our F.A.Q. if you have some questions."
        fadeUp
      />
      <Accordion items={data} />
    </div>
  );
};

export default Faq;

const useStyles = makeStyles(() => ({
  root: {},
}));
