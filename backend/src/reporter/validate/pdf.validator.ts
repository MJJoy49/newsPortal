import { BadRequestException } from '@nestjs/common';
export function pdfValidator(
  res: any,
  file: Express.Multer.File,
  cb: Function,
) {
  if (file.originalname.endsWith('.pdf')) {
    cb(null, true);
  } else {
    cb(new BadRequestException('Only PDF or DOC files allowed'), false);
  }
}
