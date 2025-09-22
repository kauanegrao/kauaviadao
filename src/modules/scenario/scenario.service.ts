/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { CreateScenarioDto } from "./dto/create-scenario.dto";
import { UpdateScenarioDto } from "./dto/update-scenario.dto";
import { CreateScenarioUseCase, ListScenarioUseCase } from "./use-case";
import { DeleteScenarioUseCase } from "./use-case/delete-scenario.use-case";
import { FindOneScenarioUseCase } from "./use-case/find-one.scenario.use-case";
import { UpdateScenarioUseCase } from "./use-case/update-scenario.use-case";

@Injectable()
export class ScenarioService {
  constructor(private readonly createScenarioUseCase: CreateScenarioUseCase,
    private readonly listScenarioUseCase: ListScenarioUseCase,  
    private readonly  findoneScenarioUseCase: FindOneScenarioUseCase, 
    private readonly deleteScenarioUseCase: DeleteScenarioUseCase,
    private readonly updateScenarioUseCase: UpdateScenarioUseCase,

  ) {}

  create(data: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(data);
  }

  findAll() {
    return this.listScenarioUseCase.execute()

  }

  findOne(id: string) {
    return this.findoneScenarioUseCase.execute(id) ;
  }

  update(id: string, data: UpdateScenarioDto) {
    return this.updateScenarioUseCase.execute(id, data);
  }

  remove(id: string) {
    return this.deleteScenarioUseCase.execute(id);
  }
}