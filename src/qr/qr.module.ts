import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QrService } from './qr.service';
import { QrController } from './qr.controller';
import { QrCode, QrCodeSchema } from './schemas/qr-code.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: QrCode.name, schema: QrCodeSchema }]),
  ],
  providers: [QrService],
  controllers: [QrController],
})
export class QrModule {}
