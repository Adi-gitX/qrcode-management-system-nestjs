import { Controller, Post, Body, Put, Param, Get, UseGuards, Request } from '@nestjs/common';
import { QrService } from './qr.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('qr')
export class QrController {
  constructor(private readonly qrService: QrService) {}

  @UseGuards(JwtAuthGuard)
  @Post('static')
  async generateStaticQrCode(@Body('url') url: string) {
    return this.qrService.generateStaticQrCode(url);
  }

  @UseGuards(JwtAuthGuard)
  @Post('dynamic')
  async generateDynamicQrCode(@Body('initialUrl') initialUrl: string, @Request() req) {
    return this.qrService.generateDynamicQrCode(initialUrl, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id/update')
  async updateDynamicQrCode(@Param('id') id: string, @Body('newUrl') newUrl: string, @Request() req) {
    return this.qrService.updateDynamicQrCode(id, newUrl, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('my-codes')
  async getMyQrCodes(@Request() req) {
    return this.qrService.getMyQrCodes(req.user.userId);
  }
}
