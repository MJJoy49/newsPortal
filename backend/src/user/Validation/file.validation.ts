// src/user/validation/file-filter.ts
import { BadRequestException } from '@nestjs/common';
import { Express } from 'express';

// File filter function
export function ValidatedFile(
  req: any,
  file: Express.Multer.File,
  cb: Function,
) {
  const allowedExtensions = /^.*\.(jpg|png)$/;
  if (file.originalname.match(allowedExtensions)) {
    cb(null, true); // Accept the file
  } else {
    cb(new BadRequestException('Only jpg and png files are allowed'), false); // Reject the file
  }
}
