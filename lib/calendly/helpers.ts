export async function handleCreateCalendlyEvent(formData: FormData) {
  'use server';
  try {
    const { name, phone, workoutType, amount } = Object.fromEntries(formData);
    console.log(name, phone, workoutType, amount);
    console.log(formData);
  } catch (error) {
    console.log(error);
  }
}
