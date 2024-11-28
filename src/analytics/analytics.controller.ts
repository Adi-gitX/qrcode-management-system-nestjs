import { Controller, Get, Param, Query } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get(':id')
  async getAnalytics(@Param('id') id: string, @Query() filters: any) {
    return this.analyticsService.getAnalytics(id, filters);
  }
}