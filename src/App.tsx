import React from 'react';
import "@tremor/react/dist/esm/tremor.css";
import "./index.css";
import { Flex, Block, BadgeDelta, Card, Text, Metric, ProgressBar } from "@tremor/react";

class App extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <Card maxWidth="max-w-lg">
          <Flex alignItems="items-start">
            <Block>
              <Text>Sales</Text>
              <Metric>$ 20,699</Metric>
            </Block>
            <BadgeDelta deltaType="moderateDecrease" text="13.2%" />
          </Flex>
          <Flex marginTop="mt-4">
            <Text truncate={true}>50% ($ 110,250)</Text>
            <Text> $ 220,500 </Text>
          </Flex>
          <ProgressBar percentageValue={50} marginTop="mt-2" />
        </Card>
      </div>
    );
  }
}

export default App;
