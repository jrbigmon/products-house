const multer = require('multer');
const path = require('path');

const storageFunction = (folder) => {
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join('src', 'public', 'image', folder))
    },
    filename: function (req, file, cb) {
      const filename = (Date.now() + file.filename)
      cb(null, filename)
    }
  })
  const upload = multer({ storage: storage })
}
module.exports = storageFunction;