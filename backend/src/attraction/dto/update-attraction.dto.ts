import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAttractionDto } from './create-attraction.dto';
import { IsNotEmpty } from 'class-validator';
import { Status } from '@prisma/client';

export class UpdateAttractionDto extends CreateAttractionDto {
        @ApiProperty({ example: Status })
        @IsNotEmpty()
        status;
}
