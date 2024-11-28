import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { QrService } from './qr.service';

@Controller('qr')
export class QrController {
  constructor(private readonly qrService: QrService) {}

  @Post('static')
  async generateStaticQrCode(@Body('url') url: string) {
    return this.qrService.generateStaticQrCode(url);
  }

  @Post('dynamic')
  async generateDynamicQrCode(@Body('initialUrl') initialUrl: string) {
    return this.qrService.generateDynamicQrCode(initialUrl);
  }

  @Put(':id/update')
  async updateDynamicQrCode(@Param('id') id: string, @Body('newUrl') newUrl: string) {
    return this.qrService.updateDynamicQrCode(id, newUrl);
  }
}
