import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
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

  async generateDynamicQrCode(initialUrl: string, userId: string): Promise<QrCode> {
    const qrCode = new this.qrCodeModel({ initialUrl, userId });
    await qrCode.save();
    return qrCode;
  }

  async updateDynamicQrCode(id: string, newUrl: string, userId: string): Promise<QrCode> {
    const qrCode = await this.qrCodeModel.findById(id).exec();
    if (!qrCode) {
      throw new NotFoundException('QR code not found');
    }
    if (qrCode.userId !== userId) {
      throw new UnauthorizedException('You are not authorized to update this QR code');
    }
    qrCode.url = newUrl;
    return qrCode.save();
  }

  async getMyQrCodes(userId: string): Promise<QrCode[]> {
    return this.qrCodeModel.find({ userId }).exec();
  }
}
