// 필요한 모듈 가져오기
import path from "path"; // 파일 경로 관리를 위한 모듈
import multer from "multer"; // 파일 업로드를 위한 multer 모듈
import { v4 } from "uuid"; // 고유한 파일 이름 생성을 위한 UUID 모듈

/**
 * multer 이미지 업로더 설정
 * @param {any} address - 업로드된 이미지를 저장할 경로
 * @returns {multer.StorageEngine} multer 디스크 스토리지 엔진
 */
function getTargetImageStorage(address: any): multer.StorageEngine {
  return multer.diskStorage({
    // 이미지를 저장할 디렉토리 설정
    destination: function (req, file, cb) {
      cb(null, `./uploads/${address}`);
    },
    // 업로드된 이미지의 파일 이름 설정
    filename: function (req, file, cb) {
      // 파일 확장자 추출
      const extension = path.parse(file.originalname).ext;
      // UUID를 사용하여 임의의 파일 이름 생성
      const random_name = v4() + extension;
      // 생성된 파일 이름으로 콜백 호출
      cb(null, random_name);
    },
  });
}

/**
 * 지정된 경로에 대한 multer 이미지 업로더 생성
 * @param {string} address - 업로드된 이미지를 저장할 경로
 * @returns {multer.Multer} multer 이미지 업로더
 */
const makeUploader = (address: string): multer.Multer => {
  // 지정된 경로에 대한 multer 스토리지 엔진 가져오기
  const storage = getTargetImageStorage(address);
  // 가져온 스토리지 엔진을 사용하여 multer 업로더 생성
  return multer({ storage: storage });
};

// multer 이미지 업로더 생성 함수 내보내기
export default makeUploader;

// 아래의 코드는 현재 사용되지 않으므로 주석 처리되어 있습니다.
// 다른 경로에 대한 multer 스토리지 및 업로더를 생성하는 방법을 보여줍니다.
// 이 부분의 코드를 사용하려면, 새로운 업로더를 생성하고 내보낼 수 있습니다.
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
