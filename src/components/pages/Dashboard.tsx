import { useEffect } from "react";
import { Button, Flex, Grid } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useRoutinesStore from "@/stores/routinesStore";
import useAuthStore from "@/stores/authStore";
import RoutineItem from "@/components/organisms/RoutineItem";
import NewRoutine from "@/components/organisms/NewRoutine";

const Dashboard = () => {
  const { user } = useAuthStore();
  const { getRoutines, routines } = useRoutinesStore();
  useEffect(() => {
    if (!user) return;
    getRoutines(user.uid);
  }, [user, getRoutines]);

  return (
    <>
      <Flex justify="flex-end" mb={10}>
        <NewRoutine
          clickable={
            <Button leftSection={<FontAwesomeIcon icon={faPlus} />}>
              New Routine
            </Button>
          }
        />
      </Flex>
      <Grid>
        {routines.map((routine) => (
          <Grid.Col span={6} key={routine.id}>
            <RoutineItem routine={routine} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};
export default Dashboard;
