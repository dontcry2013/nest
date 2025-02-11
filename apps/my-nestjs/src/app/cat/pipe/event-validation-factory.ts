import { EventValidationPipe } from './event-validation.pipe';

export const EventValidationPipeFactory = (dtoMap: Record<string, any>) => {
  return new EventValidationPipe(dtoMap);
};
