**Basic Example**

```jsx
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../themes/dashboard-theme';

<ThemeProvider theme={theme}>
  <CountUpNumber end={458} suffix="K" label="Placement" />
</ThemeProvider>;
```
