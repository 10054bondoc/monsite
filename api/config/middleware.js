module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: ["http://localhost:5000", "http://localhost:1337"],
      methods: "*",
    },
    parser: {
      enabled: true,
      multipart: true,
      formLimit: "10mb",
      jsonLimit: "10mb",
      textLimit: "10mb",
      formidable: {
        maxFileSize: 5 * 1024 * 1024 * 1024,
      },
    },
  },
};
