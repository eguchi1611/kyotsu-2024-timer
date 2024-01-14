import {
  Button,
  Container,
  Flex,
  MantineProvider,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { useInterval } from "@mantine/hooks";
import { useState } from "react";

function getTimerText(seconds: number, radix: number) {
  return ("000" + (seconds % radix ** 3).toString(radix)).slice(-3);
}

function App() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  return (
    <MantineProvider>
      <Container>
        <Stack align="center">
          <Text size="lg" style={{ width: "100%" }}>
            共通テスト2024 数学I・A 第4問
          </Text>
          <Flex gap="lg">
            <Paper shadow="sm" p="sm" w={100}>
              <Text ta="center" size="lg">
                T3 <br />
                <b>{getTimerText(seconds, 3)}</b>
              </Text>
            </Paper>
            <Paper shadow="sm" p="sm" w={100}>
              <Text ta="center" size="lg">
                T4 <br />
                <b>{getTimerText(seconds, 4)}</b>
              </Text>
            </Paper>
            <Paper shadow="sm" p="sm" w={100}>
              <Text ta="center" size="lg">
                T6 <br />
                <b>{getTimerText(seconds, 6)}</b>
              </Text>
            </Paper>
          </Flex>
          <Button
            onClick={interval.toggle}
            color={interval.active ? "red" : "teal"}
          >
            {interval.active ? "ストップ" : "スタート"}
          </Button>
          <Text c="dimmed">
            Created by えぐち (@pro_uecer)
            <br />
            <a
              href="https://github.com/eguchi1611/kyotsu-2024-timer"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              ソースコード (GitHub)
            </a>
          </Text>
        </Stack>
      </Container>
    </MantineProvider>
  );
}

export default App;
