import { Controller, Post, Body, Param, Get, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('qr')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @UseGuards(JwtAuthGuard)
  @Post(':id/track')
  async trackEvent(@Param('id') id: string, @Body() eventData: any) {
    return this.eventService.trackEvent(id, eventData);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/events')
  async getEvents(@Param('id') id: string) {
    return this.eventService.getEvents(id);
  }
}
