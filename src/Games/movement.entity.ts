import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Color, Game } from './game.entity';

@Table
export class Movement extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
  })
  move: string;

  @Column({
    type: DataType.STRING,
  })
  board: string;

  @Column({
    type: DataType.ENUM(...Object.keys(Color)),
  })
  turn: string;

  @Column({
    type: DataType.STRING,
  })
  player: string;

  @ForeignKey(() => Game)
  @Column({
    type: DataType.UUID,
  })
  gameId: string;

  @BelongsTo(() => Game)
  game: Game;
}
