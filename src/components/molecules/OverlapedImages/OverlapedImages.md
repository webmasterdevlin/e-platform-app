**Basic Example**
```jsx

import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../../theme";

<ThemeProvider theme={theme}>
    <OverlapedImages
        image1={{
            src: '/images/photos/expo-gallery/gallery1.jpg',
            srcSet: '/images/photos/expo-gallery/gallery1@2x.jpg 2x',
            alt: '...',
        }}
        image2={{
            src: '/images/photos/expo-gallery/gallery2.jpg',
            srcSet: '/images/photos/expo-gallery/gallery2@2x.jpg 2x',
            alt: '...',
        }}
        image3={{
            src: '/images/photos/expo-gallery/gallery3.jpg',
            srcSet: '/images/photos/expo-gallery/gallery3@2x.jpg 2x',
            alt: '...',
        }}
    />
</ThemeProvider>