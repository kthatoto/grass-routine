import { Button, Flex, Stack, Textarea, TextInput } from "@mantine/core";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import useAuthStore from "@/stores/authStore";
import useRoutinesStore from "@/stores/routinesStore";
import { Routine, addRoutine, updateRoutine } from "@/models/routine";
import { showSuccessNotification } from "@/utils/notifications";

interface Props {
  routine?: Routine;
  close: () => void;
}

interface FormValues {
  title: string;
  unit: string;
  memo?: string;
}

const formSchema = z.object({
  title: z.string().min(1),
  unit: z.string().min(1),
  memo: z.string().optional(),
});

const RoutineForm = ({ routine, close }: Props) => {
  const { user } = useAuthStore();
  const { getRoutines } = useRoutinesStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: routine?.title || "",
      unit: routine?.unit || "",
      memo: routine?.memo || undefined,
    },
  });

  const onSubmit = handleSubmit(async (params) => {
    if (!user) return;
    const serializedParams = { ...params, memo: params.memo || null };
    if (routine) {
      await updateRoutine(user.uid, routine.id, serializedParams);
      showSuccessNotification("Updated new routine!");
    } else {
      await addRoutine(user.uid, serializedParams);
      showSuccessNotification("Created new routine!");
    }
    getRoutines(user.uid);
    close();
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack gap={10}>
        <Controller
          control={control}
          name="title"
          render={({ field }) => (
            <TextInput label="Title" error={errors.title?.message} {...field} />
          )}
        />
        <Controller
          control={control}
          name="unit"
          render={({ field }) => (
            <TextInput label="Unit" error={errors.unit?.message} {...field} />
          )}
        />
        <Controller
          control={control}
          name="memo"
          render={({ field }) => (
            <Textarea label="Memo" error={errors.memo?.message} {...field} />
          )}
        />
        <Flex justify="flex-end">
          <Button type="submit" w={144}>
            Save
          </Button>
        </Flex>
      </Stack>
    </form>
  );
};
export default RoutineForm;
