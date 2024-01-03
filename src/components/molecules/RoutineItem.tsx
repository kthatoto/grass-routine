import { Card, Text } from "@mantine/core";
import { Routine } from "@/models/routine";

interface Props {
  routine: Routine;
}

const RoutineItem = ({ routine }: Props) => {
  return (
    <Card>
      <Text>{routine.title}</Text>
    </Card>
  );
};

export default RoutineItem;
