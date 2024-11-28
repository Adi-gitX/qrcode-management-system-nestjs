import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop({ required: true })
  qrId: string;

  @Prop()
  timestamp: Date;

  @Prop()
  location: string;

  @Prop()
  deviceType: string;

  @Prop()
  userId: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
