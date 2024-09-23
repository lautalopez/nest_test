import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateTodoDto {
    @IsNotEmpty()
    @IsString({always: true})
    name: string;
    @IsBoolean({groups: ['update'], always: false})
    done: boolean;
    // category: CategoryDto;
}
