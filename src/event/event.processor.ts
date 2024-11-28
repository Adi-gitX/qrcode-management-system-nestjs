import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from './schemas/event.schema';

@Processor('event')
export class EventProcessor {
  constructor(@InjectModel(Event.name) private eventModel: Model<EventDocument>) {}

  @Process()
  async handleEvent(job: Job) {
    const event = new this.eventModel(job.data);
    await event.save();
  }
}
