import { Card, Grid, Text } from "@mantine/core";
import { Routine } from "@/models/routine";
import EditRoutine from "@/components/organisms/EditRoutine";

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
      <Grid mt={10}>
        <Grid.Col span={6}>
          <EditRoutine routine={routine} />
        </Grid.Col>
      </Grid>
    </Card>
  );
};

export default RoutineItem;
