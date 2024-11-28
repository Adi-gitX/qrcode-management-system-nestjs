import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QrCode, QrCodeDocument } from './schemas/qr-code.schema';

@Injectable()
export class QrService {
  constructor(@InjectModel(QrCode.name) private qrCodeModel: Model<QrCodeDocument>) {}

  async generateStaticQrCode(url: string): Promise<string> {
    return QRCode.toDataURL(url);
  }

  async generateDynamicQrCode(initialUrl: string): Promise<QrCode> {
    const qrCode = new this.qrCodeModel({ initialUrl });
    await qrCode.save();
    return qrCode;
  }

  async updateDynamicQrCode(id: string, newUrl: string): Promise<QrCode> {
    return this.qrCodeModel.findByIdAndUpdate(id, { url: newUrl }, { new: true });
  }
}