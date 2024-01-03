import { Card, Text } from "@mantine/core";
import { Routine } from "@/models/routine";

interface Props {
  routine: Routine;
}

const RoutineItem = ({ routine }: Props) => {
  return (
    <Card>
      <Text fw="bold">{routine.title}</Text>
      <Text>
        <span>Last: </span>
        {routine.lastTime ? (
          <span>{routine.lastTime.toString()}</span>
        ) : "--"}
      </Text>
      <Text>
        <span>Total: </span>
        <span>{routine.total} {routine.unit}</span>
      </Text>
    </Card>
  );
};

export default RoutineItem;
