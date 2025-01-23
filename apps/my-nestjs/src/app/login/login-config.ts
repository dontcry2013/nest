import { IsString, validateSync } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { registerAs } from '@nestjs/config';

interface IDatabaseConfig {
  username: string;
  password: string;
}

// Define validation class
class DatabaseConfig {
  @IsString()
  username: string;

  @IsString()
  password: string;
}

// Create register function with validation
export const databaseConfig = registerAs('database', () => {
  const config: IDatabaseConfig = {
    username: 'test.username',
    password: 'test.password',
  };

  // Validate config
  const validatedConfig = plainToInstance(DatabaseConfig, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return config;
});
