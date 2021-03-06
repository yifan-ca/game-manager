import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Movement } from 'src/movement/entities/movement.entity';

export class GameDto {
  @IsString()
  @IsNotEmpty()
  white: string;

  @IsString()
  @IsNotEmpty()
  black: string;

  @IsArray()
  @IsOptional()
  moves: Movement[];

  @IsString()
  @IsOptional()
  termination: string;

  @IsString()
  @IsOptional()
  winner: string;

  @IsString()
  @IsOptional()
  result: string;

  @IsUUID()
  @IsNotEmpty()
  tournamentId: string;
}
