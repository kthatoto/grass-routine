import { useEffect } from "react";
import { Flex, Grid } from "@mantine/core";
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
        <NewRoutine />
      </Flex>
      <Grid>
        {routines.map((routine) => (
          <Grid.Col span={6}>
            <RoutineItem key={routine.id} routine={routine} />
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};
export default Dashboard;
