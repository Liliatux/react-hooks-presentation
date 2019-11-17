// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Layout,
  Slide,
  Text
} from "spectacle";

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
            <Cite textColor="secondary">Zélia @liliatux</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <WithoutHooks />
        </Slide>
        <CodeSlide
          lang="jsx"
          /* eslint import/no-webpack-loader-syntax: off */
          code={require("!!raw-loader!./WithoutHooks.js").default}
          ranges={[
            { loc: [0, 45], title: "React without Hooks" },
            { loc: [3, 11] },
            { loc: [12, 15] },
            { loc: [16, 21] },
            { loc: [22, 26] },
            { loc: [27, 41] }
          ]}
        />
        <Slide>
          <WithHooks />
        </Slide>
        <CodeSlide
          lang="jsx"
          /* eslint import/no-webpack-loader-syntax: off */
          code={require("!!raw-loader!./WithHooks.js").default}
          ranges={[
            { loc: [0, 31], title: "React with Hooks" },
            { loc: [3, 5] },
            { loc: [7, 14] },
            { loc: [15, 18] },
            { loc: [19, 27] }
          ]}
        />
        <Slide transition={["slide"]}>
          <Layout>
            <Fill>
              <Heading size="6" textColor="white">
                Class Component
              </Heading>
              <CodePane
                lang="jsx"
                source={require("!!raw-loader!./WithoutHooks.js").default}
              />
            </Fill>
            <Fill>
              <Heading size={6} textColor="white">
                Function Component
              </Heading>
              <CodePane
                lang="jsx"
                source={require("!!raw-loader!./WithHooks.js").default}
              />
            </Fill>
          </Layout>
        </Slide>
      </Deck>
    );
  }
}
