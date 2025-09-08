
import { Logger, Module } from '@nestjs/common';
import { ScenarioService } from './scenario.service';
import { ScenarioController } from './scenario.controller';
import * as UseCases from './use-case'
import * as Repositories from './repository'
import { SharedModule } from 'src/shared/shared.module';
import { PrismaService } from 'src/shared/databases/prisma.database';
import { ListScenarioRepository } from './repository/list-scenario.repositry';

const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  imports: [SharedModule],
  controllers: [ScenarioController],
  providers: [ListScenarioRepository, UseCases.ListScenarioUseCase, ScenarioService, Logger, PrismaService,  ...useCases, ...repositories],
  exports: [ListScenarioRepository],
})
export class ScenarioModule {}
