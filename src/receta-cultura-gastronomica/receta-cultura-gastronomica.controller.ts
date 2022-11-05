import { Controller } from '@nestjs/common';
import { RecetaCulturaGastronomicaService } from './receta-cultura-gastronomica.service';

@Controller('receta-cultura-gastronomica')
export class RecetaCulturaGastronomicaController {
    constructor(private readonly museumService: RecetaCulturaGastronomicaService) {}
}
