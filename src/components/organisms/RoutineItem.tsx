import { Box, Button, Card, Grid, Group, Menu, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Routine } from "@/models/routine";
import EditRoutine from "@/components/organisms/EditRoutine";

interface Props {
  routine: Routine;
}

const RoutineItem = ({ routine }: Props) => {
  const [editModalOpened, editModal] = useDisclosure(false);

  return (
    <>
      <Card>
        <Group justify="space-between" align="flex-start">
          <Box>
            <Text fw="bold">{routine.title}</Text>
            <Text>
              <span>Last: </span>
              {routine.lastTime ? (
                <span>{routine.lastTime.toString()}</span>
              ) : (
                "--"
              )}
            </Text>
            <Text>
              <span>Total: </span>
              <span>
                {routine.total} {routine.unit}
              </span>
            </Text>
          </Box>
          <Menu width={100} position="bottom-end">
            <Menu.Target>
              <Button variant="subtle" size="compact-md">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                onClick={editModal.open}
                leftSection={<FontAwesomeIcon icon={faEdit} />}
              >
                Edit
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
        <Grid>
          <Grid.Col span={6}></Grid.Col>
          <Grid.Col span={6}></Grid.Col>
        </Grid>
      </Card>
      <EditRoutine
        routine={routine}
        opened={editModalOpened}
        close={editModal.close}
      />
    </>
  );
};

export default RoutineItem;
