import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messate.dto';

@Controller('messages')
export class MessagesController {
  @Get('/')
  listMessages() {}

  @Post('/')
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessage() {}
}
