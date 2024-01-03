import { useEffect } from "react";
import { Flex, Stack } from "@mantine/core";
import useRoutinesStore from "@/stores/routinesStore";
import useAuthStore from "@/stores/authStore";
import RoutineItem from "@/components/molecules/RoutineItem";
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
      <Flex justify="flex-end">
        <NewRoutine />
      </Flex>
      <Stack>
        {routines.map((routine) => (
          <RoutineItem routine={routine} />
        ))}
      </Stack>
    </>
  );
};
export default Dashboard;
