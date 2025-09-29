/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { CreateOptionDto } from "./dto/create-option.dto";
import { UpdateOptionDto } from "./dto/update-option.dto";
import { CreateOptionUseCase } from "./use-case/create-option.use-case";
import { FindOneOpinonUseCase } from "./use-case/find-one-option.use-case";
import { DeleteOptionUseCase } from "./use-case/delete-option.use-case";
import { UpdateOptionUseCase } from "./use-case/update-option.use-case";
import { ListOptionUseCase } from "./use-case/list-option.use-case";

@Injectable()
export class OptionService {
  constructor(private readonly createOptionUseCase: CreateOptionUseCase,
    private readonly listOptionUseCase: ListOptionUseCase,  
    private readonly  findoneOptionUseCase: FindOneOpinonUseCase, 
    private readonly deleteOptionUseCase: DeleteOptionUseCase,
    private readonly updateOptionUseCase: UpdateOptionUseCase,

  ) {}

  create(data: CreateOptionDto) {
    return this.createOptionUseCase.execute(data);
  }

  findAll() {
    return this.listOptionUseCase.execute()

  }

  findOne(id: string) {
    return this.findoneOptionUseCase.execute(id) ;
  }

  update(id: string, data: UpdateOptionDto) {
    return this.updateOptionUseCase.execute(id, data);
  }

  remove(id: string) {
    return this.deleteOptionUseCase.execute(id);
  }
}