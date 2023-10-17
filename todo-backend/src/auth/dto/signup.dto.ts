import { ApiProperty } from '@nestjs/swagger';
export class SignUpDTO {
  @ApiProperty()
  email: string;

}
