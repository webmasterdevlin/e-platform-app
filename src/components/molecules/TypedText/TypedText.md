**Basic Example**

```jsx
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../themes/dashboard-theme';

<ThemeProvider theme={theme}>
  <TypedText
    component="span"
    variant="h4"
    color="secondary"
    typedProps={{
      strings: [
        'Web Developers.',
        'UI/UX Designers.',
        'Business Analists.',
        'Scrum Masters.',
        'Finance & Sales'
      ],
      typeSpeed: 50,
      loop: true
    }}
  />
</ThemeProvider>;
```
