import { showErrorNotification, showSuccessNotification } from "@/utils/notifications";
import { Button } from "@mantine/core";
const Dashboard = () => {
  return (
    <>
      <h1>Signed In</h1>
      <Button onClick={() => showSuccessNotification("Success")}>Success</Button>
      <Button onClick={() => showErrorNotification("Error")}>Error</Button>
    </>
  );
};
export default Dashboard;
