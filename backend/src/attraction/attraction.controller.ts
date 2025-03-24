import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { AttractionService } from './attraction.service';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Attraction } from './entities/attraction.entity';

@Controller('attraction')
export class AttractionController {
  constructor(private readonly attractionService: AttractionService) {}

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Attraction created',
    type: Attraction,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Some fields are not provided',
  })
  @Post()
  create(@Body() createAttractionDto: CreateAttractionDto) {
    return this.attractionService.create(createAttractionDto);
  }
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Attraction retrieved',
    type: [Attraction],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Some fields are not provided',
  })
  @Get()
  findAll() {
    return this.attractionService.findAll();
  }
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Attraction updated',
    type: Attraction,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Some fields are not provided',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttractionDto: UpdateAttractionDto) {
    return this.attractionService.update(+id, updateAttractionDto);
  }
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Attraction deleted',
    type: Attraction,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Some fields are not provided',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attractionService.remove(+id);
  }
}
