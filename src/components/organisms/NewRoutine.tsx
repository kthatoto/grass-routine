import { ReactNode } from "react";
import { Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import RoutineForm from "@/components/forms/RoutineForm";

interface Props {
  clickable: ReactNode;
}

const NewRoutine = ({ clickable }: Props) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div onClick={open}>{clickable}</div>
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
