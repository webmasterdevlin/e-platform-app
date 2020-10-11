```jsx
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../../../theme";

import { SectionHeader } from "components/molecules";
import { CardBase } from "components/organisms";

<ThemeProvider theme={theme}>
        <Parallax backgroundImage="/images/photos/blog/cover2.jpg">
            <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#007b3d3d' }}>
                <CardBase withShadow style={{ width: 500, height: 'auto', background: 'transparent' }}>
                    <SectionHeader
                        title={
                            <span style={{ color: 'white' }}>
                                Use flexible components.<br />
                                <span className="text-highlighted__primary">
                                to build an app quickly.
                                </span>
                            </span>
                        }
                        subtitle={<span style={{ color: 'white' }}>
                            TheFront styles and extends MAterial UI components, but also included brand new landing page focused components.
                        </span>}
                    />
                </CardBase>
            </div>
        </Parallax>
</ThemeProvider>