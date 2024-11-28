import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { Event, EventDocument } from './schemas/event.schema';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>,
    @InjectQueue('event') private eventQueue: Queue,
  ) {}

  async trackEvent(qrId: string, eventData: any): Promise<void> {
    await this.eventQueue.add({ qrId, ...eventData });
  }

  async getEvents(qrId: string): Promise<Event[]> {
    return this.eventModel.find({ qrId }).exec();
  }
}
