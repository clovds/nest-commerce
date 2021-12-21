import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  async get() {
    return 'Hello World!';
  }

  @Get('testing')
  async testing(@Query('name') name: string, @Query('email') email: string) {
    return { name, email };
  }

  @Post('post')
  @HttpCode(201)
  async postTest(
    @Body('name') name: string,
    @Body('address') address: string,
  ): Promise<string> {
    return `${name} and ${address}`;
  }

  @Post('post2')
  @HttpCode(201)
  async postTest2(@Body() body): Promise<string> {
    throw new HttpException('Forbidden Test', HttpStatus.FORBIDDEN);
    return `${body.address}`;
  }

  @Delete('delete/:name')
  async delete(@Param('name') name: string) {
    return `delete ${name}`;
  }
}
