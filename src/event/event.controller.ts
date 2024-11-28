import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('qr')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post(':id/track')
  async trackEvent(@Param('id') id: string, @Body() eventData: any) {
    return this.eventService.trackEvent(id, eventData);
  }

  @Get(':id/events')
  async getEvents(@Param('id') id: string) {
    return this.eventService.getEvents(id);
  }
}
