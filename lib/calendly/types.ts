export interface WorkoutEventInterface {
  name: string;
  tel: string;
  workoutType: WorkoutTypeEnum;
  amount: 'אישיים' | 'זוגיים';
}
export enum WorkoutTypeEnum {
  TRX = 'TRX',
  BodyBuilding = 'אימון BodyBuilding',
  Functional = 'פונקציונלי',
  Tabata = 'טבטה',
}
