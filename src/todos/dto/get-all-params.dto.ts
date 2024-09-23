import { PaginationDto } from "src/infrastructure/common-dtos/pagination.dto";

export class GetAllParamsDto extends PaginationDto {
    constructor() {super()}
    sort: boolean;
}