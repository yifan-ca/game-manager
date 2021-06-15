import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { GamesService } from 'src/games/services/games.service';
import { CreateGameDto } from '../entities/create-game.dto';

@Controller()
export class SubscriberController {
  constructor(private gamesService: GamesService) {}

  @EventPattern('create_game')
  async handleGameCreated(data: CreateGameDto) {
    console.log(JSON.stringify(data));
    this.gamesService.create(data);
  }
}
