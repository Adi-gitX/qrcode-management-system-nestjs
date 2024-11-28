import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from './schemas/event.schema';

@Injectable()
export class EventService {
  constructor(@InjectModel(Event.name) private eventModel: Model<EventDocument>) {}

  async trackEvent(qrId: string, eventData: any): Promise<Event> {
    const event = new this.eventModel({ qrId, ...eventData });
    return event.save();
  }

  async getEvents(qrId: string): Promise<Event[]> {
    return this.eventModel.find({ qrId }).exec();
  }
}
