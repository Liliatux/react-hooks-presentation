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
  List,
  ListItem,
  Slide,
  Text,
  Appear
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import WithoutHooksSimple from "./WithoutHooksSimple";
import WithHooksSimple from "./WithHooksSimple";
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
        transition={["slide"]}
        transitionDuration={500}
        theme={theme}
        bgColor="primary"
        contentWidth={1400}
      >
        <Slide transition={["zoom"]}>
          <Heading textColor="secondary" size={4}>
            Meetup React Hooks
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" bold>
            React 16.8
          </Text>
        </Slide>
        <Slide textColor="tertiary">
          <Heading size={4} textColor="secondary">
            Summary
          </Heading>
          <br />
          <List ordered>
            <Appear>
              <ListItem>Introduction of Hooks [Zélia]</ListItem>
            </Appear>
            <Appear>
              <ListItem>Reimplementation of useState [Jean]</ListItem>
            </Appear>
            <Appear>
              <ListItem>HOC and TypeScript with Hooks [Antoine]</ListItem>
            </Appear>
            <Appear>
              <ListItem>Redux with Hooks [Adrien]</ListItem>
            </Appear>
            <Appear>
              <ListItem>Example of fetch with Hooks [Yann]</ListItem>
            </Appear>
            <Appear>
              <ListItem>Advanced Hooks [Benjamin]</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <BlockQuote>
            <Heading textColor="tertiary" size={4}>
              Introduction of Hooks
            </Heading>
            <Cite textColor="secondary">by Zélia @liliatux</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Simple example
          </Heading>
          <br />
          <Layout>
            <Fill>
              <Heading size={6} textColor="secondary">
                Class Component
              </Heading>
              <Text textColor="secondary">(without Hooks)</Text>
              <WithoutHooksSimple />
            </Fill>
            <Fill>
              <Heading size={6} textColor="secondary">
                Function Component
              </Heading>
              <Text textColor="secondary">(with Hooks)</Text>
              <WithHooksSimple />
            </Fill>
          </Layout>
        </Slide>
        <CodeSlide
          lang="jsx"
          /* eslint import/no-webpack-loader-syntax: off */
          code={require("!!raw-loader!./WithoutHooksSimple.js").default}
          ranges={[
            { loc: [0, 30], title: "Class component" },
            { loc: [0, 3] },
            { loc: [3, 8] },
            { loc: [15, 29] },
            { loc: [23, 24] },
            { loc: [8, 14] }
          ]}
        />
        <CodeSlide
          lang="jsx"
          /* eslint import/no-webpack-loader-syntax: off */
          code={require("!!raw-loader!./WithHooksSimple.js").default}
          ranges={[
            { loc: [0, 18], title: "Function component" },
            { loc: [0, 3] },
            { loc: [3, 4] },
            { loc: [9, 17] },
            { loc: [13, 14] },
            { loc: [5, 8] }
          ]}
        />
        <Slide>
          <Layout>
            <Fill>
              <Heading size={6} textColor="secondary">
                Class Component
              </Heading>
              <Text textColor="secondary">(without Hooks)</Text>
              <CodePane
                lang="jsx"
                source={require("!!raw-loader!./WithoutHooksSimple.js").default}
              />
            </Fill>
            <Fill>
              <Heading size={6} textColor="secondary">
                Function Component
              </Heading>
              <Text textColor="secondary">(with Hooks)</Text>
              <CodePane
                lang="jsx"
                source={require("!!raw-loader!./WithHooksSimple.js").default}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary">
            Advanced example
          </Heading>
          <br />
          <Layout>
            <Fill>
              <Heading size={6} textColor="secondary">
                Class Component
              </Heading>
              <Text textColor="secondary">(without Hooks)</Text>
              <WithoutHooks />
            </Fill>
            <Fill>
              <Heading size={6} textColor="secondary">
                Function Component
              </Heading>
              <Text textColor="secondary">(with Hooks)</Text>
              <WithHooks />
            </Fill>
          </Layout>
        </Slide>
        <CodeSlide
          lang="jsx"
          /* eslint import/no-webpack-loader-syntax: off */
          code={require("!!raw-loader!./WithoutHooks.js").default}
          ranges={[
            { loc: [0, 47], title: "Class component" },
            { loc: [7, 8] },
            { loc: [40, 43] },
            { loc: [12, 21] }
          ]}
        />
        <CodeSlide
          lang="jsx"
          /* eslint import/no-webpack-loader-syntax: off */
          code={require("!!raw-loader!./WithHooks.js").default}
          ranges={[
            { loc: [0, 27], title: "Function component" },
            { loc: [4, 5] },
            { loc: [23, 24] },
            { loc: [0, 1] },
            { loc: [6, 9] }
          ]}
        />
        <Slide>
          <Layout>
            <Fill>
              <Heading size="6" textColor="white">
                Class Component
              </Heading>
              <Text textColor="secondary">(without Hooks)</Text>
              <CodePane
                textSize={10}
                lang="jsx"
                source={require("!!raw-loader!./WithoutHooks.js").default}
              />
            </Fill>
            <Fill>
              <Heading size={6} textColor="white">
                Function Component
              </Heading>
              <Text textColor="secondary">(with Hooks)</Text>
              <CodePane
                textSize={10}
                lang="jsx"
                source={require("!!raw-loader!./WithHooks.js").default}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <BlockQuote>
            <Heading textColor="tertiary" size={4}>
              Reimplementation of useState()
            </Heading>
            <Cite textColor="secondary">by Jean @euZèbe</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
