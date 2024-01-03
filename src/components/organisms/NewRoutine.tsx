import { Button, Modal, Text } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDisclosure } from "@mantine/hooks";
import RoutineForm from "@/components/forms/RoutineForm";

const NewRoutine = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button
        leftSection={<FontAwesomeIcon icon={faPlus}/>}
        onClick={open}
      >New Routine</Button>
      <Modal
        title={<Text fw="bold">New Routine</Text>}
        opened={opened}
        onClose={close}
      >
        <RoutineForm close={close} />
      </Modal>
    </>
  );
};
export default NewRoutine;
