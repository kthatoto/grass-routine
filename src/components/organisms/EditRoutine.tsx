import { Button, Modal, Text } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { useDisclosure } from "@mantine/hooks";
import RoutineForm from "@/components/forms/RoutineForm";
import { Routine } from "@/models/routine";

interface Props {
  routine: Routine;
}

const EditRoutine = ({ routine }: Props) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Button
        leftSection={<FontAwesomeIcon icon={faEdit} />}
        onClick={open}
        fullWidth
        variant="default"
      >
        Edit
      </Button>
      <Modal
        title={<Text fw="bold">Edit Routine</Text>}
        opened={opened}
        onClose={close}
      >
        <RoutineForm routine={routine} close={close} />
      </Modal>
    </>
  );
};
export default EditRoutine;
