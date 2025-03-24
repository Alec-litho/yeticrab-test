import { Module } from '@nestjs/common';
import { AttractionService } from './attraction.service';
import { AttractionController } from './attraction.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AttractionController],
  providers: [AttractionService],
  imports: [PrismaModule]
})
export class AttractionModule {}
