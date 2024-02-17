import { Request } from 'express';
import multer from 'multer';
import { join } from 'path';

//menyimpan konfigurasi uploader
export const uploader = (filePrefix: string, folderName?: string) => {
  //filePrefix -> Bisa edit nama file yang diupload
  //1. Define default directory
  const defaultDir = join(__dirname, '../../public'); //mengarahkan ke directory file utama

  //2. Configure storing and creating name
  const configStorage = multer.diskStorage({
    //A. Mengatur lokasi penyimpanan file
    destination: (
      req: Request,
      file: Express.Multer.File,
      cb: (error: Error | null, destination: string) => void,
    ) => {
      const fileDestination = folderName ? defaultDir + folderName : defaultDir;
      console.log('Folder Tujuan : ', fileDestination); //hanya untuk cek alamat penyimpanan
      cb(null, fileDestination);
    },

    //B. Mengatur penamaan file
    filename: (
      req: Request,
      file: Express.Multer.File,
      cb: (error: Error | null, fileName: string) => void,
    ) => {
      //Ex file name : photo.jpg
      const oriNameParts = file.originalname.split('.'); //oriNameParts = ["photo",'jpg"]
      console.log('Original file name : ', oriNameParts);
      const extension = oriNameParts[oriNameParts.length - 1]; //"jpg"
      const newName = filePrefix + Date.now() + '.' + extension;
      console.log('New file name : ', newName);

      cb(null, newName);
    },
  });

  return multer({ storage: configStorage });
};
