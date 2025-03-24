import { ApiProperty } from '@nestjs/swagger';
import { Prisma, Status } from '@prisma/client';

export class Attraction {
  @ApiProperty({
    description: 'attraction identifier',
    nullable: false,
    example: 1,
    type: Number,
  })
  id;
  @ApiProperty({
    description: 'attraction name',
    nullable: false,
    example: 'Red Square',
    type: String,
  })
  name;
  @ApiProperty({
    description: 'attraction description',
    nullable: true,
    type: String,
    example:
      "Red Square is one of the oldest and largest squares in Moscow, Russia. It is located in Moscow's historic centre, along the eastern walls of the Kremlin",
  })
  description;
  @ApiProperty({
    description: 'the date of attraction added',
    nullable: false,
    example: '2025.03.21:16:20:21',
    type: Date,
  })
  addedDate;
  @ApiProperty({
    description: 'attraction rating',
    nullable: false,
    example: 2.5,
    type: Number,
  })
  rating;
  @ApiProperty({
    description: 'attraction preview photo',
    nullable: false,
    type: String,
    example:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Red_square_Moscow_cityscape_%288309148721%29.jpg/1280px-Red_square_Moscow_cityscape_%288309148721%29.jpg',
  })
  photoUrl;
  @ApiProperty({
    description: 'attraction location',
    nullable: false,
    example: 'Moscow, Russia',
    type: String,
  })
  location;
  @ApiProperty({
    description: 'attraction latitude',
    nullable: false,
    example: 55.754093,
    type: Number,
  })
  lat;
  @ApiProperty({
    description: 'attraction longitude',
    nullable: false,
    example: 37.474093,
    type: Number,
  })
  lng;
  @ApiProperty({
    description: 'attraction status',
    nullable: false,
    example: Status,
  })
  status;
}
