```jsx
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';
import { Image } from './index';
import { SectionHeader } from '../../molecules';

import theme from '../../../themes/dashboard-theme';

<ThemeProvider theme={theme}>
  <HeroShaped
    leftSide={
      <SectionHeader
        title="Coworking made easy"
        subtitle="For entrepreneurs, startups and freelancers. Discover coworking spaces designed to inspire and to connect you to a community of motivated people."
        ctaGroup={[
          <Button variant="contained" color="primary">
            Book
          </Button>,
          <Button variant="outlined" color="primary">
            Browse
          </Button>
        ]}
        align="left"
      />
    }
    rightSide={
      <Image
        src="/images/photos/coworking/place1.jpg"
        alt="..."
        style={{ objectFit: 'cover' }}
      />
    }
  />
</ThemeProvider>;
```
