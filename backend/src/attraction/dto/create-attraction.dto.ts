import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@prisma/client';
import {  IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAttractionDto {
    @ApiProperty({ example: 'Red Square' })
    @IsString()
    @IsNotEmpty()
    name: string;
    @ApiProperty({ example: "Red Square is one of the oldest and largest squares in Moscow, Russia. It is located in Moscow's historic centre, along the eastern walls of the Kremlin" })
    @IsString()
    @IsNotEmpty()
    description: string;
    @ApiProperty({ example: 2.5 })
    @IsNumber()
    @IsNotEmpty()
    rating;
    @ApiProperty({ example: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Red_square_Moscow_cityscape_%288309148721%29.jpg/1280px-Red_square_Moscow_cityscape_%288309148721%29.jpg" })
    @IsString()
    @IsNotEmpty()
    photoUrl;
    @ApiProperty({ example: 'Moscow, Russia' })
    @IsString()
    @IsNotEmpty()
    location;
    @ApiProperty({ example: 55.754093 })
    @IsNumber()
    @IsNotEmpty()
    lat
    @ApiProperty({ example: 37.474093 })
    @IsNumber()
    @IsNotEmpty()
    lng
}
