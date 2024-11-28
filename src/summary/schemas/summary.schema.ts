import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SummaryDocument = Summary & Document;

@Schema()
export class Summary {
  @Prop({ required: true })
  date: Date;

  @Prop()
  totalScans: number;

  @Prop()
  uniqueUsers: number;
}

export const SummarySchema = SchemaFactory.createForClass(Summary);
