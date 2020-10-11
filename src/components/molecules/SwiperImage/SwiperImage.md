**Basic Example**
```jsx

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import 'swiper/css/swiper.min.css';

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <SwiperImage
        style={{
            width: 500,
            height: 300,
        }}
        items={[{
            src: '/images/photos/coworking/place2.jpg',
            srcset: '/images/photos/coworking/place2.jpg 2x',
            alt: '...'
        }, {
            src: '/images/photos/coworking/place3.jpg',
            srcset: '/images/photos/coworking/place3.jpg 2x',
            alt: '...'
        }]}
    />
</ThemeProvider>