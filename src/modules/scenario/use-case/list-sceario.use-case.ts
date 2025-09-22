/* eslint-disable prettier/prettier */
import { Injectable, Logger, ServiceUnavailableException } from "@nestjs/common";
import { ListScenarioRepository } from "../repository/list-scenario.repositry";




@Injectable()
export class ListScenarioUseCase {
  constructor(
    private readonly listScenarioRepository: ListScenarioRepository,
    private readonly logger: Logger,
    ) {}

    async execute() {
        try {
            const scenario = await this.listScenarioRepository.listScenario();
            this.logger.log('Scenario list successfully', ListScenarioUseCase.name);
            return scenario;
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
