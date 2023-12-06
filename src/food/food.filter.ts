import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class FoodFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
