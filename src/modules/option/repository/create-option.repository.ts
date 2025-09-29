/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateOptionDto } from "../dto/create-option.dto";


@Injectable()
export class CreateOptionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOptionDto) {
    const option = await this.prisma.option.create({
        data: {
          name: data.name,
          description: data.description,
          scenario: {
            connect: { id: data.scenarioId },
          },
        },
      });
  
      return option;
    }
  }