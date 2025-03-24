import { Injectable } from '@nestjs/common';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AttractionService {
  constructor(private prisma: PrismaService) {}

  async create(createAttractionDto: CreateAttractionDto) {
    try {
      let attractionInputData = this.createAttractionInput(createAttractionDto);
      const attraction = await this.prisma.attraction.create({
        data: attractionInputData,
      });
      return attraction;
    } catch (error) {
      console.error(error);
    }
  }

  async findAll() {
    return await this.prisma.attraction.findMany();
  }

  async update(id: number, updateAttractionDto: UpdateAttractionDto) {
    try {
      let attractionInputData = this.createAttractionInput(updateAttractionDto);
      const attraction = await this.prisma.attraction.update({
        where: { id },
        data: attractionInputData,
      });
      return attraction;
    } catch (error) {
      console.error(error);
    }
  }

  async remove(id: number) {
    try {
      const deletedAttraction = await this.prisma.attraction.delete({
        where: { id },
      });
      return deletedAttraction;
    } catch (error) {
      console.error(error);
    }
  }

  createAttractionInput(data: Prisma.AttractionCreateInput) {
    return {
      name: data.name,
      description: data.description,
      rating: data.rating,
      photoUrl: data.photoUrl,
      location: data.location,
      lat: data.lat,
      lng: data.lng,
      addedDate: data.addedDate ? data.addedDate : new Date().toISOString(),
    };
  }
}
