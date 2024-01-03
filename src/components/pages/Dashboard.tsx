import { useEffect } from "react";
import useFieldsStore from "@/stores/fieldsStore";
import useAuthStore from "@/stores/authStore";

const Dashboard = () => {
  const { user } = useAuthStore();
  const { touchField } = useFieldsStore();
  useEffect(() => {
    if (!user) return;
    touchField(user.uid);
  }, [user, touchField]);

  return (
    <>
      <h1>Signed In</h1>
    </>
  );
};
export default Dashboard;
