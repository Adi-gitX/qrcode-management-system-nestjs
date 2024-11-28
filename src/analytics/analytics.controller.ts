import { Controller, Get, Param, Query } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('qr')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get(':id/analytics')
  async getAnalytics(@Param('id') id: string, @Query() filters: any) {
    return this.analyticsService.getAnalytics(id, filters);
  }
}
