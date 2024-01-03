import { useEffect } from "react";
import useRoutinesStore from "@/stores/routinesStore";
import useAuthStore from "@/stores/authStore";

const Dashboard = () => {
  const { user } = useAuthStore();
  const { getRoutines } = useRoutinesStore();
  useEffect(() => {
    if (!user) return;
    getRoutines(user.uid);
  }, [user, getRoutines]);

  return (
    <>
      <h1>Signed In</h1>
    </>
  );
};
export default Dashboard;
