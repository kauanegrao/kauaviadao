/* eslint-disable prettier/prettier */
import { Injectable, Logger } from "@nestjs/common";
import { findOneOptionRepository } from "../repository/find-one-option.repository";

@Injectable()
export class FindOneOpinonUseCase {
    constructor(
    private readonly findoneOptionRepository: findOneOptionRepository,
    private readonly logger: Logger,
    )   {}

    async execute(id:string) {
        try {
            const option = await this.findoneOptionRepository.findOne(id);
            return option;

        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}