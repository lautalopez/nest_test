import { PipeTransform, ArgumentMetadata, BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ParseIdPipe implements PipeTransform<string, number> {
    transform(value: string, metadata: ArgumentMetadata) {
            const val = parseInt(value, 10);
            if (isNaN(val)) throw new BadRequestException('id must be number');
            if (val <= 0) throw new BadRequestException('id must be positive');
            return val;
    }
}