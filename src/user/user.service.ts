import {Injectable} from '@nestjs/common';
import {PrismaService} from "../dabatase/PrismaService";

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {
    }

    async create(data: any) {
        return await this.prisma.user.create({data})
    }

    async findAll() {
        return await this.prisma.user.findMany();
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    async findByName(name: string) {
        return await this.prisma.user.findFirst({
            where: {
                name: name
            },
        })
    }

    delete(id: number) {
        return `This action returns a #${id} user`;
    }
}

