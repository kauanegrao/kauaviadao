/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";


@Injectable()
export class findOneOptionRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findOne(id:string) {
     return  this.prisma.option.findUnique({
        where:{id}
     })
    }
}