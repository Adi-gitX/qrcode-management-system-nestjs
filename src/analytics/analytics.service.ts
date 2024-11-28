import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from '../event/schemas/event.schema';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>,
  ) {}

  async getAnalytics(qrId: string, filters: any): Promise<any> {
    const events = await this.eventModel.find({ qrId, ...filters }).exec();
    // Process events to generate analytics
    return {
      totalScans: events.length,
      uniqueUsers: new Set(events.map(event => event.userId)).size,
      // Add more analytics as needed
    };
  }
}
