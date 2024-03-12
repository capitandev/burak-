// Import necessary modules
import path from "path";
import multer from "multer";
import { v4 } from "uuid";

/**
 * MULTER IMAGE UPLOADER
 * @param {any} address - The address to store uploaded images
 * @returns {multer.StorageEngine} The multer disk storage engine
 */
function getTargetImageStorage(address: any): multer.StorageEngine {
  return multer.diskStorage({
    // Define destination directory for storing images
    destination: function (req, file, cb) {
      cb(null, `./uploads/${address}`);
    },
    // Define filename for uploaded images
    filename: function (req, file, cb) {
      // Get file extension
      const extension = path.parse(file.originalname).ext;
      // Generate random filename using UUID
      const random_name = v4() + extension;
      // Callback with the generated filename
      cb(null, random_name);
    },
  });
}

/**
 * Create a multer image uploader with specified address
 * @param {string} address - The address to store uploaded images
 * @returns {multer.Multer} The multer image uploader
 */
const makeUploader = (address: string): multer.Multer => {
  // Get multer storage engine with specified address
  const storage = getTargetImageStorage(address);
  // Return multer uploader with the obtained storage engine
  return multer({ storage: storage });
};

// Export the function to create multer image uploader
export default makeUploader;

// const product_storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/products");
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     const extension = path.parse(file.originalname).ext;
//     const random_name = v4() + extension;
//     cb(null, random_name);
//   },
// });

// export const uploadProductImage = multer({ storage: product_storage });