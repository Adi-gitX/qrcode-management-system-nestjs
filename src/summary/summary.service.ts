import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectModel, Schema } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from '../event/schemas/event.schema';
import { Summary, SummaryDocument } from './schemas/summary.schema';

@Injectable()
export class SummaryService {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>,
    @InjectModel(Summary.name) private summaryModel: Model<SummaryDocument>,
  ) {}

  @Cron('0 * * * * *')
  async handleCron() {
    const events = await this.eventModel.find().exec();
    // Process events to generate summary
    const summary = new this.summaryModel({
      date: new Date(),
      totalScans: events.length,
      uniqueUsers: new Set(events.map(event => event.userId)).size,
      // Add more summary data as needed
    });
    await summary.save();
  }
}
