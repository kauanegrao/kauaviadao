import { ListOptionRepository } from './../repository/list-option.repository';
/* eslint-disable prettier/prettier */
import { Injectable, Logger, ServiceUnavailableException } from '@nestjs/common';


@Injectable()
export class ListOptionUseCase {
  constructor(
    private readonly ListOptionRepository: ListOptionRepository,
    private readonly logger: Logger,
    ) {}


    async execute() {
        try {
            const option = await this.ListOptionRepository.listOption();
            this.logger.log('Scenario list successfully', ListOptionUseCase.name);
            return option;
        } catch (err) {
        const error = new ServiceUnavailableException('error list Scenario', {
            cause: err,
            description: 'Unknown error ocurred',
        });
        this.logger.error(error.message, error.stack);
        throw error;
    }
}
}
