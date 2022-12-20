import React from 'react';
import { Flex, Block, BadgeDelta, Card, Text, Metric, ProgressBar } from "@tremor/react";
import Login from "./Login"
import "@tremor/react/dist/esm/tremor.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
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
      </div >
    );
  }
}

export default App;
