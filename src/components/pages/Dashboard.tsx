import { useEffect } from "react";
import { Stack } from "@mantine/core";
import useRoutinesStore from "@/stores/routinesStore";
import useAuthStore from "@/stores/authStore";
import RoutineItem from "@/components/molecules/RoutineItem";

const Dashboard = () => {
  const { user } = useAuthStore();
  const { getRoutines, routines } = useRoutinesStore();
  useEffect(() => {
    if (!user) return;
    getRoutines(user.uid);
  }, [user, getRoutines]);

  return (
    <Stack>
      {routines.map((routine) => (
        <RoutineItem routine={routine} />
      ))}
    </Stack>
  );
};
export default Dashboard;
