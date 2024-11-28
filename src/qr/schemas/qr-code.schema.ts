import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QrCodeDocument = QrCode & Document;

@Schema()
export class QrCode {
  @Prop({ required: true })
  initialUrl: string;

  @Prop()
  url: string;

  @Prop({ required: true })
  userId: string;
}

export const QrCodeSchema = SchemaFactory.createForClass(QrCode);
