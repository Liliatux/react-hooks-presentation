// Import React
import React from "react";

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, Slide, Text } from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import WithoutHooks from "./WithoutHooks";
import WithHooks from "./WithHooks";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "black",
    secondary: "white",
    tertiary: "#d347a7",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom"]}
        transitionDuration={500}
        theme={theme}
        bgColor="primary"
        contentWidth={1400}
      >
        <Slide transition={["zoom"]}>
          <Heading textColor="secondary" size={4}>
            React Hooks
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" bold>
            React 16.8
          </Text>
          <br />
          <BlockQuote>
            <Cite textColor="secondary">@liliatux</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom", "fade"]}>
          <Heading textColor="secondary" size={4}>
            React without Hooks
          </Heading>
        </Slide>
          <CodeSlide
            lang="javascript"
            /* eslint import/no-webpack-loader-syntax: off */
            code={require("!!raw-loader!./WithoutHooks.js").default}
            ranges={[{ loc: [0, 40] },
            { loc: [5,11]}]}            
          />
        <Slide>
          <WithoutHooks />
        </Slide>
        <Slide transition={["zoom", "fade"]}>
          <Heading textColor="secondary" size={4}>
            React Hooks
          </Heading>
        </Slide>
        <Slide>
          <WithHooks />
        </Slide>
      </Deck>
    );
  }
}
